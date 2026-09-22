// Static transcription of the NJ / PA 4.0 (50+) dashboard screenshot.
const matchups = [
  ['Bounce Malvern Black','Bounce Malvern Boom','Sep 23','7:00 PM'],
  ['Allstar Pickler','Premiere','Sep 26','12:00 PM'],
  ['Jersey Pickleball Club','Flemington Blue','Sep 26','12:00 PM'],
  ['Flemington Green','APC Garden State','Sep 26','1:00 PM'],
  ['ACE Moorestown','Pickle Place','Sep 26','2:00 PM'],
  ['Pickle Place','Premiere','Sep 27','12:00 PM'],
  ['Bounce Malvern Boom','Stelton Sports','Sep 27','12:00 PM'],
  ['Flemington Green','Allstar Pickler','Sep 27','1:00 PM'],
  ['APC Garden State','Flemington Blue','Sep 27','1:00 PM'],
  ['Bounce Malvern Black','Jersey Pickleball Club','Sep 27','6:00 PM'],
  ['Pickleball Palace','Stelton Sports','Oct 4','2:00 PM'],
  ['ACE Moorestown','Pickleball Palace','Nov 1','9:00 AM']
];
const teamFilter = document.querySelector('#team-filter');
const matchList = document.querySelector('#matchup-list');
const matchCount = document.querySelector('#matchup-count');
const teams = [...new Set(matchups.flatMap(([home,away]) => [home,away]))].sort((a,b) => a.localeCompare(b));
teams.forEach(team => teamFilter.add(new Option(team,team)));
function renderMatchups() {
  const selected = teamFilter.value;
  const items = matchups.filter(([home,away]) => selected === 'all' || home === selected || away === selected);
  matchCount.textContent = `Showing ${items.length} of ${matchups.length} matchups`;
  matchList.innerHTML = items.map(([home,away,date,time]) => `<article class="matchup-card"><div class="match-date"><span>${date.split(' ')[0]}</span><strong>${date.split(' ')[1]}</strong><small>2026</small></div><div class="match-teams"><span class="match-label">MATCHUP</span><h3>${home} <span>vs</span> ${away}</h3></div><div class="match-time"><span>START TIME</span><strong>${time}</strong></div><a href="https://www.crossclubpickleball.com/leagues/dashboard" target="_blank" rel="noopener noreferrer" aria-label="View current dashboard for ${home} versus ${away}">Live details ↗</a></article>`).join('');
}
teamFilter.addEventListener('change', renderMatchups);
renderMatchups();
