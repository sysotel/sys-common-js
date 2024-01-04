module.exports.ADMIN_STATUS_ACTIVE = 'ACTIVE';
module.exports.ADMIN_STATUS_BLOCKED = 'BLOCKED';

module.exports.FullAccess = '*';
module.exports.FullReadAccess = 'FullReadAccess';


/**
 * ------------------------------------------------
 * ------------------ ACCOUNT --------------------
 * ------------------------------------------------
 */

module.exports.ACCOUNT_FullAccess = 'ACCOUNT.*';
module.exports.ACCOUNT_DescribeProfile = 'ACCOUNT:DescribeProfile';
module.exports.ACCOUNT_EditProfile = 'ACCOUNT:EditProfile';
module.exports.ACCOUNT_ChangeProfilePassword = 'ACCOUNT:ChangeProfilePassword';

/**
 * ------------------------------------------------
 * -------------------- IAM ----------------------
 * ------------------------------------------------
 */
module.exports.IAM_fullAccess = 'IAM.*';


// ADMIN PERMISSIONS
module.exports.IAM_AdminPermissions_FullAccess = 'IAM:AdminPermissions:*';
module.exports.IAM_AdminPermissions_SortPermissions = 'IAM:AdminPermissions:SortPermissions';
module.exports.IAM_AdminPermissions_ListPermissions = 'IAM:AdminPermissions:ListPermissions';
module.exports.IAM_AdminPermissions_DescribePermission = 'IAM:AdminPermissions:DescribePermission';
module.exports.IAM_AdminPermissions_EditPermissions = 'IAM:AdminPermissions:EditPermissions';
module.exports.IAM_AdminPermissions_ListRoles = 'IAM:AdminPermissions:ListRoles';
module.exports.IAM_AdminPermissions_DescribeRole = 'IAM:AdminPermissions:DescribeRole';
module.exports.IAM_AdminPermissions_CreateRole = 'IAM:AdminPermissions:CreateRole';
module.exports.IAM_AdminPermissions_EditRole = 'IAM:AdminPermissions:EditRole';
module.exports.IAM_AdminPermissions_EditRolePermissions = 'IAM:AdminPermissions:EditRolePermissions';


// ADMIN MANAGEMENT
module.exports.IAM_AdminManagement_FullAccess = 'IAM:AdminManagement:*';
module.exports.IAM_AdminManagement_ListAdmins = 'IAM:AdminManagement:ListAdmins';
module.exports.IAM_AdminManagement_CreateAdmin = 'IAM:AdminManagement:CreateAdmin';
module.exports.IAM_AdminManagement_DescribeAdmin = 'IAM:AdminManagement:DescribeAdmin';
module.exports.IAM_AdminManagement_EditAdmin = 'IAM:AdminManagement:EditAdmin';
module.exports.IAM_AdminManagement_ActivateAdmin = 'IAM:AdminManagement:ActivateAdmin';
module.exports.IAM_AdminManagement_BlockAdmin = 'IAM:AdminManagement:BlockAdmin';
module.exports.IAM_AdminManagement_AssignRole = 'IAM:AdminManagement:AssignRole';
module.exports.IAM_AdminManagement_RevokeRole = 'IAM:AdminManagement:RevokeRole';
module.exports.IAM_AdminManagement_DescribeRole = 'IAM:AdminManagement:DescribeRole';
module.exports.IAM_AdminManagement_AssignDirectPermission = 'IAM:AdminManagement:AssignDirectPermission';
module.exports.IAM_AdminManagement_RevokeDirectPermission = 'IAM:AdminManagement:RevokeDirectPermission';
module.exports.IAM_AdminManagement_DescribeDirectPermission = 'IAM:AdminManagement:DescribeDirectPermission';
module.exports.IAM_AdminManagement_ListDirectPermission = 'IAM:AdminManagement:ListDirectPermission';
module.exports.IAM_AdminManagement_ChangePassword = 'IAM:AdminManagement:ChangePassword';

//Property Management
module.exports.IAM_PropertyManagement_FullAccess = 'IAM:PropertyManagement:*';
module.exports.IAM_PropertyManagement_ListModules = 'IAM:PropertyManagement:ListModules';
module.exports.IAM_PropertyManagement_DescribeModule = 'IAM:PropertyManagement:DescribeModule';
module.exports.IAM_PropertyManagement_AssignModule = 'IAM:PropertyManagement:AssignModule';
module.exports.IAM_PropertyManagement_RevokeModule = 'IAM:PropertyManagement:RevokeModule';

//Extranet User Management
module.exports.IAM_ExtranetUserManagement_FullAccess = 'IAM:ExtranetUserManagement:*';
module.exports.IAM_ExtranetUserManagement_ListUsers = 'IAM:ExtranetUserManagement:ListUsers';
module.exports.IAM_ExtranetUserManagement_CreateUsers = 'IAM:ExtranetUserManagement:CreateUsers';
module.exports.IAM_ExtranetUserManagement_DescribeUser = 'IAM:ExtranetUserManagement:DescribeUser';
module.exports.IAM_ExtranetUserManagement_EditUser = 'IAM:ExtranetUserManagement:EditUser';
module.exports.IAM_ExtranetUserManagement_UpdatePassword = 'IAM:ExtranetUserManagement:UpdatePassword';
module.exports.IAM_ExtranetUserManagement_UpdateBasicInfo = 'IAM:ExtranetUserManagement:UpdateBasicInfo';
module.exports.IAM_ExtranetUserManagement_UpdateEmail = 'IAM:ExtranetUserManagement:UpdateEmail';
module.exports.IAM_ExtranetUserManagement_UpdateContactNumber = 'IAM:ExtranetUserManagement:UpdateContactNumber';
module.exports.IAM_ExtranetUserManagement_ChangeStatus = 'IAM:ExtranetUserManagement:ChangeStatus';
module.exports.IAM_ExtranetUserManagement_AssignProperty = 'IAM:ExtranetUserManagement:AssignProperty';
module.exports.IAM_ExtranetUserManagement_RevokeProperty = 'IAM:ExtranetUserManagement:RevokeProperty';

//company management
module.exports.IAM_CompanyManagement_FullAccess = 'IAM:CompanyManagement:*';
module.exports.IAM_CompanyManagement_ListCompany = 'IAM:CompanyManagement:ListCompanies';
module.exports.IAM_CompanyManagement_CreateCompany = 'IAM:CompanyManagement:CreateCompany';
module.exports.IAM_CompanyManagement_UpdateCompany = 'IAM:CompanyManagement:UpdateCompany';
module.exports.IAM_CompanyManagement_UpdateCompanyStatus = 'IAM:CompanyManagement:UpdateCompanyStatus';
module.exports.IAM_CompanyManagement_ManageGroupAssignments = 'IAM:CompanyManagement:ManageGroupAssignments';
module.exports.IAM_CompanyManagement_ManagePropertyAssignments = 'IAM:CompanyManagement:ManagePropertyAssignments';


