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
  MentalHealthANDthls: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/1%20GS%20Mental_Health%20and%20Work,%20Health%20and%20Life%20Services_ProductGuide_EN.pdf?csf=1&web=1&e=yiHiLv",
  PersonalizedNutrition: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Health%20-%20Personalized%20Nutrition%20-%20Product%20Guide%20-%20Nov%2019%202025%20updated.pdf?csf=1&web=1&e=cBecwm",
  Pharmacy: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GreenShield%20Health-Pharmacy%20Product%20Guide%202025.pdf?csf=1&web=1&e=KpyHut",
  MedicalSecondOpinion: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Medical%20Second%20Opinion_ProductGuide_EN.pdf?csf=1&web=1&e=Tk1qpz",
  WellBeing: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Well-Being_ProductGuide_EN.pdf?csf=1&web=1&e=qzCMca",
  Fertility: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Fertility%20Product%20Guide%20(updated%2014JAN2025).pdf?csf=1&web=1&e=buZGtX",
  Telemed: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Telemedicine_ProductGuide_EN.pdf?csf=1&web=1&e=B7vTbE",
  HormonalHealth: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Health%20Product%20Guide%20-%20Hormonal%20Health_Sept-12-2025.pdf?csf=1&web=1&e=WhAUHA",
  CDM: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Clinician%20Guided%20CDM+ProductGuide_EN.pdf?csf=1&web=1&e=46tCMy",
  PrevHealthcare: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Preventive%20Health%20Care_ProductGuide_EN.pdf?csf=1&web=1&e=PQlcSF",
  CareNav: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Care%20Navigation_ProductGuide_EN.pdf?csf=1&web=1&e=YYqB98",
  BlankTemplate5: "",
} as const;

// ==================================================================================
// SHARED HYPERLINK URLS - Edit these in one place!
// To use: Set the URL fields to one of these constants
// ==================================================================================
export const HYPERLINKS = {
  HormonalHealthPricing: "https://gsccloud.sharepoint.com/:b:/s/Product439/IQCKcxpLLgm8Qrl6mpjME-HOAaLnUrwq92qvduycAZ54OY0?e=wqJHd1",
  TelemedicineCalculator: "https://positconnect.gsc-corp.ca/connect/#/login?url=https%3A%2F%2Fpositconnect.gsc-corp.ca%2Fhealth_calculator%2F",
  MedicalSecondOpinionGuide: "https://gsccloud.sharepoint.com/:b:/r/sites/AskMe/REFERENCE%20DOCUMENTS/4.%20PRODUCT%20(INTERNAL%20ONLY)/4.0%20GS%20Health%20Products/GS%20Health%20Product%20Guides/GS%20Medical%20Second%20Opinion_ProductGuide_EN.pdf?csf=1&web=1&e=QkLMC7",
} as const;

// ==================================================================================
// PM Mappings - Product Manager contacts
// Format: { name: "Display Name", email: "email@example.com" }
// ==================================================================================

export const PM_Role = {
  Hameed: { name: "Hameed Azeez", email: "hameed.azeez@greenshield.ca" },
  Elora: { name: "Elora Vink", email: "elora.vink@greenshield.ca" },
  Will: { name: "Will Badger", email: "will.badger@greenshield.ca" },
  Amy: { name: "Amy Killoran", email: "amy.killoran@greenshield.ca" },
  Connor: { name: "Connor Hsu", email: "connor.hsu@greenshield.ca" },
  Amanda: {name: "Amanda Quan", email: "amanda.quan@greenshield.ca"},
  Ben: {name: "Ben Dugas", email: "ben.dugas@greenshield.ca"},
  Maryam: {name: "Maryam El-Naggar", email: "maryam.el-naggar@greenshield.ca"},
  Emma: {name: "Emma Pearson", email: "emma.pearson@greenshield.ca"},
  EAP_PM: {name: "EAP Product Manager", email: "eap.product.manager@greenshield.ca"},
} as const;  

export interface ProductRow {
  productLevelOne: string;
  productLevelTwo: string;
  goLiveDate: string;
  productGuideUrl?: string; // Optional URL for product guide document

  productManager?: { name: string; email: string }; // Optional PM contact info  // First Column Group - EAP
  includedInCorePEPM: string;
  canAddIntoProgramWithFee1: string;
  canAddIntoProgramWithFee1Url?: string; // Optional URL for hyperlink
  changeManagement1: string;
  // Second Column Group - HEALTH FOUNDATIONS (INSURANCE ONLY)
  includedInAccessPEPM: string;
  canAddWithFee2: string;
  canAddWithFee2Url?: string; // Optional URL for hyperlink
  changeManagement2: string;
  // Third Column Group - ACCESS
  includedInAccessPEPM2: string;
  canAddIntoProgramWithFee3: string;
  canAddIntoProgramWithFee3Url?: string; // Optional URL for hyperlink
  changeManagement3: string;
}

