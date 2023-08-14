export const FullAccess = '*';

/**
 * ------------------------------------------------
 * ------------------ ACCOUNT --------------------
 * ------------------------------------------------
 */

export const ACCOUNT_FullAccess = 'ACCOUNT.*';
export const ACCOUNT_DescribeProfile = 'ACCOUNT:DescribeProfile';
export const ACCOUNT_EditProfile = 'ACCOUNT:EditProfile';
export const ACCOUNT_ChangeProfilePassword = 'ACCOUNT:ChangeProfilePassword';


/**
 * ------------------------------------------------
 * -------------------- IAM ----------------------
 * ------------------------------------------------
 */
export const IAM_fullAccess = 'IAM.*';


// ADMIN PERMISSIONS
export const IAM_AdminPermissions_FullAccess = 'IAM:AdminPermissions:*';
export const IAM_AdminPermissions_SortPermissions = 'IAM:AdminPermissions:SortPermissions';
export const IAM_AdminPermissions_ListPermissions = 'IAM:AdminPermissions:ListPermissions';
export const IAM_AdminPermissions_DescribePermission = 'IAM:AdminPermissions:DescribePermission';
export const IAM_AdminPermissions_EditPermissions = 'IAM:AdminPermissions:EditPermissions';
export const IAM_AdminPermissions_ListRoles = 'IAM:AdminPermissions:ListRoles';
export const IAM_AdminPermissions_DescribeRole = 'IAM:AdminPermissions:DescribeRole';
export const IAM_AdminPermissions_CreateRole = 'IAM:AdminPermissions:CreateRole';
export const IAM_AdminPermissions_EditRole = 'IAM:AdminPermissions:EditRole';
export const IAM_AdminPermissions_EditRolePermissions = 'IAM:AdminPermissions:EditRolePermissions';


// ADMIN MANAGEMENT
export const IAM_AdminManagement_FullAccess = 'IAM:AdminManagement:*';
export const IAM_AdminManagement_ListAdmins = 'IAM:AdminManagement:ListAdmins';
export const IAM_AdminManagement_CreateAdmin = 'IAM:AdminManagement:CreateAdmin';
export const IAM_AdminManagement_DescribeAdmin = 'IAM:AdminManagement:DescribeAdmin';
export const IAM_AdminManagement_EditAdmin = 'IAM:AdminManagement:EditAdmin';
export const IAM_AdminManagement_ActivateAdmin = 'IAM:AdminManagement:ActivateAdmin';
export const IAM_AdminManagement_BlockAdmin = 'IAM:AdminManagement:BlockAdmin';
export const IAM_AdminManagement_AssignRole = 'IAM:AdminManagement:AssignRole';
export const IAM_AdminManagement_RevokeRole = 'IAM:AdminManagement:RevokeRole';
export const IAM_AdminManagement_AssignDirectPermission = 'IAM:AdminManagement:AssignDirectPermission';
export const IAM_AdminManagement_RevokeDirectPermission = 'IAM:AdminManagement:RevokeDirectPermission';
export const IAM_AdminManagement_ChangePassword = 'IAM:AdminManagement:ChangePassword';

/**
 * ------------------------------------------------
 * -------------------- CMS ----------------------
 * ------------------------------------------------
 */
export const CMS_FullAccess = 'CMS.*';

// CONTENT MANAGEMENT
export const CMS_ContentManagement_FullAccess = 'CMS:ContentManagement:ListLocations:*';
export const CMS_ContentManagement_ListLocations = 'CMS:ContentManagement:ListLocations';
export const CMS_ContentManagement_DescribeLocations = 'CMS:ContentManagement:DescribeLocations';
export const CMS_ContentManagement_AddLocation = 'CMS:ContentManagement:AddLocation';
export const CMS_ContentManagement_EditLocation = 'CMS:ContentManagement:EditLocation';

