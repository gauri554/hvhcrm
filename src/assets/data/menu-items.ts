import { MenuItemType } from "@/types/menu";

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: "navigation",
    label: "Navigation",
    isTitle: true,
  },
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "tabler:dashboard",
    url: "/dashboard",
  },

  {
    key: "crm",
    label: "CRM/Sales",
    icon: "tabler:file-invoice",
    children: [
      {
        key: "leads",
        label: "Leads",
        url: "/crm/leads",
        parentKey: "leads",
      },
      {
        key: "queries",
        label: "Queries",
        url: "/crm/queries",
        parentKey: "queries",
      },
      {
        key: "confirmed-queries",
        label: "Confirmed Queries",
        url: "/crm/confirmed-queries",
        parentKey: "confirmed-queries",
      },
      {
        key: "b2c-customers",
        label: "B2C Customer(s)",
        url: "/crm/b2c-customers",
        parentKey: "b2c-customers",
      },
      {
        key: "b2b-customers",
        label: "B2B Customer(s)",
        url: "/crm/b2b-customers",
        parentKey: "b2b-customers",
      },
      {
        key: "my-suppliers",
        label: "My Suppliers",
        url: "/crm/my-suppliers",
        parentKey: "my-suppliers",
      },
      {
        key: "archived-leads",
        label: "Archived Leads",
        url: "/crm/archived-leads",
        parentKey: "archived-leads",
      },
    ],
  },

  {
    key: "marketing",
    label: "Marketing",
    icon: "tabler:speakerphone",
    children: [
      {
        key: "dashboard",
        label: "Dashboard",
        url: "/marketing/dashboard",
        parentKey: "dashboard",
      },
      {
        key: "lists",
        label: "Lists",
        url: "/marketing/lists",
        parentKey: "lists",
      },
      {
        key: "email-marketing",
        label: "Email Marketing",
        url: "/marketing/email-marketing",
        parentKey: "email-marketing",
      },
      {
        key: "campaigns",
        label: "Campaigns",
        url: "/marketing/campaigns",
        parentKey: "campaigns",
      },
      {
        key: "default-campaigns",
        label: "Default Campaigns",
        url: "/marketing/default-campaigns",
        parentKey: "default-campaigns",
      },
      {
        key: "manage-landing-page",
        label: "Manage Landing Page",
        url: "/marketing/manage-landing-page",
        parentKey: "manage-landing-page",
      },
      {
        key: "campaigns-Url-builder",
        label: "Campaigns URL Builder",
        url: "/marketing/campaigns-Url-builder",
        parentKey: "campaigns-Url-builder",
      },
      {
        key: "view-feedback",
        label: "View Feedback",
        url: "/marketing/view-feedback",
        parentKey: "view-feedback",
      },
      {
        key: "coupon-code",
        label: "Coupon Code",
        url: "/marketing/coupon-code",
        parentKey: "coupon-code",
      },
      {
        key: "meta-integration",
        label: "Meta Integration",
        url: "/marketing/meta-integration",
        parentKey: "meta-integration",
      },
    ],
  },

  {
    key: "operations",
    label: "Operations",
    icon: "tabler:layout-grid",
    children: [
      {
        key: "wip-packages",
        label: "WIP Packages",
        url: "/operations/wip-packages",
        parentKey: "wip-packages",
      },
      {
        key: "flights-modifications",
        label: "Flights Modifications",
        url: "/operations/flights-modifications",
        parentKey: "flights-modifications",
      },
      {
        key: "refund-upgrade",
        label: "Refund Upgrade",
        url: "/operations/refund-upgrade",
        parentKey: "refund-upgrade",
      },
      {
        key: "flight-bookings-queue",
        label: "Flight Bookings Queue",
        url: "/operations/flight-bookings-queue",
        parentKey: "flight-bookings-queue",
      },
      {
        key: "proposal-requested",
        label: "Proposal Requested",
        url: "/operations/proposal-requested",
        parentKey: "proposal-requested",
      },
      {
        key: "supplier-packages-enquiry",
        label: "Supplier Packages Enquiry",
        url: "/operations/supplier-packages-enquiry",
        parentKey: "supplier-packages-enquiry",
      },
    ],
  },

  {
    key: "todos",
    label: "To Do's",
    icon: "tabler:file-invoice",
    url: "/todos",
  },

  {
    key: "my-inventry",
    label: "My Inventry",
    icon: "tabler:brand-asana",
    children: [
      {
        key: "packages",
        label: "Packages",
        url: "/my-inventry/packages",
        parentKey: "packages",
      },
      {
        key: "hotels",
        label: "Hotels",
        url: "/my-inventry/hotels",
        parentKey: "hotels",
      },
      {
        key: "sightseeing",
        label: "Sightseeing",
        url: "/my-inventry/sightseeing",
        parentKey: "sightseeing",
      },
      {
        key: "vehicles",
        label: "Vehicles",
        url: "/my-inventry/vehicles",
        parentKey: "vehicles",
      },
      {
        key: "trasport-rates",
        label: "Trasport Rates",
        url: "/my-inventry/trasport-rates",
        parentKey: "trasport-rates",
      },
      {
        key: "visa",
        label: "Visa",
        url: "/my-inventry/visa",
        parentKey: "visa",
      },
      {
        key: "itinerary-desc",
        label: "Itinerary Description",
        url: "/my-inventry/itinerary-desc",
        parentKey: "itinerary-desc",
      },
      {
        key: "group-departure",
        label: "Group Departure",
        url: "/my-inventry/group-departure",
        parentKey: "group-departure",
      },
      {
        key: "area-master",
        label: "Area Master",
        url: "/my-inventry/area-master",
        parentKey: "area-master",
      },
      {
        key: "restaurants",
        label: "Restaurants",
        url: "/my-inventry/restaurants",
        parentKey: "restaurants",
      },
    ],
  },

  {
    key: "reports",
    label: "Reports",
    icon: "tabler:file-invoice",
    children: [
      {
        key: "query-status-report",
        label: "Query Status Report (count)",
        url: "/reports/query-status-report",
        parentKey: "query-status-report",
      },
      {
        key: "query-status-report-value",
        label: "Query Status Report (value)",
        url: "/reports/query-status-report-value",
        parentKey: "query-status-report-value",
      },
      {
        key: "sourcewise-report",
        label: "Sourcewise Lead Report",
        url: "/reports/sourcewise-report",
        parentKey: "sourcewise-report",
      },
      {
        key: "staffwise-report",
        label: "Staff Wise  Report",
        url: "/reports/staffwise-report",
        parentKey: "staffwise-report",
      },
      {
        key: "destinationwise-report",
        label: "Destinationwise Report",
        url: "/reports/destinationwise-report",
        parentKey: "destinationwise-report",
      },
      {
        key: "campaignwise-success-report",
        label: "Campaignw Success Report",
        url: "/reports/campaignwise-success-report",
        parentKey: "campaignwise-success-report",
      },
      {
        key: "b2b-report",
        label: "B2B Report",
        url: "/reports/b2b-report",
        parentKey: "b2b-report",
      },
      {
        key: "checkin-report",
        label: "Checkin Report",
        url: "/reports/checkin-report",
        parentKey: "checkin-report",
      },
      {
        key: "checkout-report",
        label: "Checkout Report",
        url: "/reports/checkout-report",
        parentKey: "checkout-report",
      },
      {
        key: "debtors-report",
        label: "Debtors Report",
        url: "/reports/debtors-report",
        parentKey: "debtors-report",
      },
      {
        key: "dcr-report",
        label: "DCR Report",
        url: "/reports/dcr-report",
        parentKey: "dcr-report",
      },
    ],
  },

  {
    key: "bookings",
    label: "Bookings",
    icon: "tabler:calendar",
    children: [
      {
        key: "packages",
        label: "Packages",
        url: "/bookings/packages",
        parentKey: "packages",
      },
      {
        key: "flight-tickets",
        label: "Flight Tickets",
        url: "/bookings/flight-tickets",
        parentKey: "flight-tickets",
      },
      {
        key: "hotels",
        label: "Hotels",
        url: "/bookings/hotels",
        parentKey: "hotels",
      },
      {
        key: "activities",
        label: "Activities",
        url: "/bookings/activities",
        parentKey: "activities",
      },
      {
        key: "visa",
        label: "Visa",
        url: "/bookings/visa",
        parentKey: "visa",
      },
      {
        key: "trasfer",
        label: "Trasfer",
        url: "/bookings/trasfer",
        parentKey: "trasfer",
      },
    ],
  },

  {
    key: "finance",
    label: "Finance",
    icon: "tabler:premium-rights",
    children: [
      {
        key: "peroforma-invoice",
        label: "Peroforma Invoice",
        url: "/finance/peroforma-invoice",
        parentKey: "peroforma-invoice",
      },
      {
        key: "daily-collection",
        label: "Daily Collection",
        url: "/finance/daily-collection",
        parentKey: "daily-collection",
      },
      {
        key: "my-wallet-history",
        label: "My Wallet History",
        url: "/finance/my-wallet-history",
        parentKey: "my-wallet-history",
      },
      {
        key: "sales-report",
        label: "Sales Report",
        url: "/finance/sales-report",
        parentKey: "sales-report",
      },
      {
        key: "booking-report",
        label: "Booking Reports",
        url: "/finance/booking-report",
        parentKey: "booking-report",
      },
      {
        key: "lead-query-followup-report",
        label: "Lead Query Followup Report",
        url: "/finance/lead-query-followup-report",
        parentKey: "lead-query-followup-report",
      },
      {
        key: "invoice",
        label: "Invoice",
        url: "/finance/invoice",
        parentKey: "invoice",
      },
      {
        key: "credet-note",
        label: "Credit Note",
        url: "/finance/credet-note",
        parentKey: "credet-note",
      },
      {
        key: "b2c-customer",
        label: "B2C Customer",
        url: "/finance/b2c-customer",
        parentKey: "b2c-customer",
      },
      {
        key: "tcs-collection-report",
        label: "TCS Collection Report",
        url: "/finance/tcs-collection-report",
        parentKey: "tcs-collection-report",
      },
      {
        key: "tax-collection-report",
        label: "Tax Collection Report",
        url: "/finance/tax-collection-report",
        parentKey: "tax-collection-report",
      },
      {
        key: "reward-points",
        label: "Reward Points",
        url: "/finance/reward-points",
        parentKey: "reward-points",
      },
    ],
  },

  {
    key: "marketplace",
    label: "Marketplace",
    icon: "tabler:share",
    children: [
      {
        key: "my-offers",
        label: "My Offers",
        url: "/marketplace/my-offers",
        parentKey: "my-offers",
      },
      {
        key: "deals-hub",
        label: "Deals Hub",
        url: "/marketplace/deals-hub",
        parentKey: "deals-hub",
      },
      {
        key: "my-published-packages",
        label: "My Published Packages",
        url: "/marketplace/my-published-packages",
        parentKey: "my-published-packages",
      },
    ],
  },

  {
    key: "staff-management",
    label: "Staff Management",
    icon: "tabler:users",
    children: [
      {
        key: "roles",
        label: "Roles",
        url: "/staff-management/roles",
        parentKey: "roles",
      },
      {
        key: "departments",
        label: "Departments",
        url: "/staff-management/departments",
        parentKey: "departments",
      },
      {
        key: "staff",
        label: "Staff",
        url: "/staff-management/staff",
        parentKey: "staff",
      },
    ],
  },

  {
    key: "settings",
    label: "Settings",
    icon: "tabler:settings-cog",
    children: [
      {
        key: "company-profile",
        label: "Company Profile",
        url: "/settings/company-profile",
        parentKey: "company-profile",
      },
      {
        key: "terms-and-conditions",
        label: "Terms and Conditions",
        url: "/settings/terms-and-conditions",
        parentKey: "terms-and-conditions",
      },
      {
        key: "email-templates",
        label: "Email Templates",
        url: "/settings/email-templates",
        parentKey: "email-templates",
      },
      {
        key: "mark-ups",
        label: "Mark Ups",
        url: "/settings/mark-ups",
        parentKey: "mark-ups",
      },
      {
        key: "lead-source",
        label: "Lead Source",
        url: "/settings/lead-source",
        parentKey: "lead-source",
      },
      {
        key: "manage-notifications",
        label: "Manage Notifications",
        url: "/settings/manage-notifications",
        parentKey: "manage-notifications",
      },
      {
        key: "communications",
        label: "Communications",
        url: "/settings/communications",
        parentKey: "communications",
      },
      {
        key: "subscriptions-plan",
        label: "Subscriptions Plan",
        url: "/settings/subscriptions-plan",
        parentKey: "subscriptions-plan",
      },
      {
        key: "global-settings",
        label: "Global Settings",
        url: "/settings/global-settings",
        parentKey: "global-settings",
      },
    ],
  },

  {
    key: "forms",
    label: "Forms",
    icon: "tabler:forms",
    children: [
      {
        key: "basic",
        label: "Basic Elements",
        url: "/forms/basic",
        parentKey: "forms",
      },
      {
        key: "inputmask",
        label: "Inputmask",
        url: "/forms/inputmask",
        parentKey: "forms",
      },
      {
        key: "picker",
        label: "Picker",
        url: "/forms/picker",
        parentKey: "forms",
      },
      {
        key: "select",
        label: "Select",
        url: "/forms/select",
        parentKey: "forms",
      },
      {
        key: "slider",
        label: "Range Slider",
        url: "/forms/slider",
        parentKey: "forms",
      },
      {
        key: "validation",
        label: "Validation",
        url: "/forms/validation",
        parentKey: "forms",
      },
      {
        key: "wizard",
        label: "Wizard",
        url: "/forms/wizard",
        parentKey: "forms",
      },
      {
        key: "file-uploads",
        label: "File Uploads",
        url: "/forms/file-uploads",
        parentKey: "forms",
      },
      {
        key: "editors",
        label: "Editors",
        url: "/forms/editors",
        parentKey: "forms",
      },
      {
        key: "layout",
        label: "Layouts",
        url: "/forms/layout",
        parentKey: "forms",
      },
    ],
  },
  {
    key: "tables",
    label: "Tables",
    icon: "tabler:table",
    children: [
      {
        key: "basic-table",
        label: "Basic Tables",
        url: "/tables/basic-table",
        parentKey: "tables",
      },
      {
        key: "gridJs",
        label: "GridJs Tables",
        url: "/tables/gridJs",
        parentKey: "tables",
      },
    ],
  },
];