//group management
module.exports.IAM_GroupManagement_FullAccess = 'IAM:GroupManagement:*';
module.exports.IAM_GroupManagement_ListGroups = 'IAM:GroupManagement:ListGroups';
module.exports.IAM_GroupManagement_CreateGroup = 'IAM:GroupManagement:CreateGroup';
module.exports.IAM_GroupManagement_UpdateGroup = 'IAM:GroupManagement:UpdateGroup';
module.exports.IAM_GroupManagement_UpdateGroupStatus = 'IAM:GroupManagement:UpdateGroupStatus';
module.exports.IAM_GroupManagement_ManageCompanyAssignments = 'IAM:GroupManagement:ManageCompanyAssignments';
module.exports.IAM_GroupManagement_ManagePropertyAssignments = 'IAM:GroupManagement:ManagePropertyAssignments';

/**
 * ------------------------------------------------
 * -------------------- CMS ----------------------
 * ------------------------------------------------
 */

module.exports.CMS_FullAccess = 'CMS.*';

module.exports.CMS_Reports_FullAccess = 'CMS:Reports:*';
module.exports.CMS_Reports_READ = 'CMS:Reports:Read';
module.exports.CMS_Reports_DOWNLOAD = 'CMS:Reports:Download';

// CONTENT MANAGEMENT
module.exports.CMS_ContentManagement_FullAccess = 'CMS:ContentManagement:ListLocations:*';
module.exports.CMS_ContentManagement_ListLocations = 'CMS:ContentManagement:ListLocations';
module.exports.CMS_ContentManagement_DescribeLocations = 'CMS:ContentManagement:DescribeLocations';
module.exports.CMS_ContentManagement_AddLocation = 'CMS:ContentManagement:AddLocation';
module.exports.CMS_ContentManagement_EditLocation = 'CMS:ContentManagement:EditLocation';


// PROPERTY MANAGEMENT
module.exports.CMS_PropertyManagement_FullAccess = 'CMS:PropertyManagement:*';
module.exports.CMS_PropertyManagement_ListProperties = 'CMS:PropertyManagement:ListProperties';
module.exports.CMS_PropertyManagement_DescribeProperty = 'CMS:PropertyManagement:DescribeProperty';
module.exports.CMS_PropertyManagement_CreateProperty = 'CMS:PropertyManagement:CreateProperty';
module.exports.CMS_PropertyManagement_EditPropertyBasicDetails = 'CMS:PropertyManagement:EditPropertyBasicDetails';
module.exports.CMS_PropertyManagement_ActivateProperty = 'CMS:PropertyManagement:ActivateProperty';
module.exports.CMS_PropertyManagement_BlockProperty = 'CMS:PropertyManagement:BlockProperty';
module.exports.CMS_PropertyManagement_AssignExtranetUser = 'CMS:PropertyManagement:AssignExtranetUser';
module.exports.CMS_PropertyManagement_RevokeExtranetUser = 'CMS:PropertyManagement:RevokeExtranetUser';
module.exports.CMS_ApiLogs_FullAccess = 'CMS:ApiLogs:*';
module.exports.CMS_ApiLogs_ListLogs = 'CMS:ApiLogs:ListLogs';
module.exports.CMS_ApiLogs_DescribeLogs = 'CMS:ApiLogs:DescribeLogs';
module.exports.CMS_ApiLogs_DownloadRequestData = 'CMS:ApiLogs:DownloadRequestData';
module.exports.CMS_ApiLogs_DownloadResponseData = 'CMS:ApiLogs_DownloadResponseData';

module.exports.CMS_OpenApiClients_FullAccess = 'CMS:OpenApiClients:*';
module.exports.CMS_OpenApiClients_CreateClient = 'CMS:OpenApiClients:CreateClient';
module.exports.CMS_OpenApiClients_ListClients = 'CMS:OpenApiClients:ListClients';
module.exports.CMS_OpenApiClients_DescribeClient = 'CMS:OpenApiClients:DescribeClient';
module.exports.CMS_OpenApiClients_UpdateClient = 'CMS:OpenApiClients:UpdateClient';

module.exports.CMS_PropertyLocks_FullAccess = 'CMS:PropertyLocks:*';
module.exports.CMS_PropertyLocks_ReadLocks = 'CMS:PropertyLocks:Read';
module.exports.CMS_PropertyLocks_ManageLocks = 'CMS:PropertyLocks:Manage';

module.exports.CMS_Queues_FullAccess = 'CMS:Queues:*';
module.exports.CMS_Queues_ListQueues = 'CMS:Queues:ListQueues';
module.exports.CMS_Queues_DescribeQueue = 'CMS:Queues:DescribeQueue';
module.exports.CMS_Queues_UpdateQueue = 'CMS:Queues:UpdateQueue';


/**
 * -----------------------------------------------
 * -------------------- IBE ----------------------
 * -----------------------------------------------
 */

module.exports.IBE_FullAccess = 'IBE:*';

module.exports.IBE_PropertyLocks_FullAccess = 'IBE:PropertyLocks:*';
module.exports.IBE_PropertyLocks_ReadLocks = 'IBE:PropertyLocks:Read';
module.exports.IBE_PropertyLocks_ManageLocks = 'IBE:PropertyLocks:Manage';

module.exports.IBE_Reports_FullAccess = 'IBE:Reports:*';
module.exports.IBE_Reports_READ = 'IBE:Reports:Read';
module.exports.IBE_Reports_DOWNLOAD = 'IBE:Reports:Download';

// BOOKINGS
module.exports.IBE_Bookings_FullAccess = 'IBE:Bookings:*';
module.exports.IBE_Bookings_ListBookings = 'IBE:Bookings:ListBookings';
module.exports.IBE_Bookings_DescribeBooking = 'IBE:Bookings:DescribeBooking';
module.exports.IBE_Bookings_TriggerNotifications = 'IBE:Bookings:TriggerNotifications';
module.exports.IBE_Bookings_ExportReports = 'IBE:Bookings:ExportReports';


// BOOKING DASHBOARD
module.exports.IBE_BookingDashboard_FullAccess = 'IBE:BookingDashboard:*';
module.exports.IBE_BookingDashboard_ViewCharts = 'IBE:Bookings:ViewCharts';