// PROPERTY MANAGEMENT
export const CMS_PropertyManagement_FullAccess = 'CMS:PropertyManagement:*';
export const CMS_PropertyManagement_ListProperties = 'CMS:PropertyManagement:ListProperties';
export const CMS_PropertyManagement_DescribeProperty = 'CMS:PropertyManagement:DescribeProperty';
export const CMS_PropertyManagement_CreateProperty = 'CMS:PropertyManagement:CreateProperty';
export const CMS_PropertyManagement_EditPropertyBasicDetails = 'CMS:PropertyManagement:EditPropertyBasicDetails';
export const CMS_PropertyManagement_ActivateProperty = 'CMS:PropertyManagement:ActivateProperty';
export const CMS_PropertyManagement_BlockProperty = 'CMS:PropertyManagement:BlockProperty';
export const CMS_PropertyManagement_AssignExtranetUser = 'CMS:PropertyManagement:AssignExtranetUser';
export const CMS_PropertyManagement_RevokeExtranetUser = 'CMS:PropertyManagement:RevokeExtranetUser';


/**
 * -----------------------------------------------
 * -------------------- IBE ----------------------
 * -----------------------------------------------
 */
export const IBE_FullAccess = 'IBE:*';

// BOOKINGS
export const IBE_Bookings_FullAccess = 'IBE:Bookings:*';
export const IBE_Bookings_ListBookings = 'IBE:Bookings:ListBookings';
export const IBE_Bookings_DescribeBooking = 'IBE:Bookings:DescribeBooking';
export const IBE_Bookings_TriggerNotifications = 'IBE:Bookings:TriggerNotifications';
export const IBE_Bookings_ExportReports = 'IBE:Bookings:ExportReports'; // new

// BOOKING DASHBOARD
export const IBE_BookingDashboard_FullAccess = 'IBE:BookingDashboard:*';
export const IBE_BookingDashboard_ViewCharts = 'IBE:Bookings:ViewCharts';


// BOOKING ENGINE GROUPS
export const IBE_BeGroups_FullAccess = 'IBE:BeGroups:*';
export const IBE_BeGroups_ListGroups = 'IBE:BeGroups:ListGroups';
export const IBE_BeGroups_DescribeGroup = 'IBE:BeGroups:DescribeGroup';
export const IBE_BeGroups_CreateGroup = 'IBE:BeGroups:CreateGroup';
export const IBE_BeGroups_EditGroup = 'IBE:BeGroups:EditGroup';
export const IBE_BeGroups_AssignProperty = 'IBE:BeGroups:AssignProperty';
export const IBE_BeGroups_RemoveProperty = 'IBE:BeGroups:RemoveProperty';


// GOOGLE HOTELS
export const IBE_GoogleHotels_FullAccess = 'IBE:GoogleHotels:*';
export const IBE_GoogleHotels_ListProperties = 'IBE:GoogleHotels:ListProperties';
export const IBE_GoogleHotels_DownloadListing = 'IBE:GoogleHotels:DownloadListing';


// CONNECTIVITY
export const IBE_Connectivity_FullAccess = 'IBE:Connectivity:*';
export const IBE_Connectivity_ListConnectivity = 'IBE:Connectivity:ListConnectivity';
export const IBE_Connectivity_DescribeConnectivity = 'IBE:Connectivity:DescribeConnectivity';
export const IBE_Connectivity_CreateConnectivity = 'IBE:Connectivity:CreateConnectivity';
export const IBE_Connectivity_EditConnectivity = 'IBE:Connectivity:EditConnectivity';
export const IBE_Connectivity_ActivateConnectivity = 'IBE:Connectivity:ActivateConnectivity';
export const IBE_Connectivity_DisableConnectivity = 'IBE:Connectivity:DisableConnectivity';
export const IBE_Connectivity_ViewSecrets = 'IBE:Connectivity:ViewSecrets';
export const IBE_Connectivity_DescribeSecrets = 'IBE:Connectivity:DescribeSecrets';
export const IBE_Connectivity_ViewOnboardingDetails = 'IBE:Connectivity:ViewOnboardingDetails'; // new

