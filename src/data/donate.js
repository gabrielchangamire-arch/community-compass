// Vetted donation destinations grouped by what they support.
// "vetted" = verified 501(c)(3) status and listed favorably on Charity Navigator,
// GiveWell, or with strong financial transparency. Where "Charity Navigator" is
// noted, the rating was last checked at the time the entry was added — donors
// should confirm current status before giving.

export const DONATE = {
  food: [
    {
      name: "Northwest Harvest",
      mission: "Distributes free groceries across Washington with no ID/income requirements at flagship sites.",
      url: "https://www.northwestharvest.org/give/",
      scope: "Local (Washington)",
      vetted: "Charity Navigator 4-star",
      tags: ["local", "groceries"],
    },
    {
      name: "Food Lifeline",
      mission: "Western Washington's largest food-bank distribution hub. $1 = 4 meals.",
      url: "https://foodlifeline.org/give/",
      scope: "Local (Western WA)",
      vetted: "Charity Navigator 4-star",
      tags: ["local", "leverage"],
    },
    {
      name: "Hopelink",
      mission: "Eastside-focused food banks plus housing, transportation, and family services.",
      url: "https://www.hopelink.org/donate",
      scope: "Local (Eastside)",
      vetted: "Charity Navigator 4-star",
      tags: ["local", "eastside"],
    },
    {
      name: "Feeding America",
      mission: "Nationwide network of 200+ food banks. $1 = ~10 meals at scale.",
      url: "https://www.feedingamerica.org/take-action/donate",
      scope: "National",
      vetted: "Charity Navigator 4-star",
      tags: ["national", "leverage"],
    },
  ],

  housing: [
    {
      name: "Mary's Place",
      mission: "Family shelter, day services, and permanent supportive housing in Seattle.",
      url: "https://www.marysplaceseattle.org/donate",
      scope: "Local (Seattle)",
      vetted: "Charity Navigator 4-star",
      tags: ["local", "families"],
    },
    {
      name: "Plymouth Housing",
      mission: "Permanent supportive housing for chronically homeless adults in Seattle.",
      url: "https://plymouthhousing.org/donate/",
      scope: "Local (Seattle)",
      vetted: "Charity Navigator 4-star",
      tags: ["local", "permanent-housing"],
    },
    {
      name: "Solid Ground",
      mission: "Rental assistance, family shelter, and anti-poverty programs across King County.",
      url: "https://www.solid-ground.org/donate/",
      scope: "Local (King County)",
      vetted: "Charity Navigator 4-star",
      tags: ["local"],
    },
  ],

  education: [
    {
      name: "College Success Foundation",
      mission: "Scholarships and mentorship for low-income WA students from middle school through college.",
      url: "https://www.collegesuccessfoundation.org/donate",
      scope: "Local (Washington)",
      vetted: "Charity Navigator 4-star",
      tags: ["local", "scholarships"],
    },
    {
      name: "Reading Partners",
      mission: "Free 1:1 reading tutoring for K-4 students who are behind grade level. Active in Seattle schools.",
      url: "https://readingpartners.org/donate/",
      scope: "Local + National",
      vetted: "Charity Navigator 4-star",
      tags: ["literacy", "tutoring"],
    },
    {
      name: "Khan Academy",
      mission: "Free world-class education for anyone, anywhere. Donations keep it free forever.",
      url: "https://www.khanacademy.org/donate",
      scope: "Global",
      vetted: "Charity Navigator 4-star",
      tags: ["global", "free-content"],
    },
  ],

  youth: [
    {
      name: "Treehouse Seattle",
      mission: "Academic and life support for kids in WA foster care.",
      url: "https://www.treehouseforkids.org/donate/",
      scope: "Local (Washington)",
      vetted: "Charity Navigator 4-star",
      tags: ["foster-youth"],
    },
    {
      name: "Friends of the Children — Seattle",
      mission: "Pairs at-risk youth with paid professional mentors for 12+ years.",
      url: "https://friendsfoundation.org/seattle/",
      scope: "Local (Seattle)",
      vetted: "Charity Navigator 4-star",
      tags: ["mentorship"],
    },
  ],

  health: [
    {
      name: "Neighborcare Health",
      mission: "Sliding-scale primary, dental, and behavioral care for under- and uninsured Seattle residents.",
      url: "https://neighborcare.org/get-involved/donate/",
      scope: "Local (Seattle)",
      vetted: "Charity Navigator 4-star",
      tags: ["clinic", "local"],
    },
    {
      name: "HealthPoint",
      mission: "Sliding-scale clinics across the Eastside and South King County.",
      url: "https://www.healthpointchc.org/donate",
      scope: "Local (King County)",
      vetted: "Charity Navigator 4-star",
      tags: ["clinic", "local"],
    },
    {
      name: "Doctors Without Borders",
      mission: "Emergency medical care in 70+ countries, including conflict zones and disasters.",
      url: "https://www.doctorswithoutborders.org/donate",
      scope: "International",
      vetted: "Charity Navigator 4-star",
      tags: ["global"],
    },
  ],

  general: [
    {
      name: "GiveWell — Top Charities Fund",
      mission: "Pooled fund distributed across GiveWell's most cost-effective global health and poverty charities.",
      url: "https://www.givewell.org/top-charities-fund",
      scope: "Global",
      vetted: "GiveWell-recommended",
      tags: ["global", "evidence-based"],
    },
    {
      name: "ADRA — Adventist Development and Relief Agency",
      mission: "International humanitarian agency working in 118 countries on emergency relief, food security, health, education, and women's empowerment. Faith-based, serves all communities.",
      url: "https://adra.org/donate/",
      scope: "International",
      vetted: "Charity Navigator 4-star",
      tags: ["global", "emergency-relief", "multi-issue"],
    },
    {
      name: "Against Malaria Foundation",
      mission: "Distributes long-lasting bednets in malaria-endemic regions. ~$5/net, lives saved per dollar.",
      url: "https://www.againstmalaria.com/donation.aspx",
      scope: "Global",
      vetted: "GiveWell top charity",
      tags: ["global", "evidence-based"],
    },
    {
      name: "GiveDirectly",
      mission: "Sends cash directly to people living in extreme poverty. Strong randomized evidence behind it.",
      url: "https://www.givedirectly.org/donate/",
      scope: "Global",
      vetted: "GiveWell-recommended",
      tags: ["global", "cash-transfers"],
    },
  ],
};