//Guest
module.exports.IBE_Guests_FullAccess = 'IBE:Guests:*';
module.exports.IBE_Guests_ListGuests = 'IBE:Guests:ListGuests';
module.exports.IBE_Guests_DescribeGuest = 'IBE:Guests:DescribeGuest';
module.exports.IBE_Guests_ViewContactDetails = 'IBE:Guests:ViewContactDetails';
module.exports.IBE_Guests_UpdateStatus = 'IBE:Guests:UpdateStatus';
module.exports.IBE_Guests_ViewReports = 'IBE:Guests:ViewReports';
module.exports.IBE_Guests_DownloadReports = 'IBE:Guests:DownloadReports';


// BOOKING ENGINE GROUPS
module.exports.IBE_BeGroups_FullAccess = 'IBE:BeGroups:*';
module.exports.IBE_BeGroups_ListGroups = 'IBE:BeGroups:ListGroups';
module.exports.IBE_BeGroups_DescribeGroup = 'IBE:BeGroups:DescribeGroup';
module.exports.IBE_BeGroups_CreateGroup = 'IBE:BeGroups:CreateGroup';
module.exports.IBE_BeGroups_EditGroup = 'IBE:BeGroups:EditGroup';
module.exports.IBE_BeGroups_AssignProperty = 'IBE:BeGroups:AssignProperty';
module.exports.IBE_BeGroups_RemoveProperty = 'IBE:BeGroups:RemoveProperty';


// GOOGLE HOTELS
module.exports.IBE_GoogleHotels_FullAccess = 'IBE:GoogleHotels:*';
module.exports.IBE_GoogleHotels_ListProperties = 'IBE:GoogleHotels:ListProperties';
module.exports.IBE_GoogleHotels_DownloadListing = 'IBE:GoogleHotels:DownloadListing';


// CONNECTIVITY
module.exports.IBE_Connectivity_FullAccess = 'IBE:Connectivity:*';
module.exports.IBE_Connectivity_ListConnectivity = 'IBE:Connectivity:ListConnectivity';
module.exports.IBE_Connectivity_DescribeConnectivity = 'IBE:Connectivity:DescribeConnectivity';
module.exports.IBE_Connectivity_CreateConnectivity = 'IBE:Connectivity:CreateConnectivity';
module.exports.IBE_Connectivity_EditConnectivity = 'IBE:Connectivity:EditConnectivity';
module.exports.IBE_Connectivity_ActivateConnectivity = 'IBE:Connectivity:ActivateConnectivity';
module.exports.IBE_Connectivity_DisableConnectivity = 'IBE:Connectivity:DisableConnectivity';
module.exports.IBE_Connectivity_ViewSecrets = 'IBE:Connectivity:ViewSecrets';
module.exports.IBE_Connectivity_DescribeSecrets = 'IBE:Connectivity:DescribeSecrets';
module.exports.IBE_Connectivity_ViewOnboardingDetails = 'IBE:Connectivity:ViewOnboardingDetails';


// ARI MONITORING
module.exports.IBE_AriMonitoring_FullAccess = 'IBE:AriMonitoring:*';
module.exports.IBE_AriMonitoring_ViewMonitoring = 'IBE:AriMonitoring:ViewMonitoring';
module.exports.IBE_AriMonitoring_ExportReport = 'IBE:AriMonitoring:ExportReport';


// CHANNEL LOGS
module.exports.IBE_ChannelLogs_FullAccess = 'IBE:ChannelLogs:*';
module.exports.IBE_ChannelLogs_ListLogs = 'IBE:ChannelLogs:ListLogs';
module.exports.IBE_ChannelLogs_DescribeLog = 'IBE:ChannelLogs:DescribeLog';
module.exports.IBE_ChannelLogs_ReviewLog = 'IBE:ChannelLogs:ReviewLog';


// API Logs
module.exports.IBE_ApiLogs_FullAccess = 'IBE:ApiLogs:*';
module.exports.IBE_ApiLogs_ListLogs = 'IBE:ApiLogs:ListLogs';
module.exports.IBE_ApiLogs_DescribeLogs = 'IBE:ApiLogs:DescribeLogs';

module.exports.IBE_ApiLogs_DownloadRequestData = 'IBE:ApiLogs:DownloadRequestData';
module.exports.IBE_ApiLogs_DownloadResponseData = 'IBE:ApiLogs_DownloadResponseData';


// Website Settings
module.exports.IBE_WebsiteSettings_FullAccess = 'IBE:WebsiteSettings:*';
module.exports.IBE_WebsiteSettings_ViewSettings = 'IBE:WebsiteSettings:ViewSettings';
module.exports.IBE_WebsiteSettings_UpdateSettings = 'IBE:WebsiteSettings:UpdateSettings';
module.exports.IBE_PaymentGateways_FullAccess = 'IBE:PaymentGateways:*';
module.exports.IBE_PaymentGateways_ListData = 'IBE:PaymentGateways:ListData';
module.exports.IBE_PaymentGateways_DescribeData = 'IBE:PaymentGateways:DescribeData';
module.exports.IBE_PaymentGateways_UnlockEditing = 'IBE:PaymentGateways:UnlockEditing';
module.exports.IBE_PaymentGateways_UpdateData = 'IBE:PaymentGateways:UpdateData';

/**
 * -----------------------------------------------
 * -------------------- IYA --- -------------------
 * -----------------------------------------------
 */

module.exports.IYA_FullAccess = 'IYA:*';


// BOOKING DATA MANAGEMENT
module.exports.IYA_BookingDataManagement_FullAccess = 'IYA:BookingDataManagement:*';


// BOOKING SETUPS
module.exports.IYA_BookingDataManagement_BookingSetups_FullAccess = 'IYA:BookingDataManagement:BookingSetups:*';

module.exports.IYA_BookingDataManagement_BookingSetups_ListSetups = 'IYA:BookingDataManagement:BookingSetups:ListSetups';
module.exports.IYA_BookingDataManagement_BookingSetups_DescribeSetup = 'IYA:BookingDataManagement:BookingSetups:DescribeSetup';
module.exports.IYA_BookingDataManagement_BookingSetups_CreateSetup = 'IYA:BookingDataManagement:BookingSetups:CreateSetup';
module.exports.IYA_BookingDataManagement_BookingSetups_EditSetup = 'IYA:BookingDataManagement:BookingSetups:EditSetup';
module.exports.IYA_BookingDataManagement_BookingSetups_ActivateSetup = 'IYA:BookingDataManagement:BookingSetups:ActivateSetup';
module.exports.IYA_BookingDataManagement_BookingSetups_RejectSetup = 'IYA:BookingDataManagement:BookingSetups:RejectSetup';
module.exports.IYA_BookingDataManagement_BookingSetups_DisableSetup = 'IYA:BookingDataManagement:BookingSetups:DisableSetup';
module.exports.IYA_BookingDataManagement_BookingSetups_DeleteSetup = 'IYA:BookingDataManagement:BookingSetups:DeleteSetup';