// ARI MONITORING
export const IBE_AriMonitoring_FullAccess = 'IBE:AriMonitoring:*';
export const IBE_AriMonitoring_ViewMonitoring = 'IBE:AriMonitoring:ViewMonitoring'; // modified. old symbol - IBE:ViewMonitoring:*
export const IBE_AriMonitoring_ExportReport = 'IBE:AriMonitoring:ExportReport'; // new

// CHANNEL LOGS
export const IBE_ChannelLogs_FullAccess = 'IBE:ChannelLogs:*';
export const IBE_ChannelLogs_ListLogs = 'IBE:ChannelLogs:ListLogs';
export const IBE_ChannelLogs_DescribeLog = 'IBE:ChannelLogs:DescribeLog';
export const IBE_ChannelLogs_ReviewLog = 'IBE:ChannelLogs:ReviewLog';

// API Logs
export const IBE_ApiLogs_FullAccess = 'IBE:ApiLogs:*'; // new
export const IBE_ApiLogs_ListLogs = 'IBE:ApiLogs:ListLogs'; // new
export const IBE_ApiLogs_DescribeLogs = 'IBE:ApiLogs:DescribeLogs'; // new

// Website Settings
export const IBE_WebsiteSettings_FullAccess = 'IBE:WebsiteSettings:*'; // new
export const IBE_WebsiteSettings_ViewSettings = 'IBE:WebsiteSettings:ViewSettings'; // new
export const IBE_WebsiteSettings_UpdateSettings = 'IBE:WebsiteSettings:UpdateSettings'; // new


/**
 * -----------------------------------------------
 * -------------------- IYA ----------------------
 * -----------------------------------------------
 */
export const IYA_FullAccess = 'IYA:*';

// BOOKING DATA MANAGEMENT
export const IYA_BookingDataManagement_FullAccess = 'IYA:BookingDataManagement:*';

// BOOKING SETUPS
export const IYA_BookingDataManagement_BookingSetups_FullAccess = 'IYA:BookingDataManagement:BookingSetups:*';

export const IYA_BookingDataManagement_BookingSetups_ListSetups = 'IYA:BookingDataManagement:BookingSetups:ListSetups';
export const IYA_BookingDataManagement_BookingSetups_DescribeSetup = 'IYA:BookingDataManagement:BookingSetups:DescribeSetup';
export const IYA_BookingDataManagement_BookingSetups_CreateSetup = 'IYA:BookingDataManagement:BookingSetups:CreateSetup';
export const IYA_BookingDataManagement_BookingSetups_EditSetup = 'IYA:BookingDataManagement:BookingSetups:EditSetup';
export const IYA_BookingDataManagement_BookingSetups_ActivateSetup = 'IYA:BookingDataManagement:BookingSetups:ActivateSetup';
export const IYA_BookingDataManagement_BookingSetups_RejectSetup = 'IYA:BookingDataManagement:BookingSetups:RejectSetup';
export const IYA_BookingDataManagement_BookingSetups_DisableSetup = 'IYA:BookingDataManagement:BookingSetups:DisableSetup';
export const IYA_BookingDataManagement_BookingSetups_DeleteSetup = 'IYA:BookingDataManagement:BookingSetups:DeleteSetup';