// ==================================================================================
// PRODUCT MATRIX DATA TABLE
// Edit the values below - each line is one column in the table
// ==================================================================================

export const productMatrixData = [
  {
    productLevelOne: "Care Navigation",
    productLevelTwo: "Chatbot Care Navigation",
    goLiveDate: "Available now",
    productGuideUrl: "", // Add URL here to display Product Guide link in modal
    productManager: PM_Role.Amanda,
    includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Will be added upon pre-agreed schedule as part of renewal conversation. Request for early add to be approved by VP",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$0.35 PEPM",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added on purchase",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$0.35 PEPM",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "Added on purchase",
  },

  {
    productLevelOne: "Well-Being",
    productLevelTwo: "Well-Being",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.WellBeing, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Hameed,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added for existing clients on Jan 15, 2025.",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "C4L migrated to Well-Being automatically Jan 15th, 2025",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "Automatically added to all clients on Jan 15, 2025.",
  },
  {
    productLevelOne: "Well-Being",
    productLevelTwo: "Fitness",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.WellBeing, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Hameed,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "$0.20 PEPM",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added on purchase",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$0.20 PEPM",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added on purchase",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$0.20 PEPM",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "Added on purchase",
  },
  {
    productLevelOne: "Well-Being",
    productLevelTwo: "Resources Library (Wellness Hub)",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.WellBeing, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Hameed,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },

  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Counselling",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$90/hour - may be submitted for reimbursement",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "Note: virtual only",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Indigenous Mental Health",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Automatically added Oct 1",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "D2C rate that can be reimbursed after June 2025",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Automatically added Oct 1",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "Automatically added Oct 1",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Digital CBT (self directed)",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Will,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Will be added upon pre-agreed schedule following go live date. Request for early add to be approved by VP",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added for existing clients on Jan 15, 2025.",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "Added for existing clients on Jan 15, 2025.",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Digital CBT (coach led)",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Will,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "$1.50 PEPM",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$1.50 PEPM",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$1.50 PEPM",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Specialized Clinical Services",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Connor,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "Additional  Fee, check RATE CARD",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Children's Mental Health",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added for existing clients Oct 1.",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "First Step",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added for existing clients on Jan 15, 2025.",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added for existing clients on Jan 15, 2025.",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Peer to Peer",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "$0.20 PEPM",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added on purchase",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$0.20 PEPM",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added on purchase",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$0.20 PEPM",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Substance Use Management",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "$0.20 PEPM",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added on purchase",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$0.20 PEPM",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added on purchase",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$0.20 PEPM",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Mental Health",
    productLevelTwo: "Organizational Services (i.e. Trauma or Training)",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Elora,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "Additional  Fee, check RATE CARD",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "Additional  Fee, check RATE CARD",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },

  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Financial",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Legal",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Life Transition Coaching",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Career Coaching",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Health Coaching (inc. Rx foods)",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MentalHealthANDthls, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Personalized Nutrition",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.PersonalizedNutrition, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "Added for all existing EAP clients on April 1, 2025",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$425 a case - may be submitted for reimbursement WITH QUALIFIED PLANS (plans with 33910) Will be automatically accessible for GS insurance members with 33910",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Automatically added on Dec 1, 2024",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Total Health & Life Services",
    productLevelTwo: "Hormonal Health",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.HormonalHealth, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "See Pricing Overview Sheet",
    canAddIntoProgramWithFee1Url: HYPERLINKS.HormonalHealthPricing, // Add URL here to make cell clickable
    changeManagement1: "Added for existing clients on a member pay basis on June 4, 2025, unless client has purchased PEPM or Case rate.",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$740 per case - may be submitted for reimbursement WITH QUALIFIED PLANS (plans opted in to 33930); See Pricing Overview Sheet",
    canAddWithFee2Url: HYPERLINKS.HormonalHealthPricing, // Add URL here to make cell clickable
    changeManagement2: "Added for existing clients on a member pay basis on Jun 4,2025, unless a client has opted in to 33930 or purchased PEPM or case rate.",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "See Pricing Overview Sheet",
    canAddIntoProgramWithFee3Url: HYPERLINKS.HormonalHealthPricing, // Add URL here to make cell clickable
    changeManagement3: "Added for existing clients on a member pay basis on June 4, 2025 unless client has purchased PEPM or Case rate.",
  },

  {
    productLevelOne: "Telemedicine",
    productLevelTwo: "Standard",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.Telemed, // Add URL here to display Product Guide link in modal
    productManager: PM_Role.Hameed,
    includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "Calculator",
    canAddIntoProgramWithFee1Url: HYPERLINKS.TelemedicineCalculator, // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "Calculator",
    canAddWithFee2Url: HYPERLINKS.TelemedicineCalculator, // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "Calculator",
    canAddIntoProgramWithFee3Url: HYPERLINKS.TelemedicineCalculator, // Add URL here to make cell clickable
    changeManagement3: "",
  },
  
  {
    productLevelOne: "Telemedicine",
    productLevelTwo: "Premium",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.Telemed, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Hameed,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "Calculator",
    canAddIntoProgramWithFee1Url: HYPERLINKS.TelemedicineCalculator, // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "Calculator",
    canAddWithFee2Url: HYPERLINKS.TelemedicineCalculator, // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "Calculator",
    canAddIntoProgramWithFee3Url: HYPERLINKS.TelemedicineCalculator, // Add URL here to make cell clickable
    changeManagement3: "",
  },
  
  {
    productLevelOne: "Chronic Disease Management (CDM)",
    productLevelTwo: "Clinican-guided CDM",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.CDM, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Amanda,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "$1.95 PEPM; $3,200/CASE",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "Added on purchase",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$1.95 PEPM; $3,200/CASE",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "Added on purchase",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$1.95 PEPM; $3,200/CASE",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },

  {
    productLevelOne: "Pharmacy",
    productLevelTwo: "Pharmacy",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.Pharmacy, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Amy,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
  {
    productLevelOne: "Pharmacy",
    productLevelTwo: "Health Store",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.Pharmacy, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Amy,
   includedInCorePEPM: "YES",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "YES",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "YES",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },

  {
    productLevelOne: "Preventive Healthcare",
    productLevelTwo: "Preventive Healthcare",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.PrevHealthcare, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "$600/CASE",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "$600/CASE",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "$600/CASE",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },

  {
    productLevelOne: "Medical Second Opinion",
    productLevelTwo: "Novus Health",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.MedicalSecondOpinion, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "See PRODUCT GUIDE",
    canAddIntoProgramWithFee1Url: HYPERLINKS.MedicalSecondOpinionGuide, // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "See PRODUCT GUIDE",
    canAddWithFee2Url: HYPERLINKS.MedicalSecondOpinionGuide, // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "See PRODUCT GUIDE",
    canAddIntoProgramWithFee3Url: HYPERLINKS.MedicalSecondOpinionGuide, // Add URL here to make cell clickable
    changeManagement3: "Will be automatically available for all D2C members who have Discover enabled",
  },

  {
    productLevelOne: "Fertility",
    productLevelTwo: "Fertility Navigation",
    goLiveDate: "Available now",
    productGuideUrl: PRODUCT_GUIDES.Fertility, // Add URL here to display Product Guide link in modal
     productManager: PM_Role.Emma,
   includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "D2C only - price as displayed in GS+ (no plan sponsor paid or reimbursement); automatically available for all GS+ members who have Discover enabled",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "D2C only - price as displayed in GS+ (no plan sponsor paid or reimbursement); automatically available for all GS+ members who have Discover enabled",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "D2C only - price as displayed in GS+ (no plan sponsor paid or reimbursement); automatically available for all GS+ members who have Discover enabled",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },

  {
    productLevelOne: "GS+ Technology Fees",
    productLevelTwo: "GS+ Technology Fees",
    goLiveDate: "Special handle",
    productGuideUrl: "", // Add URL here to display Product Guide link in modal
    productManager: PM_Role.Amanda,
    includedInCorePEPM: "NO",
    canAddIntoProgramWithFee1: "",
    canAddIntoProgramWithFee1Url: "", // Add URL here to make cell clickable
    changeManagement1: "",
    includedInAccessPEPM: "NO",
    canAddWithFee2: "",
    canAddWithFee2Url: "", // Add URL here to make cell clickable
    changeManagement2: "",
    includedInAccessPEPM2: "NO",
    canAddIntoProgramWithFee3: "",
    canAddIntoProgramWithFee3Url: "", // Add URL here to make cell clickable
    changeManagement3: "",
  },
];

export const columnGroups = [
  { name: "Included in Core PEPM", color: "teal" },
  { name: "Included in Insurance Cost", color: "green" },
  { name: "Included in Access PEPM", color: "green" },
];
