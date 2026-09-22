// Snapshot values transcribed from the screenshots supplied for the redesign.
const teams = [
  {rank:1,name:'Paddles Up Bellport',pod:'East',record:'2-0-0',rate:'100%',games:'52-12',home:'0-0',away:'2-0',conference:'2-0-0',clutch:'8-5',mixed:'25-7',men:'15-1',women:'12-4'},
  {rank:2,name:'TopSpin Pickleball',pod:'West',record:'2-0-0',rate:'100%',games:'40-24',home:'1-0',away:'1-0',conference:'2-0-0',clutch:'7-12',mixed:'22-10',men:'14-2',women:'4-12'},
  {rank:3,name:'Pickleball Heaven',pod:'East',record:'1-0-0',rate:'100%',games:'29-3',home:'1-0',away:'0-0',conference:'1-0-0',clutch:'5-1',mixed:'15-1',men:'6-2',women:'8-0'},
  {rank:4,name:'Paddles Up East Setauket',pod:'Central',record:'1-1-0',rate:'50%',games:'32-32',home:'1-1',away:'0-0',conference:'1-1-0',clutch:'13-6',mixed:'13-19',men:'7-9',women:'12-4'},
  {rank:5,name:'Picklr Centereach',pod:'Central',record:'1-1-0',rate:'50%',games:'42-22',home:'1-0',away:'0-1',conference:'1-1-0',clutch:'6-9',mixed:'24-8',men:'11-5',women:'7-9'},
  {rank:6,name:'Pickleball Hall',pod:'Central',record:'1-1-0',rate:'50%',games:'25-39',home:'1-0',away:'0-1',conference:'1-1-0',clutch:'5-10',mixed:'12-20',men:'9-7',women:'4-12'},
  {rank:7,name:'Pickleball Xpress',pod:'West',record:'0-1-0',rate:'0%',games:'4-28',home:'0-0',away:'0-1',conference:'0-1-0',clutch:'3-1',mixed:'1-15',men:'0-8',women:'3-5'},
  {rank:8,name:'Box Pickleball',pod:'East',record:'0-2-0',rate:'0%',games:'19-45',home:'0-1',away:'0-1',conference:'0-2-0',clutch:'9-11',mixed:'8-24',men:'1-15',women:'10-6'},
  {rank:9,name:'Harbor Pickleball',pod:'West',record:'0-2-0',rate:'0%',games:'13-51',home:'0-1',away:'0-1',conference:'0-2-0',clutch:'6-7',mixed:'8-24',men:'1-15',women:'4-12'}
];
const body = document.querySelector('#standings-body');
const filter = document.querySelector('#pod-filter');
const diff = record => { const [won,lost] = record.split('-').map(Number); return won-lost; };
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[character]));
function render() {
  const selected = filter.value;
  body.innerHTML = teams.filter(team => selected === 'all' || team.pod === selected).map(team => {
    const d = diff(team.games);
    const safeName = escapeHtml(team.name);
    const id = `team-${team.rank}`;
    return `<tr class="team-row"><td class="rank">${team.rank}</td><td><span class="team-cell"><span class="team-badge" aria-hidden="true">${escapeHtml(team.name.split(' ').map(word=>word[0]).slice(0,2).join(''))}</span>${safeName}</span></td><td>${team.pod}</td><td>${team.record}</td><td class="rate">${team.rate}</td><td class="diff ${d>0?'positive':d<0?'negative':''}">${d>0?'+':''}${d}</td><td><button class="detail-button" type="button" aria-expanded="false" aria-controls="${id}" aria-label="Show more statistics for ${safeName}">More <span aria-hidden="true">⌄</span></button></td></tr><tr id="${id}" class="detail-row" hidden><td colspan="7"><div class="detail-grid"><div class="stat-group"><strong>Conference</strong><span>${team.conference} record</span></div><div class="stat-group"><strong>Venue</strong><span>Home ${team.home} · Away ${team.away}</span></div><div class="stat-group"><strong>Games & clutch</strong><span>Games ${team.games} · Clutch ${team.clutch}</span></div><div class="stat-group"><strong>Match types</strong><span>Mixed ${team.mixed} · Men’s ${team.men} · Women’s ${team.women}</span></div></div></td></tr>`;
  }).join('');
}
filter?.addEventListener('change', render);
body?.addEventListener('click', event => {
  const button = event.target.closest('.detail-button');
  if (!button) return;
  const details = document.getElementById(button.getAttribute('aria-controls'));
  const open = button.getAttribute('aria-expanded') !== 'true';
  button.setAttribute('aria-expanded', String(open));
  button.setAttribute('aria-label', `${open ? 'Hide' : 'Show'} more statistics for ${button.closest('tr').querySelector('.team-cell').textContent}`);
  details.hidden = !open;
});
render();