// BOOKING CONFIGS
export const IYA_BookingDataManagement_BookingConfigs_FullAccess = 'IYA:BookingDataManagement:BookingConfigs:*';
export const IYA_BookingDataManagement_BookingConfigs_ListConfigs = 'IYA:BookingDataManagement:BookingConfigs:ListConfigs';
export const IYA_BookingDataManagement_BookingConfigs_DescribeConfig = 'IYA:BookingDataManagement:BookingConfigs:DescribeConfig';
export const IYA_BookingDataManagement_BookingConfigs_CreateConfig = 'IYA:BookingDataManagement:BookingConfigs:CreateConfig';
export const IYA_BookingDataManagement_BookingConfigs_ActivateConfig = 'IYA:BookingDataManagement:BookingConfigs:ActivateConfig';
export const IYA_BookingDataManagement_BookingConfigs_DisableConfig = 'IYA:BookingDataManagement:BookingConfigs:DisableConfig';
export const IYA_BookingDataManagement_BookingConfigs_RejectConfig = 'IYA:BookingDataManagement:BookingConfigs:RejectConfig';
export const IYA_BookingDataManagement_BookingConfigs_DeleteConfig = 'IYA:BookingDataManagement:BookingConfigs:DeleteConfig';
export const IYA_BookingDataManagement_BookingConfigs_DescribeOnboardingDetails = 'IYA:BookingDataManagement:BookingConfigs:DescribeOnboardingDetails';
export const IYA_BookingDataManagement_BookingConfigs_DescribeSecrets = 'IYA:BookingDataManagement:BookingConfigs:DescribeSecrets';
export const IYA_BookingDataManagement_BookingConfigs_DownloadSecrets = 'IYA:BookingDataManagement:BookingConfigs:DownloadSecrets';

// BOOKING DATA ACTIVITY
export const IYA_BookingDataManagement_BookingActivity_FullAccess = 'IYA:BookingDataManagement:BookingActivity:*';
export const IYA_BookingDataManagement_BookingActivity_ListActivity = 'IYA:BookingDataManagement:BookingActivity:ListActivity';
export const IYA_BookingDataManagement_BookingActivity_DescribeActivity = 'IYA:BookingDataManagement:BookingActivity:DescribeActivity';

// BOOKING SUMMARY ACTIVITY
export const IYA_BookingDataManagement_BookingSummaryActivity_FullAccess = 'IYA:BookingDataManagement:BookingSummaryActivity:*';
export const IYA_BookingDataManagement_BookingSummaryActivity_ListActivity = 'IYA:BookingDataManagement:BookingSummaryActivity:ListActivity';
export const IYA_BookingDataManagement_BookingSummaryActivity_DescribeActivity = 'IYA:BookingDataManagement:BookingSummaryActivity:DescribeActivity';

// BOOKING SUMMARY INSPECTION
export const IYA_BookingDataManagement_BookingSummaryInspection_FullAccess = 'IYA:BookingDataManagement:BookingSummaryInspection:*';
export const IYA_BookingDataManagement_BookingSummaryInspection_ListData = 'IYA:BookingDataManagement:BookingSummaryInspection:ListData';
export const IYA_BookingDataManagement_BookingSummaryInspection_DescribeData = 'IYA:BookingDataManagement:BookingSummaryInspection:DescribeData';


// RATE SHOPPING DATA MANAGEMENT
export const IYA_RateShoppingManagement_FullAccess = 'IYA:RateShoppingManagement:*';

// RATE SHOPPER SETUPS
export const IYA_RateShoppingManagement_RateShopperSetups_FullAccess = 'IYA:RateShoppingManagement:RateShopperSetups:*';
export const IYA_RateShoppingManagement_RateShopperSetups_ListSetups = 'IYA:RateShoppingManagement:RateShopperSetups:ListSetups';
export const IYA_RateShoppingManagement_RateShopperSetups_DescribeSetup = 'IYA:RateShoppingManagement:RateShopperSetups:DescribeSetup';
export const IYA_RateShoppingManagement_RateShopperSetups_CreateSetup = 'IYA:RateShoppingManagement:RateShopperSetups:CreateSetup';
export const IYA_RateShoppingManagement_RateShopperSetups_EditSetup = 'IYA:RateShoppingManagement:RateShopperSetups:EditSetup';
export const IYA_RateShoppingManagement_RateShopperSetups_ActivateSetup = 'IYA:RateShoppingManagement:RateShopperSetups:ActivateSetup';
export const IYA_RateShoppingManagement_RateShopperSetups_RejectSetup = 'IYA:RateShoppingManagement:RateShopperSetups:RejectSetup';
export const IYA_RateShoppingManagement_RateShopperSetups_DisableSetup = 'IYA:RateShoppingManagement:RateShopperSetups:DisableSetup';
export const IYA_RateShoppingManagement_RateShopperSetups_DeleteSetup = 'IYA:RateShoppingManagement:RateShopperSetups:DeleteSetup';