export const HORIZONTAL_MENU_ITEM: MenuItemType[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    icon: "tabler:dashboard",
    url: "/dashboard",
  },

  {
    key: "crm",
    label: "CRM/Sales",
    icon: "tabler:file-invoice",
    children: [
      {
        key: "leads",
        label: "Leads",
        url: "/crm/leads",
        parentKey: "leads",
      },
      {
        key: "queries",
        label: "Queries",
        url: "/crm/queries",
        parentKey: "queries",
      },
      {
        key: "confirmed-queries",
        label: "Confirmed Queries",
        url: "/crm/confirmed-queries",
        parentKey: "confirmed-queries",
      },
      {
        key: "b2c-customers",
        label: "B2C Customer(s)",
        url: "/crm/b2c-customers",
        parentKey: "b2c-customers",
      },
      {
        key: "b2b-customers",
        label: "B2B Customer(s)",
        url: "/crm/b2b-customers",
        parentKey: "b2b-customers",
      },
      {
        key: "my-suppliers",
        label: "My Suppliers",
        url: "/crm/my-suppliers",
        parentKey: "my-suppliers",
      },
      {
        key: "archived-leads",
        label: "Archived Leads",
        url: "/crm/archived-leads",
        parentKey: "archived-leads",
      },
    ],
  },

  {
    key: "marketing",
    label: "Marketing",
    icon: "tabler:speakerphone",
    children: [
      {
        key: "dashboard",
        label: "Dashboard",
        url: "/marketing/dashboard",
        parentKey: "dashboard",
      },
      {
        key: "lists",
        label: "Lists",
        url: "/marketing/lists",
        parentKey: "lists",
      },
      {
        key: "email-marketing",
        label: "Email Marketing",
        url: "/marketing/email-marketing",
        parentKey: "email-marketing",
      },
      {
        key: "campaigns",
        label: "Campaigns",
        url: "/marketing/campaigns",
        parentKey: "campaigns",
      },
      {
        key: "default-campaigns",
        label: "Default Campaigns",
        url: "/marketing/default-campaigns",
        parentKey: "default-campaigns",
      },
      {
        key: "manage-landing-page",
        label: "Manage Landing Page",
        url: "/marketing/manage-landing-page",
        parentKey: "manage-landing-page",
      },
      {
        key: "campaigns-Url-builder",
        label: "Campaigns URL Builder",
        url: "/marketing/campaigns-Url-builder",
        parentKey: "campaigns-Url-builder",
      },
      {
        key: "view-feedback",
        label: "View Feedback",
        url: "/marketing/view-feedback",
        parentKey: "view-feedback",
      },
      {
        key: "coupon-code",
        label: "Coupon Code",
        url: "/marketing/coupon-code",
        parentKey: "coupon-code",
      },
      {
        key: "meta-integration",
        label: "Meta Integration",
        url: "/marketing/meta-integration",
        parentKey: "meta-integration",
      },
    ],
  },

  {
    key: "operations",
    label: "Operations",
    icon: "tabler:layout-grid",
    children: [
      {
        key: "wip-packages",
        label: "WIP Packages",
        url: "/operations/wip-packages",
        parentKey: "wip-packages",
      },
      {
        key: "flights-modifications",
        label: "Flights Modifications",
        url: "/operations/flights-modifications",
        parentKey: "flights-modifications",
      },
      {
        key: "refund-upgrade",
        label: "Refund Upgrade",
        url: "/operations/refund-upgrade",
        parentKey: "refund-upgrade",
      },
      {
        key: "flight-bookings-queue",
        label: "Flight Bookings Queue",
        url: "/operations/flight-bookings-queue",
        parentKey: "flight-bookings-queue",
      },
      {
        key: "proposal-requested",
        label: "Proposal Requested",
        url: "/operations/proposal-requested",
        parentKey: "proposal-requested",
      },
      {
        key: "supplier-packages-enquiry",
        label: "Supplier Packages Enquiry",
        url: "/operations/supplier-packages-enquiry",
        parentKey: "supplier-packages-enquiry",
      },
    ],
  },

  {
    key: "todos",
    label: "To Do's",
    icon: "tabler:file-invoice",
    url: "/todos",
  },

  {
    key: "my-inventry",
    label: "My Inventry",
    icon: "tabler:brand-asana",
    children: [
      {
        key: "packages",
        label: "Packages",
        url: "/my-inventry/packages",
        parentKey: "packages",
      },
      {
        key: "hotels",
        label: "Hotels",
        url: "/my-inventry/hotels",
        parentKey: "hotels",
      },
      {
        key: "sightseeing",
        label: "Sightseeing",
        url: "/my-inventry/sightseeing",
        parentKey: "sightseeing",
      },
      {
        key: "vehicles",
        label: "Vehicles",
        url: "/my-inventry/vehicles",
        parentKey: "vehicles",
      },
      {
        key: "trasport-rates",
        label: "Trasport Rates",
        url: "/my-inventry/trasport-rates",
        parentKey: "trasport-rates",
      },
      {
        key: "visa",
        label: "Visa",
        url: "/my-inventry/visa",
        parentKey: "visa",
      },
      {
        key: "itinerary-desc",
        label: "Itinerary Description",
        url: "/my-inventry/itinerary-desc",
        parentKey: "itinerary-desc",
      },
      {
        key: "group-departure",
        label: "Group Departure",
        url: "/my-inventry/group-departure",
        parentKey: "group-departure",
      },
      {
        key: "area-master",
        label: "Area Master",
        url: "/my-inventry/area-master",
        parentKey: "area-master",
      },
      {
        key: "restaurants",
        label: "Restaurants",
        url: "/my-inventry/restaurants",
        parentKey: "restaurants",
      },
    ],
  },

  {
    key: "reports",
    label: "Reports",
    icon: "tabler:file-invoice",
    children: [
      {
        key: "query-status-report",
        label: "Query Status Report (count)",
        url: "/reports/query-status-report",
        parentKey: "query-status-report",
      },
      {
        key: "query-status-report-value",
        label: "Query Status Report (value)",
        url: "/reports/query-status-report-value",
        parentKey: "query-status-report-value",
      },
      {
        key: "sourcewise-report",
        label: "Sourcewise Lead Report",
        url: "/reports/sourcewise-report",
        parentKey: "sourcewise-report",
      },
      {
        key: "staffwise-report",
        label: "Staff Wise  Report",
        url: "/reports/staffwise-report",
        parentKey: "staffwise-report",
      },
      {
        key: "destinationwise-report",
        label: "Destinationwise Report",
        url: "/reports/destinationwise-report",
        parentKey: "destinationwise-report",
      },
      {
        key: "campaignwise-success-report",
        label: "Campaignw Success Report",
        url: "/reports/campaignwise-success-report",
        parentKey: "campaignwise-success-report",
      },
      {
        key: "b2b-report",
        label: "B2B Report",
        url: "/reports/b2b-report",
        parentKey: "b2b-report",
      },
      {
        key: "checkin-report",
        label: "Checkin Report",
        url: "/reports/checkin-report",
        parentKey: "checkin-report",
      },
      {
        key: "checkout-report",
        label: "Checkout Report",
        url: "/reports/checkout-report",
        parentKey: "checkout-report",
      },
      {
        key: "debtors-report",
        label: "Debtors Report",
        url: "/reports/debtors-report",
        parentKey: "debtors-report",
      },
      {
        key: "dcr-report",
        label: "DCR Report",
        url: "/reports/dcr-report",
        parentKey: "dcr-report",
      },
    ],
  },

  {
    key: "bookings",
    label: "Bookings",
    icon: "tabler:calendar",
    children: [
      {
        key: "packages",
        label: "Packages",
        url: "/bookings/packages",
        parentKey: "packages",
      },
      {
        key: "flight-tickets",
        label: "Flight Tickets",
        url: "/bookings/flight-tickets",
        parentKey: "flight-tickets",
      },
      {
        key: "hotels",
        label: "Hotels",
        url: "/bookings/hotels",
        parentKey: "hotels",
      },
      {
        key: "activities",
        label: "Activities",
        url: "/bookings/activities",
        parentKey: "activities",
      },
      {
        key: "visa",
        label: "Visa",
        url: "/bookings/visa",
        parentKey: "visa",
      },
      {
        key: "trasfer",
        label: "Trasfer",
        url: "/bookings/trasfer",
        parentKey: "trasfer",
      },
    ],
  },

  {
    key: "finance",
    label: "Finance",
    icon: "tabler:premium-rights",
    children: [
      {
        key: "peroforma-invoice",
        label: "Peroforma Invoice",
        url: "/finance/peroforma-invoice",
        parentKey: "peroforma-invoice",
      },
      {
        key: "daily-collection",
        label: "Daily Collection",
        url: "/finance/daily-collection",
        parentKey: "daily-collection",
      },
      {
        key: "my-wallet-history",
        label: "My Wallet History",
        url: "/finance/my-wallet-history",
        parentKey: "my-wallet-history",
      },
      {
        key: "sales-report",
        label: "Sales Report",
        url: "/finance/sales-report",
        parentKey: "sales-report",
      },
      {
        key: "booking-report",
        label: "Booking Reports",
        url: "/finance/booking-report",
        parentKey: "booking-report",
      },
      {
        key: "lead-query-followup-report",
        label: "Lead Query Followup Report",
        url: "/finance/lead-query-followup-report",
        parentKey: "lead-query-followup-report",
      },
      {
        key: "invoice",
        label: "Invoice",
        url: "/finance/invoice",
        parentKey: "invoice",
      },
      {
        key: "credet-note",
        label: "Credit Note",
        url: "/finance/credet-note",
        parentKey: "credet-note",
      },
      {
        key: "b2c-customer",
        label: "B2C Customer",
        url: "/finance/b2c-customer",
        parentKey: "b2c-customer",
      },
      {
        key: "tcs-collection-report",
        label: "TCS Collection Report",
        url: "/finance/tcs-collection-report",
        parentKey: "tcs-collection-report",
      },
      {
        key: "tax-collection-report",
        label: "Tax Collection Report",
        url: "/finance/tax-collection-report",
        parentKey: "tax-collection-report",
      },
      {
        key: "reward-points",
        label: "Reward Points",
        url: "/finance/reward-points",
        parentKey: "reward-points",
      },
    ],
  },

  {
    key: "marketplace",
    label: "Marketplace",
    icon: "tabler:share",
    children: [
      {
        key: "my-offers",
        label: "My Offers",
        url: "/marketplace/my-offers",
        parentKey: "my-offers",
      },
      {
        key: "deals-hub",
        label: "Deals Hub",
        url: "/marketplace/deals-hub",
        parentKey: "deals-hub",
      },
      {
        key: "my-published-packages",
        label: "My Published Packages",
        url: "/marketplace/my-published-packages",
        parentKey: "my-published-packages",
      },
    ],
  },

  {
    key: "staff-management",
    label: "Staff Management",
    icon: "tabler:users",
    children: [
      {
        key: "roles",
        label: "Roles",
        url: "/staff-management/roles",
        parentKey: "roles",
      },
      {
        key: "departments",
        label: "Departments",
        url: "/staff-management/departments",
        parentKey: "departments",
      },
      {
        key: "staff",
        label: "Staff",
        url: "/staff-management/staff",
        parentKey: "staff",
      },
    ],
  },

  {
    key: "settings",
    label: "Settings",
    icon: "tabler:settings-cog",
    children: [
      {
        key: "company-profile",
        label: "Company Profile",
        url: "/settings/company-profile",
        parentKey: "company-profile",
      },
      {
        key: "terms-and-conditions",
        label: "Terms and Conditions",
        url: "/settings/terms-and-conditions",
        parentKey: "terms-and-conditions",
      },
      {
        key: "email-templates",
        label: "Email Templates",
        url: "/settings/email-templates",
        parentKey: "email-templates",
      },
      {
        key: "mark-ups",
        label: "Mark Ups",
        url: "/settings/mark-ups",
        parentKey: "mark-ups",
      },
      {
        key: "lead-source",
        label: "Lead Source",
        url: "/settings/lead-source",
        parentKey: "lead-source",
      },
      {
        key: "manage-notifications",
        label: "Manage Notifications",
        url: "/settings/manage-notifications",
        parentKey: "manage-notifications",
      },
      {
        key: "communications",
        label: "Communications",
        url: "/settings/communications",
        parentKey: "communications",
      },
      {
        key: "subscriptions-plan",
        label: "Subscriptions Plan",
        url: "/settings/subscriptions-plan",
        parentKey: "subscriptions-plan",
      },
      {
        key: "global-settings",
        label: "Global Settings",
        url: "/settings/global-settings",
        parentKey: "global-settings",
      },
    ],
  },
];
