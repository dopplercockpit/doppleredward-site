# Medium Blog Migration Report

Generated 24 blog pages from 26 selected Medium stories.

## Repo integration

The current site is static HTML. These files are designed to be copied directly into the repository root. Markdown sources are included for future editing, but the live site will use the generated HTML files unless the site is later converted to a static-site generator.

## Files included

- `blog.html` — replacement blog index page.
- `blog/*.html` — individual blog post pages.
- `css/blog-import.css` — supplemental styling for imported blog pages.
- `content/blog/*.md` — Markdown source archive for later editing/rewrite.
- `blog_manifest.csv` / `blog_manifest.json` — import tracking.

## Selected output

- 2023-06-16 — `people-have-too-much-money` — People Have Too Much Money
- 2023-06-07 — `socialism-exists-for-the-elite` — Socialism Exists For The Elite
- 2023-03-10 — `cheating-on-your-job` — Cheating On Your Job
- 2022-11-01 — `crypto-bros-are-still-idiots` — Crypto Bros Are Still Idiots
- 2022-08-30 — `forgive-and-then-eliminate-all-student-loans-in-america` — Forgive And Then Eliminate All Student Loans In America
- 2022-07-30 — `the-cocktails-of-billionaires` — The Cocktails Of Billionaires
- 2022-07-20 — `rich-people-who-use-cryptocurrency-to-steal-from-normal-people` — Rich People Who Use Cryptocurrency To Steal From Normal People
- 2022-07-19 — `time-to-go-nuclear` — Time To Go Nuclear
- 2022-06-17 — `five-money-strategies-that-absolutely-failed` — Five Money Strategies That Absolutely Failed
- 2022-05-06 — `sustainable-business-with-supply-chain-finance` — Sustainable Business With Supply Chain Finance
- 2022-04-10 — `if-the-economy-is-a-plane-it-is-out-of-control-and-the-pilots-are-insane` — If The Economy Is A Plane, It Is Out Of Control And The Pilots Are Insane
- 2022-03-28 — `why-microstartups-wont-make-you-rich` — Why Microstartups Won’t Make You Rich
- 2021-11-23 — `stop-being-inspired-by-quotes-that-arent-real-it-isnt-good-for-you` — Stop Being Inspired By Quotes That Aren’t Real, It Isn’t Good For You.
- 2021-11-08 — `the-american-stock-market-is-officially-a-scam` — The American Stock Market Is Officially A Scam
- 2021-10-24 — `tesla-right-wing-billionaires-merged-draft` — Tesla, Right-Wing Billionaires, and the Myth of Good Billionaires — MERGED DRAFT
- 2021-10-17 — `why-the-time-value-of-money` — Why The Time Value Of Money?
- 2021-10-14 — `what-is-the-stock-market` — What Is The Stock Market?
- 2021-10-12 — `why-i-turned-down-an-85k-yr-job-while-unemployed` — Why I Turned Down An $85k/yr Job While Unemployed
- 2021-10-11 — `what-is-money-anyway` — What Is Money Anyway?
- 2021-09-30 — `woke-academic-illiberalism-is-a-serious-problem` — Woke Academic Illiberalism Is A Serious Problem
- 2021-09-01 — `bernie-sanders-is-a-capitalist-joe-biden-is-a-corporatist-and-donald-trump-is-a-narcissist` — Bernie Sanders Is A Capitalist Joe Biden Is A Corporatist And Donald Trump Is A Narcissist
- 2020-09-02 — `smartwatches-will-never-replace-luxury` — Smartwatches Will Never Replace Luxury
- 2019-09-12 — `leadership-lessons-from-wwii-veteran-glenn-frazier` — Leadership Lessons From WWII Veteran Glenn Frazier
- 2019-08-09 — `why-netflix-should-seek-a-partnership-with-at-and-t` — Why Netflix Should Seek a Partnership With AT&T

## Known caveats

- Medium image URLs are still remote CDN URLs. That is fine for first pass review, but for a proper long-term website migration, download and host them locally. Otherwise Medium is still squatting in your living room.
- One Twitter script was stripped and one Play.ht iframe was replaced with a source-link placeholder.
- The merged Tesla/billionaire page uses the latest source date and keeps the three source essays clearly separated for later AI rewrite/editing.
- The generated Markdown is useful as editorial source material; the generated HTML is what fits the current static site.