// RATE SHOPPER CONFIGS
export const IYA_RateShoppingManagement_RateShopperConfigs_FullAccess = 'IYA:RateShoppingManagement:RateShopperConfigs:*';
export const IYA_RateShoppingManagement_RateShopperConfigs_ListConfigs = 'IYA:RateShoppingManagement:RateShopperConfigs:ListConfigs';
export const IYA_RateShoppingManagement_RateShopperConfigs_DescribeConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:DescribeConfig';
export const IYA_RateShoppingManagement_RateShopperConfigs_CreateConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:CreateConfig';
export const IYA_RateShoppingManagement_RateShopperConfigs_ActivateConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:ActivateConfig';
export const IYA_RateShoppingManagement_RateShopperConfigs_DisableConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:DisableConfig';
export const IYA_RateShoppingManagement_RateShopperConfigs_RejectConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:RejectConfig';
export const IYA_RateShoppingManagement_RateShopperConfigs_DeleteConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:DeleteConfig';
export const IYA_RateShoppingManagement_RateShopperConfigs_DescribeOnboardingDetails = 'IYA:RateShoppingManagement:RateShopperConfigs:DescribeOnboardingDetails';
export const IYA_RateShoppingManagement_RateShopperConfigs_DescribeSecrets = 'IYA:RateShoppingManagement:RateShopperConfigs:DescribeSecrets';
export const IYA_RateShoppingManagement_RateShopperConfigs_DownloadSecrets = 'IYA:RateShoppingManagement:RateShopperConfigs:DownloadSecrets';

// RATE SHOPPING ACTIVITY
export const IYA_RateShoppingManagement_RateShoppingActivity_FullAccess = 'IYA:RateShoppingManagement:RateShoppingActivity:*';
export const IYA_RateShoppingManagement_RateShoppingActivity_ListActivity = 'IYA:RateShoppingManagement:RateShoppingActivity:ListActivity';
export const IYA_RateShoppingManagement_RateShoppingActivity_DescribeActivity = 'IYA:RateShoppingManagement:RateShoppingActivity:DescribeActivity';


// RATE SHOPPING INSPECTION
export const IYA_RateShoppingManagement_RateShoppingInspection_FullAccess = 'IYA:RateShoppingManagement:RateShoppingInspection:*';
export const IYA_RateShoppingManagement_RateShoppingInspection_ListData = 'IYA:RateShoppingManagement:RateShoppingInspection:ListData';
export const IYA_RateShoppingManagement_RateShoppingInspection_DescribeData = 'IYA:RateShoppingManagement:RateShoppingInspection:DescribeData';


// REVIEW SETUPS
export const IYA_ReviewDataManagement_FullAccess = 'IYA:ReviewDataManagement:*';

export const IYA_ReviewDataManagement_ReviewSetups_FullAccess = 'IYA:ReviewDataManagement:ReviewSetups:*';
export const IYA_ReviewDataManagement_ReviewSetups_ListSetups = 'IYA:ReviewDataManagement:ReviewSetups:ListSetups';
export const IYA_ReviewDataManagement_ReviewSetups_DescribeSetup = 'IYA:ReviewDataManagement:ReviewSetups:DescribeSetup';
export const IYA_ReviewDataManagement_ReviewSetups_CreateSetup = 'IYA:ReviewDataManagement:ReviewSetups:CreateSetup';
export const IYA_ReviewDataManagement_ReviewSetups_EditSetup = 'IYA:ReviewDataManagement:ReviewSetups:EditSetup';
export const IYA_ReviewDataManagement_ReviewSetups_ActivateSetup = 'IYA:ReviewDataManagement:ReviewSetups:ActivateSetup';
export const IYA_ReviewDataManagement_ReviewSetups_RejectSetup = 'IYA:ReviewDataManagement:ReviewSetups:RejectSetup';
export const IYA_ReviewDataManagement_ReviewSetups_DisableSetup = 'IYA:ReviewDataManagement:ReviewSetups:DisableSetup';
export const IYA_ReviewDataManagement_ReviewSetups_DeleteSetup = 'IYA:ReviewDataManagement:ReviewSetups:DeleteSetup';