// BOOKING CONFIGS
module.exports.IYA_BookingDataManagement_BookingConfigs_FullAccess = 'IYA:BookingDataManagement:BookingConfigs:*';
module.exports.IYA_BookingDataManagement_BookingConfigs_ListConfigs = 'IYA:BookingDataManagement:BookingConfigs:ListConfigs';
module.exports.IYA_BookingDataManagement_BookingConfigs_DescribeConfig = 'IYA:BookingDataManagement:BookingConfigs:DescribeConfig';
module.exports.IYA_BookingDataManagement_BookingConfigs_CreateConfig = 'IYA:BookingDataManagement:BookingConfigs:CreateConfig';
module.exports.IYA_BookingDataManagement_BookingConfigs_ActivateConfig = 'IYA:BookingDataManagement:BookingConfigs:ActivateConfig';
module.exports.IYA_BookingDataManagement_BookingConfigs_DisableConfig = 'IYA:BookingDataManagement:BookingConfigs:DisableConfig';
module.exports.IYA_BookingDataManagement_BookingConfigs_RejectConfig = 'IYA:BookingDataManagement:BookingConfigs:RejectConfig';
module.exports.IYA_BookingDataManagement_BookingConfigs_DeleteConfig = 'IYA:BookingDataManagement:BookingConfigs:DeleteConfig';
module.exports.IYA_BookingDataManagement_BookingConfigs_DescribeOnboardingDetails = 'IYA:BookingDataManagement:BookingConfigs:DescribeOnboardingDetails';
module.exports.IYA_BookingDataManagement_BookingConfigs_DescribeSecrets = 'IYA:BookingDataManagement:BookingConfigs:DescribeSecrets';
module.exports.IYA_BookingDataManagement_BookingConfigs_DownloadSecrets = 'IYA:BookingDataManagement:BookingConfigs:DownloadSecrets';


// BOOKING DATA ACTIVITY
module.exports.IYA_BookingDataManagement_BookingActivity_FullAccess = 'IYA:BookingDataManagement:BookingActivity:*';
module.exports.IYA_BookingDataManagement_BookingActivity_ListActivity = 'IYA:BookingDataManagement:BookingActivity:ListActivity';
module.exports.IYA_BookingDataManagement_BookingActivity_DescribeActivity = 'IYA:BookingDataManagement:BookingActivity:DescribeActivity';


// BOOKING SUMMARY ACTIVITY
module.exports.IYA_BookingDataManagement_BookingSummaryActivity_FullAccess = 'IYA:BookingDataManagement:BookingSummaryActivity:*';
module.exports.IYA_BookingDataManagement_BookingSummaryActivity_ListActivity = 'IYA:BookingDataManagement:BookingSummaryActivity:ListActivity';
module.exports.IYA_BookingDataManagement_BookingSummaryActivity_DescribeActivity = 'IYA:BookingDataManagement:BookingSummaryActivity:DescribeActivity';


// BOOKING SUMMARY INSPECTION
module.exports.IYA_BookingDataManagement_BookingSummaryInspection_FullAccess = 'IYA:BookingDataManagement:BookingSummaryInspection:*';
module.exports.IYA_BookingDataManagement_BookingSummaryInspection_ListData = 'IYA:BookingDataManagement:BookingSummaryInspection:ListData';
module.exports.IYA_BookingDataManagement_BookingSummaryInspection_DescribeData = 'IYA:BookingDataManagement:BookingSummaryInspection:DescribeData';


// BOOKING DATA UPLOAD new
module.exports.IYA_BookingDataManagement_FileUploads_FullAccess = 'IYA:BookingDataManagement:FileUploads:*';
module.exports.IYA_BookingDataManagement_FileUploads_ListUploads = 'IYA:BookingDataManagement:FileUploads::ListUploads';
module.exports.IYA_BookingDataManagement_FileUploads_DescribeUpload = 'IYA:BookingDataManagement:FileUploads::DescribeUpload';
module.exports.IYA_BookingDataManagement_FileUploads_ViewUploadedFile = 'IYA:BookingDataManagement:FileUploads::ViewUploadedFile';
module.exports.IYA_BookingDataManagement_FileUploads_DownloadUploadedFile = 'IYA:BookingDataManagement:FileUploads::DownloadUploadedFile';
module.exports.IYA_BookingDataManagement_FileUploads_UploadFile = 'IYA:BookingDataManagement:FileUploads::UploadFile';

// BOOKING RAW DATA
module.exports.IYA_BookingDataManagement_RawData_FullAccess = 'IYA:BookingDataManagement:RawData:*';
module.exports.IYA_BookingDataManagement_RawData_ListReviews = 'IYA:BookingDataManagement:RawData:ListBookings';
module.exports.IYA_BookingDataManagement_RawData_DescribeReviews = 'IYA:BookingDataManagement:RawData:DescribeBooking';
module.exports.IYA_BookingDataManagement_RawData_ListReviewInsights = 'IYA:BookingDataManagement:RawData:ListBookingInsights';
module.exports.IYA_BookingDataManagement_RawData_DescribeReviewInsights = 'IYA:BookingDataManagement:RawData:DescribeBookingInsights';

// RATE SHOPPING DATA MANAGEMENT
module.exports.IYA_RateShoppingManagement_FullAccess = 'IYA:RateShoppingManagement:*';


// RATE SHOPPER SETUPS
module.exports.IYA_RateShoppingManagement_RateShopperSetups_FullAccess = 'IYA:RateShoppingManagement:RateShopperSetups:*';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_ListSetups = 'IYA:RateShoppingManagement:RateShopperSetups:ListSetups';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_DescribeSetup = 'IYA:RateShoppingManagement:RateShopperSetups:DescribeSetup';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_CreateSetup = 'IYA:RateShoppingManagement:RateShopperSetups:CreateSetup';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_EditSetup = 'IYA:RateShoppingManagement:RateShopperSetups:EditSetup';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_ActivateSetup = 'IYA:RateShoppingManagement:RateShopperSetups:ActivateSetup';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_RejectSetup = 'IYA:RateShoppingManagement:RateShopperSetups:RejectSetup';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_DisableSetup = 'IYA:RateShoppingManagement:RateShopperSetups:DisableSetup';
module.exports.IYA_RateShoppingManagement_RateShopperSetups_DeleteSetup = 'IYA:RateShoppingManagement:RateShopperSetups:DeleteSetup';


