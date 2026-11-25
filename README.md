# Moroccan Footballers

A static, responsive squad-depth dashboard for Moroccan footballers, arranged in a 4-2-3-1 formation and ranked by estimated market value.

## Run locally

No package installation is required:

```bash
python3 -m http.server 4173
```

Open <http://localhost:4173>.

## Features

- Ten value-ranked players in each of ten primary-position groups: GK, RB, CB, LB, DM, CM, CAM, RW, LW and ST.
- A 4-2-3-1 pitch with 11 slots. The two centre-back slots and two holding-midfield slots share their position group but show different ranked players.
- Each player is assigned to exactly one primary-position group. The data validates unique player IDs, unique names and exactly ten players per group at startup.
- Player search, profile modal and market values in euros.
- Responsive layout and light/dark theme.
- Source links on the methodology panel and each player profile.

## Ranking methodology

The app uses Moroccan-nationality player records rather than limiting the pool to the latest senior call-up. Players are assigned to one primary position using the position listed in the source data; a player is never duplicated across position groups. Each group is sorted from highest to lowest estimated market value and capped at ten.

The two centre-back and two defensive-midfield places in the 4-2-3-1 are two tactical slots from the same underlying primary-position group. The formation displays the first and second ranked players in those separate slots, so the same player does not appear twice on the pitch.

## Sources and valuation caveats

The data snapshot was checked on **25 November 2026**. Higher-value entries are cross-checked against the November 2026 Atlas Lions Insider market-value tracker. Other nationality and position records are drawn from Transfermarkt's Moroccan player market-value ranking; ProMatch24 describes its Morocco database as updated daily using Transfermarkt market-value data.

- [Transfermarkt — most valuable Moroccan players](https://www.transfermarkt.com/spieler-statistik/wertvollstespieler/marktwertetop/mw/land_id/107)
- [Transfermarkt — Morocco detailed squad](https://www.transfermarkt.com/morocco/kader/verein/3575/saison_id/2026)
- [ProMatch24 — Morocco player database](https://promatch24.com/players/?country_id=17704)
- [Atlas Lions Insider — November 2026 market-value tracker](https://www.atlaslionsinsider.com/news/analysis/morocco-football-market-values-november-2026/)

**Market value is an estimate, not a transfer fee, asking price or rating of football ability.** Different pages may refresh on different dates, and cached lower-value entries may lag behind the latest player valuation. Treat the figures as a dated reference snapshot and open the linked source to check a value before relying on it. This is a static dataset, not a live API feed.

This is an independent fan project and is not affiliated with the Royal Moroccan Football Federation (FRMF).