// REVIEW CONFIGS
export const IYA_ReviewDataManagement_ReviewConfigs_FullAccess = 'IYA:ReviewDataManagement:ReviewConfigs:*';
export const IYA_ReviewDataManagement_ReviewConfigs_ListConfigs = 'IYA:ReviewDataManagement:ReviewConfigs:ListConfigs';
export const IYA_ReviewDataManagement_ReviewConfigs_DescribeConfig = 'IYA:ReviewDataManagement:ReviewConfigs:DescribeConfig';
export const IYA_ReviewDataManagement_ReviewConfigs_CreateConfig = 'IYA:ReviewDataManagement:ReviewConfigs:CreateConfig';
export const IYA_ReviewDataManagement_ReviewConfigs_ActivateConfig = 'IYA:ReviewDataManagement:ReviewConfigs:ActivateConfig';
export const IYA_ReviewDataManagement_ReviewConfigs_DisableConfig = 'IYA:ReviewDataManagement:ReviewConfigs:DisableConfig';
export const IYA_ReviewDataManagement_ReviewConfigs_RejectConfig = 'IYA:ReviewDataManagement:ReviewConfigs:RejectConfig';
export const IYA_ReviewDataManagement_ReviewConfigs_DeleteConfig = 'IYA:ReviewDataManagement:ReviewConfigs:DeleteConfig';
export const IYA_ReviewDataManagement_ReviewConfigs_DescribeOnboardingDetails = 'IYA:ReviewDataManagement:ReviewConfigs:DescribeOnboardingDetails';
export const IYA_ReviewDataManagement_ReviewConfigs_DescribeSecrets = 'IYA:ReviewDataManagement:ReviewConfigs:DescribeSecrets';
export const IYA_ReviewDataManagement_ReviewConfigs_DownloadSecrets = 'IYA:ReviewDataManagement:ReviewConfigs:DownloadSecrets';

// REVIEW ACTIVITY
export const IYA_ReviewDataManagement_ReviewActivity_FullAccess = 'IYA:ReviewDataManagement:ReviewActivity:*';
export const IYA_ReviewDataManagement_ReviewActivity_ListActivity = 'IYA:ReviewDataManagement:ReviewActivity:ListActivity';
export const IYA_ReviewDataManagement_ReviewActivity_DescribeActivity = 'IYA:ReviewDataManagement:ReviewActivity:DescribeActivity';


// REVIEW SUMMARY ACTIVITY
export const IYA_ReviewDataManagement_ReviewSummaryActivity_FullAccess = 'IYA:ReviewDataManagement:ReviewSummaryActivity:*';
export const IYA_ReviewDataManagement_ReviewSummaryActivity_ListActivity = 'IYA:ReviewDataManagement:ReviewSummaryActivity:ListActivity';
export const IYA_ReviewDataManagement_ReviewSummaryActivity_DescribeActivity = 'IYA:ReviewDataManagement:ReviewSummaryActivity:DescribeActivity';


// COMPSETS
export const IYA_CompsetManagement_FullAccess = 'IYA:CompsetManagement:*';