// RATE SHOPPER CONFIGS
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_FullAccess = 'IYA:RateShoppingManagement:RateShopperConfigs:*';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_ListConfigs = 'IYA:RateShoppingManagement:RateShopperConfigs:ListConfigs';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_DescribeConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:DescribeConfig';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_CreateConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:CreateConfig';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_ActivateConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:ActivateConfig';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_DisableConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:DisableConfig';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_RejectConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:RejectConfig';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_DeleteConfig = 'IYA:RateShoppingManagement:RateShopperConfigs:DeleteConfig';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_DescribeOnboardingDetails = 'IYA:RateShoppingManagement:RateShopperConfigs:DescribeOnboardingDetails';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_DescribeSecrets = 'IYA:RateShoppingManagement:RateShopperConfigs:DescribeSecrets';
module.exports.IYA_RateShoppingManagement_RateShopperConfigs_DownloadSecrets = 'IYA:RateShoppingManagement:RateShopperConfigs:DownloadSecrets';

// REVIEW AUTOMATION
module.exports.IYA_ReviewDataManagement_ReviewAutomation_FullAccess = 'IYA:ReviewDataManagement:ReviewAutomation:*';
module.exports.IYA_ReviewDataManagement_ReviewAutomation_SyncData = 'IYA:ReviewDataManagement:ReviewAutomation:SyncData';
module.exports.IYA_ReviewDataManagement_ReviewAutomation_CreateAutomation = 'IYA:ReviewDataManagement:ReviewAutomation:CreateAutomation';
module.exports.IYA_ReviewDataManagement_ReviewAutomation_ListAutomation = 'IYA:ReviewDataManagement:ReviewAutomation:ListAutomation';
module.exports.IYA_ReviewDataManagement_ReviewAutomation_DescribeAutomation = 'IYA:ReviewDataManagement:ReviewAutomation:DescribeAutomation';

// RATE SHOPPING ACTIVITY
module.exports.IYA_RateShoppingManagement_RateShoppingActivity_FullAccess = 'IYA:RateShoppingManagement:RateShoppingActivity:*';
module.exports.IYA_RateShoppingManagement_RateShoppingActivity_ListActivity = 'IYA:RateShoppingManagement:RateShoppingActivity:ListActivity';
module.exports.IYA_RateShoppingManagement_RateShoppingActivity_DescribeActivity = 'IYA:RateShoppingManagement:RateShoppingActivity:DescribeActivity';


// RATE SHOPPING INSPECTION
module.exports.IYA_RateShoppingManagement_RateShoppingInspection_FullAccess = 'IYA:RateShoppingManagement:RateShoppingInspection:*';
module.exports.IYA_RateShoppingManagement_RateShoppingInspection_ListData = 'IYA:RateShoppingManagement:RateShoppingInspection:ListData';
module.exports.IYA_RateShoppingManagement_RateShoppingInspection_DescribeData = 'IYA:RateShoppingManagement:RateShoppingInspection:DescribeData';

//RATE SHOPPING RAW DATA
module.exports.IYA_RateShoppingManagement_RawData_FullAccess = 'IYA:RateShoppingManagement:RawData:*';
module.exports.IYA_RateShoppingManagement_RawData_ListRateShopping = 'IYA:RateShoppingManagement:RawData:ListRateShopping';
module.exports.IYA_RateShoppingManagement_RawData_DescribeRateShopping = 'IYA:RateShoppingManagement:RawData:DescribeRateShopping';

// REVIEW SETUPS
module.exports.IYA_ReviewDataManagement_FullAccess = 'IYA:ReviewDataManagement:*';

module.exports.IYA_ReviewDataManagement_ReviewSetups_FullAccess = 'IYA:ReviewDataManagement:ReviewSetups:*';
module.exports.IYA_ReviewDataManagement_ReviewSetups_ListSetups = 'IYA:ReviewDataManagement:ReviewSetups:ListSetups';
module.exports.IYA_ReviewDataManagement_ReviewSetups_DescribeSetup = 'IYA:ReviewDataManagement:ReviewSetups:DescribeSetup';
module.exports.IYA_ReviewDataManagement_ReviewSetups_CreateSetup = 'IYA:ReviewDataManagement:ReviewSetups:CreateSetup';
module.exports.IYA_ReviewDataManagement_ReviewSetups_EditSetup = 'IYA:ReviewDataManagement:ReviewSetups:EditSetup';
module.exports.IYA_ReviewDataManagement_ReviewSetups_ActivateSetup = 'IYA:ReviewDataManagement:ReviewSetups:ActivateSetup';
module.exports.IYA_ReviewDataManagement_ReviewSetups_RejectSetup = 'IYA:ReviewDataManagement:ReviewSetups:RejectSetup';
module.exports.IYA_ReviewDataManagement_ReviewSetups_DisableSetup = 'IYA:ReviewDataManagement:ReviewSetups:DisableSetup';
module.exports.IYA_ReviewDataManagement_ReviewSetups_DeleteSetup = 'IYA:ReviewDataManagement:ReviewSetups:DeleteSetup';


// REVIEW CONFIGS
module.exports.IYA_ReviewDataManagement_ReviewConfigs_FullAccess = 'IYA:ReviewDataManagement:ReviewConfigs:*';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_ListConfigs = 'IYA:ReviewDataManagement:ReviewConfigs:ListConfigs';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_DescribeConfig = 'IYA:ReviewDataManagement:ReviewConfigs:DescribeConfig';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_CreateConfig = 'IYA:ReviewDataManagement:ReviewConfigs:CreateConfig';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_ActivateConfig = 'IYA:ReviewDataManagement:ReviewConfigs:ActivateConfig';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_DisableConfig = 'IYA:ReviewDataManagement:ReviewConfigs:DisableConfig';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_RejectConfig = 'IYA:ReviewDataManagement:ReviewConfigs:RejectConfig';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_DeleteConfig = 'IYA:ReviewDataManagement:ReviewConfigs:DeleteConfig';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_DescribeOnboardingDetails = 'IYA:ReviewDataManagement:ReviewConfigs:DescribeOnboardingDetails';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_DescribeSecrets = 'IYA:ReviewDataManagement:ReviewConfigs:DescribeSecrets';
module.exports.IYA_ReviewDataManagement_ReviewConfigs_DownloadSecrets = 'IYA:ReviewDataManagement:ReviewConfigs:DownloadSecrets';

