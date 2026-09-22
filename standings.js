// Captured from the public Cross Club dashboard, September 22, 2026.
// Static data for the Fall 2026 Long Island Mixed 3.0 design preview.
const teams = [
  {rank:1,name:'Paddles Up Bellport',pod:'East',record:'2-0-0',rate:100,games:'52-12',home:'0-0',away:'2-0',conference:'2-0-0',clutch:'8-5',mixed:'25-7',men:'15-1',women:'12-4',ppg:'20.64',points:367},
  {rank:2,name:'TopSpin Pickleball',pod:'West',record:'2-0-0',rate:100,games:'40-24',home:'1-0',away:'1-0',conference:'2-0-0',clutch:'7-12',mixed:'22-10',men:'14-2',women:'4-12',ppg:'19.92',points:141},
  {rank:3,name:'Pickleball Heaven',pod:'East',record:'1-0-0',rate:100,games:'29-3',home:'1-0',away:'0-0',conference:'1-0-0',clutch:'5-1',mixed:'15-1',men:'6-2',women:'8-0',ppg:'20.66',points:239},
  {rank:4,name:'Paddles Up East Setauket',pod:'Central',record:'1-1-0',rate:50,games:'32-32',home:'1-1',away:'0-0',conference:'1-1-0',clutch:'13-6',mixed:'13-19',men:'7-9',women:'12-4',ppg:'18.69',points:-11},
  {rank:5,name:'Picklr Centereach',pod:'Central',record:'1-1-0',rate:50,games:'42-22',home:'1-0',away:'0-1',conference:'1-1-0',clutch:'6-9',mixed:'24-8',men:'11-5',women:'7-9',ppg:'19.75',points:239},
  {rank:6,name:'Pickleball Hall',pod:'Central',record:'1-1-0',rate:50,games:'25-39',home:'1-0',away:'0-1',conference:'1-1-0',clutch:'5-10',mixed:'12-20',men:'9-7',women:'4-12',ppg:'16.61',points:-118},
  {rank:7,name:'Pickleball Xpress',pod:'West',record:'0-1-0',rate:0,games:'4-28',home:'0-0',away:'0-1',conference:'0-1-0',clutch:'3-1',mixed:'1-15',men:'0-8',women:'3-5',ppg:'12.41',points:-278},
  {rank:8,name:'Box Pickleball',pod:'East',record:'0-2-0',rate:0,games:'19-45',home:'0-1',away:'0-1',conference:'0-2-0',clutch:'9-11',mixed:'8-24',men:'1-15',women:'10-6',ppg:'17.34',points:-201},
  {rank:9,name:'Harbor Pickleball',pod:'West',record:'0-2-0',rate:0,games:'13-51',home:'0-1',away:'0-1',conference:'0-2-0',clutch:'6-7',mixed:'8-24',men:'1-15',women:'4-12',ppg:'14.53',points:-378}
];
// Rank, name, team, games, wins, losses. Affiliations verified in each team view.
const players = [
  [1,'Darren Scheer','Pickleball Heaven',6,6,0],
  [2,'Christofer Wilbur','Pickleball Heaven',7,7,0],
  [3,'Bridget Defeo','Pickleball Heaven',7,7,0],
  [4,'Denise Sullivan','Pickleball Heaven',6,6,0],
  [5,'Freddy Ortiz','Paddles Up Bellport',13,13,0],
  [6,'Trevor DeFeo','Paddles Up Bellport',13,13,0],
  [7,'Sandra Coon','Pickleball Heaven',6,6,0],
  [8,'Tracey Morbillo','Pickleball Heaven',7,7,0],
  [9,'Max Fischer','Picklr Centereach',5,5,0],
  [10,'Joseph Kennion','Paddles Up Bellport',6,6,0],
  [11,'Nathan Gold','Picklr Centereach',6,6,0],
  [12,'Kate Bleyer','Picklr Centereach',12,11,1],
  [13,"D'Arcy Coon",'Pickleball Heaven',7,6,1],
  [14,'Mehrooz Hassan','Paddles Up East Setauket',7,6,1],
  [15,'Thomas Steinmuller','TopSpin Pickleball',12,10,2],
  [16,'Renee Navarrete','Paddles Up Bellport',6,5,1],
  [17,'Jeff Antinoro','Paddles Up Bellport',7,6,1],
  [18,'Joseph Cavaliere','TopSpin Pickleball',7,6,1],
  [19,'Regina Watson','Paddles Up Bellport',12,10,2],
  [20,'Patti Schultz','Picklr Centereach',11,9,2]
];
// Points per game, total point difference, clutch, mixed, gender doubles.
const playerExtras = [
  [21,62,'0–0','4–0','2–0'],[21,63,'0–0','3–0','4–0'],
  [21,82,'0–0','4–0','3–0'],[21,61,'1–0','2–0','4–0'],
  [21,130,'0–0','6–0','7–0'],[21,112,'1–0','7–0','6–0'],
  [21,57,'1–0','4–0','2–0'],[21,54,'2–0','3–0','4–0'],
  [21,50,'0–0','3–0','2–0'],[21,76,'0–0','3–0','3–0'],
  [21,50,'0–0','3–0','3–0'],[20.83,91,'2–1','6–0','5–1'],
  [20.71,70,'0–1','3–0','3–1'],[20.71,29,'1–1','3–1','3–0'],
  [20.67,75,'0–2','6–2','4–0'],[20.67,46,'0–1','2–1','3–0'],
  [20.71,38,'1–1','3–1','3–0'],[20.71,32,'2–1','2–1','4–0'],
  [20.67,67,'1–2','6–0','4–2'],[19.91,55,'1–1','6–0','3–2']
];
const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const difference = record => {const [won,lost] = record.split('-').map(Number); return won-lost;};
const qs = new URLSearchParams(location.search);
for (const [key, selector] of [['season','#season-filter'],['region','#region-filter'],['type','#type-filter'],['division','#division-filter']]) {
  const value = qs.get(key);
  if (value && [...$(selector).options].some(option => option.value === value)) $(selector).value = value;
}
teams.forEach(team => $('#team-filter').add(new Option(team.name,team.name)));
function renderTeams() {
  const pod = $('#pod-filter').value;
  $('#standings-list').innerHTML = teams.filter(team => pod === 'all' || pod === team.pod).map(team => {
    const d = difference(team.games);
    return `<details class="team-card"><summary><span class="team-identity"><span class="rank-badge">${team.rank}</span><strong>${escapeHtml(team.name)}</strong><small>${team.pod} pod</small></span><span class="metric"><small>Matches</small><strong>${team.record}</strong></span><span class="metric"><small>Win rate</small><strong>${team.rate}%</strong></span><span class="metric"><small>Games +/-</small><strong class="${d < 0 ? 'negative' : 'positive'}">${d > 0 ? '+' : ''}${d}</strong></span><span class="expand-control"><span class="show-label">More stats</span><span class="hide-label">Less stats</span></span></summary><div class="team-details"><div class="detail-cell"><small>Games won–lost</small><strong>${team.games}</strong></div><div class="detail-cell"><small>Conference</small><strong>${team.conference}</strong></div><div class="detail-cell"><small>Home / away</small><strong>${team.home} / ${team.away}</strong></div><div class="detail-cell"><small>Mixed</small><strong>${team.mixed}</strong></div><div class="detail-cell"><small>Men's</small><strong>${team.men}</strong></div><div class="detail-cell"><small>Women's</small><strong>${team.women}</strong></div><div class="detail-cell"><small>Clutch</small><strong>${team.clutch}</strong></div><div class="detail-cell"><small>Avg points / game</small><strong>${team.ppg}</strong></div><div class="detail-cell"><small>Point differential</small><strong>${team.points > 0 ? '+' : ''}${team.points}</strong></div><button type="button" class="roster-link" data-team="${escapeHtml(team.name)}">See featured players on this team ↗</button></div></details>`;
  }).join('');
}
function renderPlayers() {
  const team = $('#team-filter').value;
  const matches = players.filter(player => team === 'all' || player[2] === team);
  $('#players-list').innerHTML = matches.length ? matches.map(([rank,name,club,games,wins,losses]) => {
    const [ppg,pointDiff,clutch,mixed,gender] = playerExtras[rank-1];
    return `<details class="player-card"><summary><span class="player-identity"><span class="rank-badge">${rank}</span><strong>${escapeHtml(name)}</strong><small>${escapeHtml(club)}</small></span><span class="metric"><small>Games</small><strong>${games}</strong></span><span class="metric"><small>Record</small><strong>${wins}–${losses}</strong></span><span class="metric"><small>Win rate</small><strong>${Math.floor(wins / games * 10000) / 100}%</strong></span><span class="expand-control"><span class="show-label">More stats</span><span class="hide-label">Less stats</span></span></summary><div class="player-details"><span><small>Points per game</small><strong>${ppg}</strong></span><span><small>Point differential</small><strong>${pointDiff > 0 ? '+' : ''}${pointDiff}</strong></span><span><small>Clutch record</small><strong>${clutch}</strong></span><span><small>Mixed record</small><strong>${mixed}</strong></span><span><small>Gender doubles</small><strong>${gender}</strong></span></div></details>`;
  }).join('') : '<div class="no-players">No players from this team appear in the top 20. See the current league dashboard for the full roster.</div>';
}
function selectView(view) {
  document.querySelectorAll('[data-view]').forEach(button => {
    if (button.dataset.view === view) button.setAttribute('aria-current','page');
    else button.removeAttribute('aria-current');
  });
  $('#standings-view').hidden = view !== 'standings';
  $('#players-view').hidden = view !== 'players';
  const url = new URL(location.href);
  url.searchParams.set('view',view);
  history.replaceState(null,'',url);
}
function updateContext() {
  const season = $('#season-filter').value, region = $('#region-filter').value, type = $('#type-filter').value, division = $('#division-filter').value;
  const available = season === 'Fall 2026' && region === 'Long Island' && type === 'Mixed' && division === '3.0';
  $('#sample-content').hidden = !available;
  $('#unavailable-view').hidden = available;
  const url = new URL(location.href);
  for (const [key,value] of Object.entries({season,region,type,division})) url.searchParams.set(key,value);
  history.replaceState(null,'',url);
}
document.querySelectorAll('.context-filters select').forEach(select => select.addEventListener('change',updateContext));
document.querySelectorAll('[data-view]').forEach(button => button.addEventListener('click',() => selectView(button.dataset.view)));
$('#pod-filter').addEventListener('change',renderTeams);
$('#team-filter').addEventListener('change',renderPlayers);
$('#standings-list').addEventListener('click',event => {
  const link = event.target.closest('.roster-link');
  if (!link) return;
  $('#team-filter').value = link.dataset.team;
  renderPlayers();
  selectView('players');
  $('.league-tabs').scrollIntoView({behavior:'smooth',block:'start'});
});
renderTeams();
renderPlayers();
selectView(qs.get('view') === 'players' ? 'players' : 'standings');
updateContext();