export const IYA_CompsetManagement_Compsets_FullAccess = 'IYA:CompsetManagement:Compsets:*';
export const IYA_CompsetManagement_Compsets_ListSetups = 'IYA:CompsetManagement:Compsets:ListSetups';
export const IYA_CompsetManagement_Compsets_DescribeSetup = 'IYA:CompsetManagement:Compsets:DescribeSetup';
export const IYA_CompsetManagement_Compsets_CreateSetup = 'IYA:CompsetManagement:Compsets:CreateSetup';
export const IYA_CompsetManagement_Compsets_EditSetup = 'IYA:CompsetManagement:Compsets:EditSetup';
export const IYA_CompsetManagement_Compsets_ActivateSetup = 'IYA:CompsetManagement:Compsets:ActivateSetup';
export const IYA_CompsetManagement_Compsets_RejectSetup = 'IYA:CompsetManagement:Compsets:RejectSetup';
export const IYA_CompsetManagement_Compsets_DisableSetup = 'IYA:CompsetManagement:Compsets:DisableSetup';
export const IYA_CompsetManagement_Compsets_DeleteSetup = 'IYA:CompsetManagement:Compsets:DeleteSetup';


// PROPERTY DEMAND SETUP
export const IYA_DemandManagement_FullAccess = 'IYA:DemandManagement:*';

export const IYA_DemandManagement_PropertyDemandSetups_FullAccess = 'IYA:DemandManagement:PropertyDemandSetups:*';
export const IYA_DemandManagement_PropertyDemandSetups_ListSetups = 'IYA:DemandManagement:PropertyDemandSetups:ListSetups';
export const IYA_DemandManagement_PropertyDemandSetups_DescribeSetup = 'IYA:DemandManagement:PropertyDemandSetups:DescribeSetup';
export const IYA_DemandManagement_PropertyDemandSetups_CreateSetup = 'IYA:DemandManagement:PropertyDemandSetups:CreateSetup';
export const IYA_DemandManagement_PropertyDemandSetups_EditSetup = 'IYA:DemandManagement:PropertyDemandSetups:EditSetup';
export const IYA_DemandManagement_PropertyDemandSetups_ActivateSetup = 'IYA:DemandManagement:PropertyDemandSetups:ActivateSetup';
export const IYA_DemandManagement_PropertyDemandSetups_RejectSetup = 'IYA:DemandManagement:PropertyDemandSetups:RejectSetup';
export const IYA_DemandManagement_PropertyDemandSetups_DisableSetup = 'IYA:DemandManagement:PropertyDemandSetups:DisableSetup';
export const IYA_DemandManagement_PropertyDemandSetups_DeleteSetup = 'IYA:DemandManagement:PropertyDemandSetups:DeleteSetup';


// PROPERTY VARIABLES SETUP
export const IYA_PropertyVariablesSetup_FullAccess = 'IYA:PropertyVariablesSetup:*';
export const IYA_PropertyVariablesSetup_ListSetups = 'IYA:PropertyVariablesSetup:ListSetups';
export const IYA_PropertyVariablesSetup_DescribeSetup = 'IYA:PropertyVariablesSetup:DescribeSetup';
export const IYA_PropertyVariablesSetup_CreateSetup = 'IYA:PropertyVariablesSetup:CreateSetup';
export const IYA_PropertyVariablesSetup_EditSetup = 'IYA:PropertyVariablesSetup:EditSetup';
export const IYA_PropertyVariablesSetup_ActivateSetup = 'IYA:PropertyVariablesSetup:ActivateSetup';
export const IYA_PropertyVariablesSetup_RejectSetup = 'IYA:PropertyVariablesSetup:RejectSetup';
export const IYA_PropertyVariablesSetup_DisableSetup = 'IYA:PropertyVariablesSetup:DisableSetup';
export const IYA_PropertyVariablesSetup_DeleteSetup = 'IYA:PropertyVariablesSetup:DeleteSetup';


// PROPERTY DEMAND SETUP
export const IYA_Automation_FullAccess = 'IYA:Automation:*';
export const IYA_Automation_ListRoutines = 'IYA:Automation:ListRoutines';
export const IYA_Automation_DescribeRoutine = 'IYA:Automation:DescribeRoutine';
export const IYA_Automation_ListTasks = 'IYA:Automation:ListTasks';
export const IYA_Automation_DescribeTask = 'IYA:Automation:DescribeTask';
export const IYA_Automation_ListTaskAttempts = 'IYA:Automation:ListTaskAttempts';
export const IYA_Automation_DescribeTaskAttempt = 'IYA:Automation:DescribeTaskAttempt';