// REVIEW INSIGHTS AUTOMATION
module.exports.IYA_ReviewDataManagement_ReviewInsightsAutomation_FullAccess = 'IYA:ReviewDataManagement:ReviewInsightsAutomation:*';
module.exports.IYA_ReviewDataManagement_ReviewInsightsAutomation_SyncData = 'IYA:ReviewDataManagement:ReviewInsightsAutomation:SyncData';
module.exports.IYA_ReviewDataManagement_ReviewInsightsAutomation_TriggerCalculation = 'IYA:ReviewDataManagement:ReviewInsightsAutomation:TriggerCalculation';
module.exports.IYA_ReviewDataManagement_ReviewInsightsAutomation_CreateAutomation = 'IYA:ReviewDataManagement:ReviewInsightsAutomation:CreateAutomation';
module.exports.IYA_ReviewDataManagement_ReviewInsightsAutomation_ListAutomation = 'IYA:ReviewDataManagement:ReviewInsightsAutomation:ListAutomation';
module.exports.IYA_ReviewDataManagement_ReviewInsightsAutomation_DescribeAutomation = 'IYA:ReviewDataManagement:ReviewInsightsAutomation:DescribeAutomation';

// REVIEW ACTIVITY
module.exports.IYA_ReviewDataManagement_ReviewActivity_FullAccess = 'IYA:ReviewDataManagement:ReviewActivity:*';
module.exports.IYA_ReviewDataManagement_ReviewActivity_ListActivity = 'IYA:ReviewDataManagement:ReviewActivity:ListActivity';
module.exports.IYA_ReviewDataManagement_ReviewActivity_DescribeActivity = 'IYA:ReviewDataManagement:ReviewActivity:DescribeActivity';


// REVIEW SUMMARY ACTIVITY
module.exports.IYA_ReviewDataManagement_ReviewSummaryActivity_FullAccess = 'IYA:ReviewDataManagement:ReviewSummaryActivity:*';
module.exports.IYA_ReviewDataManagement_ReviewSummaryActivity_ListActivity = 'IYA:ReviewDataManagement:ReviewSummaryActivity:ListActivity';
module.exports.IYA_ReviewDataManagement_ReviewSummaryActivity_DescribeActivity = 'IYA:ReviewDataManagement:ReviewSummaryActivity:DescribeActivity';

// REVIEW RAW DATA
module.exports.IYA_ReviewDataManagement_RawData_FullAccess = 'IYA:ReviewDataManagement:RawData:*';
module.exports.IYA_ReviewDataManagement_RawData_ListReviews = 'IYA:ReviewDataManagement:RawData:ListReviews';
module.exports.IYA_ReviewDataManagement_RawData_DescribeReviews = 'IYA:ReviewDataManagement:RawData:DescribeReviews';
module.exports.IYA_ReviewDataManagement_RawData_ListReviewInsights = 'IYA:ReviewDataManagement:RawData:ListReviewInsights';
module.exports.IYA_ReviewDataManagement_RawData_DescribeReviewInsights = 'IYA:ReviewDataManagement:RawData:DescribeReviewInsights';

// RATE SHOPPING AUTOMATION
module.exports.IYA_RateShoppingManagement_RateShoppingAutomation_FullAccess = 'IYA:RateShoppingManagement:RateShoppingAutomation:*';
module.exports.IYA_RateShoppingManagement_RateShoppingAutomation_ListAutomation = 'IYA:RateShoppingManagement:RateShoppingAutomation:ListAutomation';
module.exports.IYA_RateShoppingManagement_RateShoppingAutomation_DescribeAutomation = 'IYA:RateShoppingManagement:RateShoppingAutomation:DescribeAutomation';
module.exports.IYA_RateShoppingManagement_RateShoppingAutomation_CreateAutomation = 'IYA:RateShoppingManagement:RateShoppingAutomation:CreateAutomation';
module.exports.IYA_RateShoppingManagement_RateShoppingAutomation_OnDemandShopping = 'IYA:RateShoppingManagement:RateShoppingAutomation:OnDemandShopping';
// BOOKING DATA AUTOMATION
module.exports.IYA_BookingDataManagement_BookingDataAutomation_FullAccess = 'IYA:BookingDataManagement:BookingDataAutomation:*';
module.exports.IYA_BookingDataManagement_BookingDataAutomation_SyncData = 'IYA:BookingDataManagement:BookingDataAutomation:SyncData';
module.exports.IYA_BookingDataManagement_BookingDataAutomation_CreateAutomation = 'IYA:BookingDataManagement:BookingDataAutomation:CreateAutomation';
module.exports.IYA_BookingDataManagement_BookingDataAutomation_ListAutomation = 'IYA:BookingDataManagement:BookingDataAutomation:ListAutomation';
module.exports.IYA_BookingDataManagement_BookingDataAutomation_DescribeAutomation = 'IYA:BookingDataManagement:BookingDataAutomation:DescribeAutomation';

// BOOKING INSIGHTS AUTOMATION
module.exports.IYA_BookingDataManagement_BookingInsightsAutomation_FullAccess = 'IYA:BookingDataManagement:BookingInsightsAutomation:*';
module.exports.IYA_BookingDataManagement_BookingInsightsAutomation_SyncData = 'IYA:BookingDataManagement:BookingInsightsAutomation:SyncData';
module.exports.IYA_BookingDataManagement_BookingInsightsAutomation_TriggerCalculation = 'IYA:BookingDataManagement:BookingInsightsAutomation:TriggerCalculation';
module.exports.IYA_BookingDataManagement_BookingInsightsAutomation_CreateAutomation = 'IYA:BookingDataManagement:BookingInsightsAutomation:CreateAutomation';
module.exports.IYA_BookingDataManagement_BookingInsightsAutomation_ListAutomation = 'IYA:BookingDataManagement:BookingInsightsAutomation:ListAutomation';
module.exports.IYA_BookingDataManagement_BookingInsightsAutomation_DescribeAutomation = 'IYA:BookingDataManagement:BookingInsightsAutomation:DescribeAutomation';

// COMPSETS
module.exports.IYA_CompsetManagement_FullAccess = 'IYA:CompsetManagement:*';

module.exports.IYA_CompsetManagement_Compsets_FullAccess = 'IYA:CompsetManagement:Compsets:*';
module.exports.IYA_CompsetManagement_Compsets_ListSetups = 'IYA:CompsetManagement:Compsets:ListSetups';
module.exports.IYA_CompsetManagement_Compsets_DescribeSetup = 'IYA:CompsetManagement:Compsets:DescribeSetup';
module.exports.IYA_CompsetManagement_Compsets_CreateSetup = 'IYA:CompsetManagement:Compsets:CreateSetup';
module.exports.IYA_CompsetManagement_Compsets_EditSetup = 'IYA:CompsetManagement:Compsets:EditSetup';
module.exports.IYA_CompsetManagement_Compsets_ActivateSetup = 'IYA:CompsetManagement:Compsets:ActivateSetup';
module.exports.IYA_CompsetManagement_Compsets_RejectSetup = 'IYA:CompsetManagement:Compsets:RejectSetup';
module.exports.IYA_CompsetManagement_Compsets_DisableSetup = 'IYA:CompsetManagement:Compsets:DisableSetup';
module.exports.IYA_CompsetManagement_Compsets_DeleteSetup = 'IYA:CompsetManagement:Compsets:DeleteSetup';


