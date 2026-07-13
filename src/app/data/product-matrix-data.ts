// Product Matrix Data - Easy to edit!
// Simply update the values in this table to change the matrix content
//
// EDITING GUIDE:
// - Each row represents one product
// - Use empty strings "" for blank cells
// - Column order matches the visual table from left to right
// - To add hyperlinks to "Can Add for a Fee" cells, use the optional URL fields
// - For Product Guide URLs: Use the constants defined below (e.g., PRODUCT_GUIDES.MentalHealth) or add a custom URL string
//
// COLUMNS:
// 1. Product Level One (main category grouping)
// 2. Product Level Two (specific product name)
// 3. Go Live Date
// 4. Product Guide URL (optional - displays in modal as a document link)
// 5. Product Manager (optional - displays contact info in modal)
// 6. [EAP] Included (YES/NO)
// 7. [EAP] Can Add for a Fee
// 8. [EAP] Can Add for a Fee URL (optional - makes cell clickable)
// 9. [EAP] Existing Change Management
// 10. [HEALTH FOUNDATIONS] Included (YES/NO)
// 11. [HEALTH FOUNDATIONS] Can Add for a Fee
// 12. [HEALTH FOUNDATIONS] Can Add for a Fee URL (optional - makes cell clickable)
// 13. [HEALTH FOUNDATIONS] Existing Change Management
// 14. [ACCESS] Included (YES/NO)
// 15. [ACCESS] Can Add for a Fee
// 16. [ACCESS] Can Add for a Fee URL (optional - makes cell clickable)
// 17. [ACCESS] Existing Change Management

// ==================================================================================
// SHARED PRODUCT GUIDE URLS - Edit these in one place!
// To use: Set productGuideUrl to one of these constants (e.g., PRODUCT_GUIDES.MentalHealth)
// ==================================================================================
export const PRODUCT_GUIDES = {
DragonWellness: "#",
  FireBreathingSupport: "#",
  WingStrength: "#",
  HoardCoaching: "#",
  CryptidCare: "#",
  BigfootNavigation: "#",
  YetiResilience: "#",
  SpaceCommute: "#",
  TimeTravel: "#",
  UnicornWorkforce: "#",
  SockRecovery: "#",
} as const;

// ==================================================================================
// SHARED HYPERLINK URLS - Edit these in one place!
// To use: Set the URL fields to one of these constants
// ==================================================================================
export const HYPERLINKS = {
} as const;

// ==================================================================================
// PM Mappings - Product Manager contacts
// Format: { name: "Display Name", email: "email@example.com" }
// ==================================================================================

export const PM_Role = {
Astrid: {
    name: "Astrid Stormwing",
    email: "astrid@example.com"
  },

  Rowan: {
    name: "Rowan Pinewalker",
    email: "rowan@example.com"
  },

  Nova: {
    name: "Nova Starborne",
    email: "nova@example.com"
  },

  Echo: {
    name: "Echo Tomorrow",
    email: "echo@example.com"
  },

  Oliver: {
    name: "Oliver Socksmith",
    email: "oliver@example.com"
  },
} as const;  

export interface ProductRow {
  productLevelOne: string;
  productLevelTwo: string;
  goLiveDate: string;
  productGuideUrl?: string; // Optional URL for product guide document

  productManager?: { name: string; email: string }; // Optional PM contact info  // First Column Group - EAP
  includedInCorePEPM: string;
  canAddIntoProgramWithFee1?: string;
  canAddIntoProgramWithFee1Url?: string; // Optional URL for hyperlink
  changeManagement1: string;
  // Second Column Group - HEALTH FOUNDATIONS (INSURANCE ONLY)
  includedInAccessPEPM: string;
  canAddWithFee2?: string;
  canAddWithFee2Url?: string; // Optional URL for hyperlink
  changeManagement2: string;
  // Third Column Group - ACCESS
  includedInAccessPEPM2: string;
  canAddIntoProgramWithFee3?: string;
  canAddIntoProgramWithFee3Url?: string; // Optional URL for hyperlink
  changeManagement3: string;
}

// ==================================================================================
// PRODUCT MATRIX DATA TABLE
// Edit the values below - each line is one column in the table
// ==================================================================================

