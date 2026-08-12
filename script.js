// スムーススクロール
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      const target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// フェードイン演出
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.get-card, .staff-card, .industry-card, .feature-badge, .faq-item')
  .forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

const style = document.createElement('style');
style.textContent = `
  .is-visible {
    opacity: 1 !important;
    transform: translateY(0) !important;
  }
`;
document.head.appendChild(style);

// 申込フォーム送信：メールソフト起動＋内容自動埋め込み
function submitApplyForm(e) {
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);

  const name = data.get('name') || '';
  const email = data.get('email') || '';
  const job = data.get('job') || '';
  const usecase = data.get('usecase') || '';
  const people = data.get('people') || '';
  const date = data.get('date') || '';
  const message = data.get('message') || '';

  const subject = '【会場参加】「AI社員」体験会 申し込み';

  const body =
    '━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '「AI社員」の賢い雇い方 実践・体験会\n' +
    '【会場参加】お申し込み\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━\n\n' +
    '■ お名前\n' + name + '\n\n' +
    '■ メールアドレス\n' + email + '\n\n' +
    '■ お仕事\n' + job + '\n\n' +
    '■ AI社員の活用希望\n' + usecase + '\n\n' +
    '■ 会場参加人数\n' + people + '\n\n' +
    '■ 参加希望日程\n' + date + '\n\n' +
    '■ その他ご期待・ご要望\n' + (message || '（なし）') + '\n\n' +
    '━━━━━━━━━━━━━━━━━━━━━━━\n' +
    '※このメールを送信することで、お申し込みが完了します。\n' +
    '折り返し、お振込みのご案内をお送りいたします。';

  const mailto = 'mailto:info@cosmics.co.jp'
    + '?subject=' + encodeURIComponent(subject)
    + '&body=' + encodeURIComponent(body);

  window.location.href = mailto;
  return false;
}
