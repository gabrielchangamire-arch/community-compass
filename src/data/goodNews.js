// Good news: things going right in the world, with sources.
// Each entry has a stat or fact you can quote, plus the source. Sources are
// reputable trackers (Our World in Data, World Bank, UNICEF, peer-reviewed).
// `kind` colors the card: "stat" (number-driven), "story" (qualitative).

export const GOOD_NEWS = [
  {
    title: "Extreme poverty is at an all-time low",
    stat: "From ~38% in 1990 to ~9% today",
    blurb: "The share of humanity living in extreme poverty (below ~$2.15/day) has fallen by roughly three-quarters in three decades.",
    sourceLabel: "Our World in Data",
    sourceUrl: "https://ourworldindata.org/extreme-poverty",
    kind: "stat",
  },
  {
    title: "Child mortality has fallen by more than half",
    stat: "From 9.3M (1990) to under 5M (2022)",
    blurb: "Annual deaths of children under 5 have dropped by more than half since 1990, mostly thanks to vaccines, oral rehydration, and bed nets.",
    sourceLabel: "UNICEF / UN-IGME",
    sourceUrl: "https://childmortality.org/",
    kind: "stat",
  },
  {
    title: "Global access to electricity keeps climbing",
    stat: "From 73% (1990) to 91% today",
    blurb: "About 1.4 billion more people have basic access to electricity now than three decades ago.",
    sourceLabel: "World Bank",
    sourceUrl: "https://data.worldbank.org/indicator/EG.ELC.ACCS.ZS",
    kind: "stat",
  },
  {
    title: "Literacy keeps rising for young people",
    stat: "Youth literacy is ~92% globally",
    blurb: "Among people aged 15–24, more than 9 in 10 can read and write — up from 75% in 1980.",
    sourceLabel: "UNESCO",
    sourceUrl: "https://uis.unesco.org/en/topic/literacy",
    kind: "stat",
  },
  {
    title: "Renewable energy is now the cheapest power",
    stat: "Solar prices fell ~89% since 2010",
    blurb: "Utility-scale solar is now cheaper than coal in most markets — making cleaner energy a financial choice, not just a moral one.",
    sourceLabel: "Our World in Data — energy",
    sourceUrl: "https://ourworldindata.org/cheap-renewables-growth",
    kind: "stat",
  },
  {
    title: "More girls in school than ever",
    stat: "~90% primary enrollment globally",
    blurb: "The gender gap in primary education has nearly closed worldwide. Secondary education lags but is improving.",
    sourceLabel: "UNESCO Institute for Statistics",
    sourceUrl: "https://uis.unesco.org/",
    kind: "stat",
  },
  {
    title: "Smallpox is gone. Polio is almost gone.",
    stat: "Polio cases down 99.9% since 1988",
    blurb: "Smallpox killed an estimated 300 million people in the 20th century alone. It hasn't infected a human since 1977. Polio is on the same path — only a handful of wild cases remain.",
    sourceLabel: "WHO",
    sourceUrl: "https://www.who.int/health-topics/poliomyelitis",
    kind: "story",
  },
  {
    title: "Free, world-class learning for anyone with internet",
    stat: "Khan Academy reaches ~140M learners/year",
    blurb: "An entire K–college curriculum is available free, in dozens of languages, run by a nonprofit.",
    sourceLabel: "Khan Academy",
    sourceUrl: "https://www.khanacademy.org/about",
    kind: "story",
  },
];