export const productMatrixData = [
{
  productLevelOne: "Dragon Wellness",
  productLevelTwo: "Fire Breathing Support",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.FireBreathingSupport,
  productManager: PM_Role.Astrid,
  includedInCorePEPM: "YES",
  changeManagement1: "Integrated into Dragon Wellness July 2025.",
  includedInAccessPEPM: "YES",
  changeManagement2: "Existing plans migrated automatically.",
  includedInAccessPEPM2: "YES",
  changeManagement3: "Available to all active dragon riders."
},
    {
    productLevelOne: "Dragon Wellness",
    productLevelTwo: "Dragon Wellness",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.DragonWellness,
    productManager: PM_Role.Astrid,
    includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    changeManagement1: "Rolled out to all guild members May 1, 2026.",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    changeManagement2: "Replaced legacy Potion Tracking system.",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    changeManagement3: "Auto-enabled for all active dragon riders."
  },
{
  productLevelOne: "Dragon Wellness",
  productLevelTwo: "Wing Strength Program",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.WingStrength,
  productManager: PM_Role.Astrid,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$2.00 PEPM",
  changeManagement1: "Optional add-on introduced Q1 2026.",
  includedInAccessPEPM: "YES",
  changeManagement2: "Bundled with Premium Flight Plans.",
  includedInAccessPEPM2: "YES",
  changeManagement3: "Included for enterprise dragon fleets."
},
  {
  productLevelOne: "Dragon Wellness",
  productLevelTwo: "Hoard Financial Coaching",
  goLiveDate: "Q4 2026",
  productGuideUrl: PRODUCT_GUIDES.HoardCoaching,
  productManager: PM_Role.Astrid,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$4.99 PEPM",
  changeManagement1: "Launching alongside Treasury Suite.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$3.99 PEPM",
  changeManagement2: "Pilot available to gold-class subscribers.",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$3.49 PEPM",
  changeManagement3: "Eligible for treasure matching incentives."
},
{
  productLevelOne: "Cryptid Care",
  productLevelTwo: "Bigfoot Support Program",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.CryptidCare,
  productManager: PM_Role.Rowan,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  changeManagement1: "Enhanced wilderness navigation tools released.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  changeManagement2: "Legacy Yeti coverage consolidated.",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  changeManagement3: "Automatically available in all remote regions."
},
{
  productLevelOne: "Cryptid Care",
  productLevelTwo: "Bigfoot Navigation Services",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.BigfootNavigation,
  productManager: PM_Role.Rowan,
  includedInCorePEPM: "YES",
  changeManagement1: "Expanded wilderness mapping added May 2026.",
  includedInAccessPEPM: "YES",
  changeManagement2: "Available across North American forests.",
  includedInAccessPEPM2: "YES",
  changeManagement3: "Enabled by default for all subscribers."
},
  {
  productLevelOne: "Cryptid Care",
  productLevelTwo: "Yeti Winter Resilience",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.YetiResilience,
  productManager: PM_Role.Rowan,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$1.99 PEPM",
  changeManagement1: "Snowstorm preparedness toolkit included.",
  includedInAccessPEPM: "YES",
  changeManagement2: "Legacy Yeti programs consolidated.",
  includedInAccessPEPM2: "YES",
  changeManagement3: "Automatically enabled in alpine regions."
},

  
  
  {
  productLevelOne: "Space Commute",
  productLevelTwo: "Interplanetary Transit",
  goLiveDate: "Q4 2026",
  productGuideUrl: PRODUCT_GUIDES.SpaceCommute,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  changeManagement1: "Mars route optimization enabled for existing crews.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$3.50 PEPM",
  changeManagement2: "Optional upgrade available upon launch.",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$2.00 PEPM",
  changeManagement3: "Pilot program available for asteroid miners."
},
  {
  productLevelOne: "Space Commute",
  productLevelTwo: "Lunar Shuttle Express",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.SpaceCommute,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Included with all Moon-based employee plans.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "Expanded service schedule Jan 2026.",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},

  {
  productLevelOne: "Space Commute",
  productLevelTwo: "Asteroid Belt Navigation",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.SpaceCommute,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$1.50 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Available upon purchase.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$1.50 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "Enhanced collision avoidance released May 2026.",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$1.50 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  
  {
  productLevelOne: "Space Commute",
  productLevelTwo: "Cryosleep Readiness Program",
  goLiveDate: "Q1 2027",
  productGuideUrl: PRODUCT_GUIDES.SpaceCommute,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$3.25 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Pilot launch scheduled for deep-space travellers.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$3.25 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$3.25 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},  
  {
  productLevelOne: "Time Travel Assistance",
  productLevelTwo: "Temporal Support",
  goLiveDate: "Coming Soon",
  productGuideUrl: PRODUCT_GUIDES.TimeTravel,
  productManager: PM_Role.Echo,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$9.99 PEPM",
  changeManagement1: "Retroactive enrollment available.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$7.99 PEPM",
  changeManagement2: "Historical incident coverage not guaranteed.",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$4.99 PEPM",
  changeManagement3: "Subject to causality review."
},
{
  productLevelOne: "Time Travel Assistance",
  productLevelTwo: "Paradox Prevention Services",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.TimeTravel,
  productManager: PM_Role.Echo,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Required for all approved temporal journeys.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},

  {
  productLevelOne: "Time Travel Assistance",
  productLevelTwo: "Future Self Coordination",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.TimeTravel,
  productManager: PM_Role.Echo,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$0.95 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Available as optional enhancement.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$0.95 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$0.95 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},

  {
  productLevelOne: "Time Travel Assistance",
  productLevelTwo: "Retroactive Benefits Enrollment",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.TimeTravel,
  productManager: PM_Role.Echo,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Coverage can be applied before purchase date.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "Timeline adjustments processed automatically.",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},

  {
  productLevelOne: "Time Travel Assistance",
  productLevelTwo: "Alternate Universe Navigation",
  goLiveDate: "Q3 2027",
  productGuideUrl: PRODUCT_GUIDES.TimeTravel,
  productManager: PM_Role.Echo,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$4.99 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Launching following multiverse compliance review.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$4.99 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$4.99 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "Subject to cross-dimensional approval.",
},
  
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Horn Maintenance Program",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Added for all active herds Jan 1, 2026.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "Automatically enabled for premium members.",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Rainbow Production Analytics",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$0.45 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Added upon purchase.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$0.45 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "Added upon purchase.",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$0.45 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Magical Talent Acquisition",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Expanded candidate sourcing capabilities March 2026.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Glitter Compliance Management",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$0.25 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Compliance framework updated April 2026.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$0.25 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$0.25 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Enchanted Benefits Administration",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Migrated from Legacy Wishes Platform.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Pegasus Collaboration Suite",
  goLiveDate: "Q4 2026",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$0.60 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Available through pilot enrollment.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$0.60 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$0.60 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Mystical Leadership Development",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Leadership pathway refreshed June 2026.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Pasture Experience Platform",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Enhanced grazing recommendations deployed May 2026.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Wish Fulfillment Concierge",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "NO",
  canAddIntoProgramWithFee1: "$1.25 PEPM",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Premium add-on service.",
  includedInAccessPEPM: "NO",
  canAddWithFee2: "$1.25 PEPM",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "NO",
  canAddIntoProgramWithFee3: "$1.25 PEPM",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  {
  productLevelOne: "Unicorn Workforce Solutions",
  productLevelTwo: "Sparkle Engagement Surveys",
  goLiveDate: "Available now",
  productGuideUrl: PRODUCT_GUIDES.UnicornWorkforce,
  productManager: PM_Role.Nova,
  includedInCorePEPM: "YES",
  canAddIntoProgramWithFee1: "",
  canAddIntoProgramWithFee1Url: "",
  changeManagement1: "Pulse survey functionality expanded February 2026.",
  includedInAccessPEPM: "YES",
  canAddWithFee2: "",
  canAddWithFee2Url: "",
  changeManagement2: "",
  includedInAccessPEPM2: "YES",
  canAddIntoProgramWithFee3: "",
  canAddIntoProgramWithFee3Url: "",
  changeManagement3: "",
},
  
  
  
];

export const columnGroups = [
  { name: "Included in Core PEPM", color: "teal" },
  { name: "Included in Insurance Cost", color: "green" },
  { name: "Included in Access PEPM", color: "green" },
];
