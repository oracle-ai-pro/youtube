const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const resultsEl = document.getElementById('results');
const player = document.getElementById('player');

// Простейший стартовый ролик (по желанию)
const DEFAULT_VIDEO_ID = 'dQw4w9WgXcQ';

function setVideo(id) {
  player.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`;
}

setVideo(DEFAULT_VIDEO_ID);

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const q = searchInput.value.trim();
  if (!q) return;

  // ЛАЙТ-ВАРИАНТ: просто открываем поиск YouTube в новой вкладке
  // или в WebView это откроется в том же контейнере
  const url = `https://m.youtube.com/results?search_query=${encodeURIComponent(q)}`;
  window.location.href = url;
});

// Если хочешь “список” — можно сделать фейковый список:
function addFakeResult(title, id) {
  const item = document.createElement('div');
  item.className = 'result-item';
  item.innerHTML = `
    <div class="result-title">${title}</div>
    <div class="result-meta">Lite • локальный список</div>
  `;
  item.addEventListener('click', () => setVideo(id));
  resultsEl.appendChild(item);
}

// Пример: локальные “избранные”
addFakeResult('YouTube Lite демо', DEFAULT_VIDEO_ID);