// PROPERTY DEMAND SETUP
module.exports.IYA_DemandManagement_FullAccess = 'IYA:DemandManagement:*';

module.exports.IYA_DemandManagement_PropertyDemandSetups_FullAccess = 'IYA:DemandManagement:PropertyDemandSetups:*';
module.exports.IYA_DemandManagement_PropertyDemandSetups_ListSetups = 'IYA:DemandManagement:PropertyDemandSetups:ListSetups';
module.exports.IYA_DemandManagement_PropertyDemandSetups_DescribeSetup = 'IYA:DemandManagement:PropertyDemandSetups:DescribeSetup';
module.exports.IYA_DemandManagement_PropertyDemandSetups_CreateSetup = 'IYA:DemandManagement:PropertyDemandSetups:CreateSetup';
module.exports.IYA_DemandManagement_PropertyDemandSetups_EditSetup = 'IYA:DemandManagement:PropertyDemandSetups:EditSetup';
module.exports.IYA_DemandManagement_PropertyDemandSetups_ActivateSetup = 'IYA:DemandManagement:PropertyDemandSetups:ActivateSetup';
module.exports.IYA_DemandManagement_PropertyDemandSetups_RejectSetup = 'IYA:DemandManagement:PropertyDemandSetups:RejectSetup';
module.exports.IYA_DemandManagement_PropertyDemandSetups_DisableSetup = 'IYA:DemandManagement:PropertyDemandSetups:DisableSetup';
module.exports.IYA_DemandManagement_PropertyDemandSetups_DeleteSetup = 'IYA:DemandManagement:PropertyDemandSetups:DeleteSetup';


// DEMAND ACTIVITY new
module.exports.IYA_DemandManagement_PropertyDemandActivity_FullAccess = 'IYA:DemandManagement:PropertyDemandActivity:*';
module.exports.IYA_DemandManagement_PropertyDemandActivity_ListActivity = 'IYA:DemandManagement:PropertyDemandActivity:ListActivity';
module.exports.IYA_DemandManagement_PropertyDemandActivity_DescribeActivity = 'IYA:DemandManagement:PropertyDemandActivity:DescribeActivity';


// PROPERTY DATA UPLOAD new
module.exports.IYA_DemandManagement_FileUploads_FullAccess = 'IYA:DemandManagement:FileUploads:*';
module.exports.IYA_DemandManagement_FileUploads_ListUploads = 'IYA:DemandManagement:FileUploads::ListUploads';
module.exports.IYA_DemandManagement_FileUploads_DescribeUpload = 'IYA:DemandManagement:FileUploads::DescribeUpload';
module.exports.IYA_DemandManagement_FileUploads_ViewUploadedFile = 'IYA:DemandManagement:FileUploads::ViewUploadedFile';
module.exports.IYA_DemandManagement_FileUploads_DownloadUploadedFile = 'IYA:DemandManagement:FileUploads::DownloadUploadedFile';
module.exports.IYA_DemandManagement_FileUploads_UploadFile = 'IYA:DemandManagement:FileUploads::UploadFile';
// PROPERTY DEMAND RAW DATA
module.exports.IYA_DemandManagement_RawData_FullAccess = 'IYA:DemandManagement:RawData:*';
module.exports.IYA_DemandManagement_RawData_ListPropertyDemand = 'IYA:DemandManagement:RawData:ListPropertyDemand';
module.exports.IYA_DemandManagement_RawData_DescribePropertyDemand = 'IYA:DemandManagement:RawData:DescribePropertyDemand';


// PROPERTY VARIABLES SETUP
module.exports.IYA_PropertyVariablesSetup_FullAccess = 'IYA:PropertyVariablesSetup:*';
module.exports.IYA_PropertyVariablesSetup_ListSetups = 'IYA:PropertyVariablesSetup:ListSetups';
module.exports.IYA_PropertyVariablesSetup_DescribeSetup = 'IYA:PropertyVariablesSetup:DescribeSetup';
module.exports.IYA_PropertyVariablesSetup_CreateSetup = 'IYA:PropertyVariablesSetup:CreateSetup';
module.exports.IYA_PropertyVariablesSetup_EditSetup = 'IYA:PropertyVariablesSetup:EditSetup';
module.exports.IYA_PropertyVariablesSetup_ActivateSetup = 'IYA:PropertyVariablesSetup:ActivateSetup';
module.exports.IYA_PropertyVariablesSetup_RejectSetup = 'IYA:PropertyVariablesSetup:RejectSetup';
module.exports.IYA_PropertyVariablesSetup_DisableSetup = 'IYA:PropertyVariablesSetup:DisableSetup';
module.exports.IYA_PropertyVariablesSetup_DeleteSetup = 'IYA:PropertyVariablesSetup:DeleteSetup';
module.exports.IYA_EventDataManagement_FullAccess = 'IYA:EventDataManagement:FullAccess';
module.exports.IYA_EventDataManagement_EventSetups_FullAccess = 'IYA:EventDataManagement:EventSetups:FullAccess';
module.exports.IYA_EventDataManagement_EventSetups_ListSetups = 'IYA:EventDataManagement:EventSetups:ListSetups';
module.exports.IYA_EventDataManagement_EventSetups_DescribeSetup = 'IYA:EventDataManagement:EventSetups:DescribeSetup';
module.exports.IYA_EventDataManagement_EventSetups_CreateSetup = 'IYA:EventDataManagement:EventSetups:CreateSetup';
module.exports.IYA_EventDataManagement_EventSetups_EditSetup = 'IYA:EventDataManagement:EventSetups:EditSetup';
module.exports.IYA_EventDataManagement_EventSetups_ActivateSetup = 'IYA:EventDataManagement:EventSetups:ActivateSetup';
module.exports.IYA_EventDataManagement_EventSetups_RejectSetup = 'IYA:EventDataManagement:EventSetups:RejectSetup';
module.exports.IYA_EventDataManagement_EventSetups_DisableSetup = 'IYA:EventDataManagement:EventSetups:DisableSetup';

