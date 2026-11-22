# PayoutLens

**Know what your hour is really worth.**

Delivery riders and cab drivers are paid one lump sum after commission, fuel, and penalties. PayoutLens turns that lump sum into the number that matters for their decisions: what each working hour actually paid.

Paste your payout messages or CSV rows. In seconds you see your take-home, your after-fuel earnings, and your effective hourly rate, with the arithmetic shown beside every figure. Nothing leaves your browser.

---

## The problem

- A weekly payout of ₹22,000 can hide the fact that the worker kept about ₹212 an hour after fuel and fees.
- Platforms show gross earnings and bonuses prominently, but not the cost of a specific shift, route, or platform.
- Penalties with no matched orders are hard to challenge without knowing what to ask.
- Workers decide which shifts to take on feel, not on numbers.

## The solution

| Question a worker asks | What PayoutLens shows |
|---|---|
| "What did I really earn?" | Gross, commission, penalties, fuel, and take-home, with the arithmetic |
| "What did my time pay?" | Effective hourly rate after fuel, per payout and per week |
| "Which shifts are worth it?" | Slot and platform comparison, e.g. lunch vs evening |
| "What should I change?" | A suggested swap, with the estimated difference |
| "What do I ask the platform?" | Penalties with no matched orders, flagged as questions |
| "Can I prove my income?" | A printable monthly summary |

## Why it is feasible

- **Works today, with no setup.** Four HTML pages, no server, no database, no account.
- **Uses data workers already have.** Payout messages and weekly statements are already on the phone. Nothing new needs to be collected.
- **Simple, checkable maths.** Every number follows one formula, shown on screen: take-home = gross + incentive − commission − penalty; after fuel = take-home − fuel; rate = after fuel ÷ hours.
- **Built for the demo.** Synthetic sample data loads in one click, so any judge can test the full flow in under a minute.

## Why it is viable

- **Large, clear need.** Delivery and ride-hailing work is a major source of income in Indian cities, and the people doing it make daily decisions with incomplete information.
- **Privacy as a feature.** Workers don't have to share bank logins or payout records with a server. That lowers the trust barrier that stops many finance apps from being used.
- **Low cost to serve.** A static, browser-only product has almost no running cost, so it can be shared freely.
- **Clear paths to revenue or impact** (not built yet, see Roadmap): a paid pro version for weekly reports, partnerships with worker unions or cooperatives, and lending-partner reports based on the printable income summary, with the worker's consent.

## Why it is different

Gig-earnings trackers already exist, mostly for US platforms such as Uber, Lyft, and DoorDash. PayoutLens focuses on:

- **Indian payout formats and deductions**, such as commission, penalties with no matched orders, and fuel allowances, rather than US mileage and tax rules.
- **Shift-level decisions**, comparing time slots and platforms, not just totals.
- **Questions, not accusations.** A penalty with no matched orders becomes a question to send the platform, with the wording ready to copy.
- **No account and no upload.** The whole product runs in the browser.

## How to run

**Live demo:** https://husnabegum02.github.io/PayoutLens/

**Or run locally:**
1. Download or clone this repository.
2. Open `index.html` in Chrome, Edge, or Firefox.
3. Click **Try the demo**, then **Load sample SMS**, then **Analyse**.

No installation or server is needed. An internet connection is needed to load fonts, images, and the Tailwind CSS stylesheet. If the styling looks missing on first load, refresh the page.

## Screens

| Screen | File | What it does |
|---|---|---|
| Home | `index.html` | The problem, the promise, and how it works |
| Add payouts | `add-payouts.html` | Paste SMS or CSV, load samples, or upload a file |
| Dashboard | `dashboard.html` | Hourly rate, slot and platform comparison, suggested change |
| Details | `details.html` | Payout table with expandable rows, flagged penalties, trend chart |

## Privacy

- All calculations run in the browser.
- Nothing is uploaded, stored on a server, or shared.
- No login, account, or bank connection is required.

## Limitations (honest scope)

- Payout parsing covers the sample formats in this prototype. Real messages from each platform will need testing and small adjustments.
- Hours are entered by the worker, so the hourly rate is only as accurate as those entries.
- The sample data is synthetic and labelled as such in the app.
- Figures are estimates. "Needs review" marks a question for the platform, not a finding of wrongdoing.
- The page uses sample photos generated for illustration. They are labelled as example images.
- This is a hackathon prototype. It is not tax, legal, or financial advice.

## Roadmap

1. **Real message testing:** collect anonymised payout messages from riders and cab drivers, and extend the parser.
2. **Automatic input:** read payout messages on the device, with the worker's permission.
3. **Weekly alerts:** a short summary each Monday, showing whether this week beat last week.
4. **Shift recommendations:** based on the worker's own history, with enough data before advice is given.
5. **Regional languages:** Hindi and other local languages for the main screens.

## Tech

HTML, CSS, and JavaScript. Tailwind CSS and Google Fonts are loaded from their CDNs.

## Team-OBSCURA

HusnaBegum02 (Husna Begum-TeamLead)
ch.priyaDarsini
G.Rishika