// INTELLIGENCE
export const IYA_Intelligence_FullAccess = 'IYA:Intelligence:*'; // new
export const IYA_Intelligence_ListSetups = 'IYA:Intelligence:ListSetups'; // new
export const IYA_Intelligence_DescribeSetup = 'IYA:Intelligence:DescribeSetup'; // new
export const IYA_Intelligence_CreateSetup = 'IYA:Intelligence:CreateSetup'; // new
export const IYA_Intelligence_EditSetup = 'IYA:Intelligence:EditSetup'; // new
export const IYA_Intelligence_DisableSetup = 'IYA:Intelligence:DisableSetup'; // new
export const IYA_Intelligence_ActivateSetup = 'IYA:Intelligence:ActivateSetup'; // new
export const IYA_Intelligence_RejectSetup = 'IYA:Intelligence:RejectSetup'; // new
export const IYA_Intelligence_DeleteSetup = 'IYA:Intelligence:DeleteSetup'; // new

// API LOGS
export const IYA_ApiLogs_FullAccess = 'IYA:ApiLogs:*';
export const IYA_ApiLogs_ListLogs = 'IYA:ApiLogs:ListLogs';
export const IYA_ApiLogs_DescribeLog = 'IYA:ApiLogs:DescribeLog';


// VENDOR
export const IYA_VendorManagement_FullAccess = 'IYA:VendorManagement:*';

export const IYA_VendorManagement_AiRateMetrics_FullAccess = 'IYA:VendorManagement:AiRateMetrics:*';
export const IYA_VendorManagement_AiRateMetrics_ListRateShops = 'IYA:VendorManagement:AiRateMetrics:ListRateShops';
export const IYA_VendorManagement_AiRateMetrics_DescribeRateShop = 'IYA:VendorManagement:AiRateMetrics:DescribeRateShop';
export const IYA_VendorManagement_AiRateMetrics_ListRateQueues = 'IYA:VendorManagement:AiRateMetrics:ListRateQueues';
export const IYA_VendorManagement_AiRateMetrics_DescribeRateSQueue = 'IYA:VendorManagement:AiRateMetrics:DescribeRateSQueue';
export const IYA_VendorManagement_AiRateMetrics_ListRateQueueData = 'IYA:VendorManagement:AiRateMetrics:ListRateQueueData';
export const IYA_VendorManagement_AiRateMetrics_DescribeRatesQueueData = 'IYA:VendorManagement:AiRateMetrics:DescribeRatesQueueData'; // renamed. DescribeRatesQueueData 'S' was capital before.
export const IYA_VendorManagement_AiRateMetrics_SearchHotel = 'IYA:VendorManagement:AiRateMetrics:SearchHotel'; // new
export const IYA_VendorManagement_AiRateMetrics_ViewAccountCredits = 'IYA:VendorManagement:AiRateMetrics:ViewAccountCredits'; // new
export const IYA_VendorManagement_AiRateMetrics_GetQueueStatus = 'IYA:VendorManagement:AiRateMetrics:GetQueueStatus'; // new
export const IYA_VendorManagement_AiRateMetrics_ViewReferenceContent = 'IYA:VendorManagement:AiRateMetrics:ViewReferenceContent'; // new


export const IYA_VendorManagement_AiReviews_FullAccess = 'IYA:VendorManagement:AiReviews:*'; // new
export const IYA_VendorManagement_AiReviews_SearchHotel = 'IYA:VendorManagement:SearchHotel:SearchHotel'; // new
export const IYA_VendorManagement_AiReviews_RequestHotel = 'IYA:VendorManagement:RequestHotel:RequestHotel'; // new