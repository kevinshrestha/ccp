# Proposed Cross Club site structure

The current site has separate registration and league-format menus. The dashboard adds league type, region, division, and season filters alongside six separate views. The redesign gives visitors one clear choice first: join the league or follow a season.

## Public site

1. **Home** — concise explanation; find a league by region; join as a player or club; current season link.
2. **Leagues** — browse regions, formats, divisions, and seasons; each league has one detail page with schedule, standings, teams, players, and playoffs.
3. **How it works** — club format, eligibility, division rules, season flow, and frequently asked questions.
4. **Register** — choose Player, Club, or Local League first; then a form relevant to that choice. Actual forms and payments require approved requirements and an integration.
5. **About** — organization, mission, and contact.
6. **Contact** — one contact flow, with inquiry type selection; incident report remains separate and easy to locate.

Primary navigation: **Leagues · How it works · About · Contact · Register**. The league finder and current season are prominent on Home. On mobile, keep the same order.

## League detail / dashboard

The context selector lives in one horizontal band: **Season → Region → League type → Division**. These choices are preserved while visitors move between views and are encoded in a shareable URL when live data is connected.

Within that selected division, show **Overview · Schedule & results · Standings · Teams · Players · Playoffs**. Open the Overview on current or next matchups and a compact standings preview. A match opens its own detail and lineup, so “Lineups” does not compete as a global top-level item.

For mobile, the context fields stack into a compact filter drawer and the views become a horizontally scrollable tab row. Matchups become readable cards, with date/time and lineup action attached to the correct match.

## Source and integration notes

The public navigation and the user-provided dashboard screenshots informed this structure. An XML sitemap was not accessible. Live schedules, standings, registrations, payments, and incident reports must be connected to their real source before this replaces the current site.