module.exports.IYA_EventDataManagement_RawData_FullAccess = 'IYA:EventDataManagement:RawData:*';
module.exports.IYA_EventDataManagement_RawData_ListEvents = 'IYA:EventDataManagement:RawData:ListEvents';
module.exports.IYA_EventDataManagement_RawData_DescribeEvent = 'IYA:EventDataManagement:RawData:DescribeEvent';
module.exports.IYA_EventDataManagement_RawData_ListVenues = 'IYA:EventDataManagement:RawData:ListVenues';
module.exports.IYA_EventDataManagement_RawData_DescribeVenue = 'IYA:EventDataManagement:DescribeEvent:DescribeVenue';
module.exports.IYA_EventDataManagement_Reports_FullAccess = 'IYA:EventDataManagement:Reports:*';
module.exports.IYA_EventDataManagement_Reports_ViewReports = 'IYA:EventDataManagement:Reports:ViewReports';
module.exports.IYA_EventDataManagement_Reports_DownloadReports = 'IYA:EventDataManagement:Reports:DownloadReports';
module.exports.IYA_EventDataManagement_EventActivity_FullAccess = 'IYA:EventDataManagement:EventActivity:*';
module.exports.IYA_EventDataManagement_EventActivity_ListActivity = 'IYA:EventDataManagement:EventActivity:ListActivity';
module.exports.IYA_EventDataManagement_EventActivity_DescribeActivity = 'IYA:EventDataManagement:EventActivity:DescribeActivity';
module.exports.IYA_EventDataManagement_VenueActivity_FullAccess = 'IYA:EventDataManagement:VenueActivity:*';
module.exports.IYA_EventDataManagement_VenueActivity_ListActivity = 'IYA:EventDataManagement:VenueActivity:ListActivity';
module.exports.IYA_EventDataManagement_VenueActivity_DescribeActivity = 'IYA:EventDataManagement:VenueActivity:DescribeActivity';
module.exports.IYA_EventDataManagement_Automation_FullAccess = 'IYA:EventDataManagement:Automation:*';
module.exports.IYA_EventDataManagement_Automation_ViewAutomation = 'IYA:EventDataManagement:Automation:ViewAutomation';
module.exports.IYA_EventDataManagement_Automation_CreateAutomation = 'IYA:EventDataManagement:Automation:CreateAutomation';
module.exports.IYA_EventDataManagement_Automation_UpdateAutomation = 'IYA:EventDataManagement:Automation:UpdateAutomation';
module.exports.IYA_EventDataManagement_Automation_RemoveAutomation = 'IYA:EventDataManagement:Automation:RemoveAutomation';

// PROPERTY DEMAND SETUP
module.exports.IYA_Automation_FullAccess = 'IYA:Automation:*';
module.exports.IYA_Automation_ListRoutines = 'IYA:Automation:ListRoutines';
module.exports.IYA_Automation_DescribeRoutine = 'IYA:Automation:DescribeRoutine';
module.exports.IYA_Automation_ListTasks = 'IYA:Automation:ListTasks';
module.exports.IYA_Automation_DescribeTask = 'IYA:Automation:DescribeTask';
module.exports.IYA_Automation_ListTaskAttempts = 'IYA:Automation:ListTaskAttempts';
module.exports.IYA_Automation_DescribeTaskAttempt = 'IYA:Automation:DescribeTaskAttempt';


// INTELLIGENCE
module.exports.IYA_Intelligence_FullAccess = 'IYA:Intelligence:*';
module.exports.IYA_Intelligence_ListSetups = 'IYA:Intelligence:ListSetups';
module.exports.IYA_Intelligence_DescribeSetup = 'IYA:Intelligence:DescribeSetup';
module.exports.IYA_Intelligence_CreateSetup = 'IYA:Intelligence:CreateSetup';
module.exports.IYA_Intelligence_EditSetup = 'IYA:Intelligence:EditSetup';
module.exports.IYA_Intelligence_DisableSetup = 'IYA:Intelligence:DisableSetup';
module.exports.IYA_Intelligence_ActivateSetup = 'IYA:Intelligence:ActivateSetup';
module.exports.IYA_Intelligence_RejectSetup = 'IYA:Intelligence:RejectSetup';
module.exports.IYA_Intelligence_DeleteSetup = 'IYA:Intelligence:DeleteSetup';


// API LOGS
module.exports.IYA_ApiLogs_FullAccess = 'IYA:ApiLogs:*';
module.exports.IYA_ApiLogs_ListLogs = 'IYA:ApiLogs:ListLogs';
module.exports.IYA_ApiLogs_DescribeLog = 'IYA:ApiLogs:DescribeLog';
module.exports.IYA_ApiLogs_DownloadRequestData = 'IYA:ApiLogs:DownloadRequestData';


// VENDOR
module.exports.IYA_VendorManagement_FullAccess = 'IYA:VendorManagement:*';

module.exports.IYA_VendorManagement_AiRateMetrics_FullAccess = 'IYA:VendorManagement:AiRateMetrics:*';
module.exports.IYA_VendorManagement_AiRateMetrics_ListRateShops = 'IYA:VendorManagement:AiRateMetrics:ListRateShops';
module.exports.IYA_VendorManagement_AiRateMetrics_DescribeRateShop = 'IYA:VendorManagement:AiRateMetrics:DescribeRateShop';
module.exports.IYA_VendorManagement_AiRateMetrics_ListRateQueues = 'IYA:VendorManagement:AiRateMetrics:ListRateQueues';
module.exports.IYA_VendorManagement_AiRateMetrics_DescribeRateSQueue = 'IYA:VendorManagement:AiRateMetrics:DescribeRateSQueue';
module.exports.IYA_VendorManagement_AiRateMetrics_ListRateQueueData = 'IYA:VendorManagement:AiRateMetrics:ListRateQueueData';
module.exports.IYA_VendorManagement_AiRateMetrics_DescribeRatesQueueData = 'IYA:VendorManagement:AiRateMetrics:DescribeRatesQueueData';
module.exports.IYA_VendorManagement_AiRateMetrics_SearchHotel = 'IYA:VendorManagement:AiRateMetrics:SearchHotel';
module.exports.IYA_VendorManagement_AiRateMetrics_ViewAccountCredits = 'IYA:VendorManagement:AiRateMetrics:ViewAccountCredits';
module.exports.IYA_VendorManagement_AiRateMetrics_GetQueueStatus = 'IYA:VendorManagement:AiRateMetrics:GetQueueStatus';
module.exports.IYA_VendorManagement_AiRateMetrics_ViewReferenceContent = 'IYA:VendorManagement:AiRateMetrics:ViewReferenceContent';

module.exports.IYA_VendorManagement_AiReviews_FullAccess = 'IYA:VendorManagement:AiReviews:*';
module.exports.IYA_VendorManagement_AiReviews_SearchHotel = 'IYA:VendorManagement:SearchHotel:SearchHotel';
module.exports.IYA_VendorManagement_AiReviews_RequestHotel = 'IYA:VendorManagement:RequestHotel:RequestHotel';
