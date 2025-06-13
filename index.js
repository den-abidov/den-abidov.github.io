// Telegram Mini App API (опционально)
if (window.Telegram && Telegram.WebApp) {
  Telegram.WebApp.ready();
  Telegram.WebApp.expand();
}

// Bootstrap аккордион — автоинициализация не нужна (работает по data-bs-)
// Но если захочешь — вот пример:
// document.querySelectorAll('.accordion-collapse').forEach(el => new bootstrap.Collapse(el));

console.log('Telegram Mini App loaded!');
