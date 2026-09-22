const examples = [
  {region:'Long Island',format:'mixed',division:'3.0',season:'Fall 2026',title:'Long Island 3.0',description:'Explore a compact team table with all nine teams and expandable statistics.',action:'View standings',href:'standings.html',count:'9 teams'},
  {region:'NJ / PA',format:'mixed',division:'4.0 (50+)',season:'Fall 2026',title:'NJ / PA 4.0 (50+)',description:'See matchups with opponents, dates, and times in a simpler schedule.',action:'View matchups',href:'schedule.html',count:'12 matchups'}
];
const formatButtons = [...document.querySelectorAll('[data-format]')];
const regionSelect = document.querySelector('#region-filter');
const results = document.querySelector('#league-results');
const count = document.querySelector('#results-count');
const validFormats = ['all','mixed','gender','local','ladder'];
let format = new URLSearchParams(location.search).get('format') || 'all';
if (!validFormats.includes(format)) format = 'all';
function renderExplorer() {
  const region = regionSelect.value;
  formatButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.format === format)));
  const matches = examples.filter(item => (format === 'all' || item.format === format) && (region === 'all' || item.region === region));
  count.textContent = matches.length ? `${matches.length} sample ${matches.length === 1 ? 'division' : 'divisions'} to explore` : 'No sample division for that selection yet';
  results.innerHTML = matches.length ? matches.map(item => `<article class="league-card"><div class="league-card-top"><span class="league-region">${item.region}</span><span>${item.season}</span></div><h3>${item.title}</h3><p>${item.description}</p><div class="league-meta"><span>Mixed league</span><span>Division ${item.division}</span><span>${item.count}</span></div><a href="${item.href}">${item.action} <span aria-hidden="true">↗</span></a></article>`).join('') : '<div class="empty-state"><h3>More league views are coming.</h3><p>We only have screenshot data for two mixed league divisions. You can explore other formats and regions on the current league site.</p><a href="https://www.crossclubpickleball.com/leagues/dashboard" target="_blank" rel="noopener noreferrer">Open current league site ↗</a></div>';
}
formatButtons.forEach(button => button.addEventListener('click', () => {
  format = button.dataset.format;
  const url = new URL(location.href);
  if (format === 'all') url.searchParams.delete('format');
  else url.searchParams.set('format', format);
  history.replaceState(null, '', url);
  renderExplorer();
}));
regionSelect.addEventListener('change', renderExplorer);
renderExplorer();
