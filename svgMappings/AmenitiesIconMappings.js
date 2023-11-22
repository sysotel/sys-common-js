function AmenityIcon(amenityName, color = "#000", width = 24, height = 24) {
    const iconSet = {
        "PROPERTY:BASIC_FACILITIES:ELEVATOR": require('../assets/amenitiesIcons/Elevator.svg'),
        "PROPERTY:BASIC_FACILITIES:AC": require('../assets/amenitiesIcons/AcUnit.svg'),
        "PROPERTY:BASIC_FACILITIES:DRY_CLEANING_SERVICES": require('../assets/amenitiesIcons/DryCleaning.svg'),
        "PROPERTY:BASIC_FACILITIES:HOUSEKEEPING": require('../assets/amenitiesIcons/Countertops.svg'),
        "PROPERTY:BASIC_FACILITIES:INTERCOM": require('../assets/amenitiesIcons/Devices.svg'),
        // "PROPERTY:BASIC_FACILITIES:IRONING_SERVICES": require('../assets/amenitiesIcons/Iron.svg'),
        // "PROPERTY:BASIC_FACILITIES:BATHROOM": require('../assets/amenitiesIcons/Bathroom.svg'),
        "PROPERTY:BASIC_FACILITIES:LAN": require('../assets/amenitiesIcons/Lan.svg'),
        "PROPERTY:BASIC_FACILITIES:NEWSPAPER": require('../assets/amenitiesIcons/Newspaper.svg'),
        "PROPERTY:BASIC_FACILITIES:PARKING": require('../assets/amenitiesIcons/LocalParking.svg'),
        "PROPERTY:BASIC_FACILITIES:POWER_BACKUP": require('../assets/amenitiesIcons/BatteryChargingFull.svg'),
        "PROPERTY:BASIC_FACILITIES:REFRIGERATOR": require('../assets/amenitiesIcons/Kitchen.svg'),
        // "PROPERTY:BASIC_FACILITIES:SMOKE_DETECTOR": require('../assets/amenitiesIcons/Upcoming.svg'),
        "PROPERTY:BASIC_FACILITIES:SMOKING_ROOM": require('../assets/amenitiesIcons/SmokingRooms.svg'),
        "PROPERTY:BASIC_FACILITIES:SW": require('../assets/amenitiesIcons/Pool.svg'),
        "PROPERTY:BASIC_FACILITIES:TE": require('../assets/amenitiesIcons/Telephone.svg'),
        // "PROPERTY:BASIC_FACILITIES:TO": require('../assets/amenitiesIcons/FlashlightOn.svg'),
        "PROPERTY:BASIC_FACILITIES:UM": require('../assets/amenitiesIcons/BeachAccess.svg'),
        "PROPERTY:BASIC_FACILITIES:WASHING_MACHINE": require('../assets/amenitiesIcons/LocalLaundryService.svg'),
        "PROPERTY:BASIC_FACILITIES:WI": require('../assets/amenitiesIcons/Wifi.svg'),
        "PROPERTY:BASIC_FACILITIES:PUBLIC_RESTROOMS": require('../assets/amenitiesIcons/Wc.svg'),
        "PROPERTY:BASIC_FACILITIES:LA": require('../assets/amenitiesIcons/ViewStream.svg'),
        "PROPERTY:BASIC_FACILITIES:VENDING_MACHINE": require('../assets/amenitiesIcons/VendingMachine.svg'),
        "PROPERTY:BASIC_FACILITIES:PRIVATE_ENTRANCE": require('../assets/amenitiesIcons/MeetingRoom.svg'),
        "PROPERTY:BASIC_FACILITIES:SA": require('../assets/amenitiesIcons/CleanHands.svg'),
        "PROPERTY:BASIC_FACILITIES:EV_CHARGING_STATION": require('../assets/amenitiesIcons/EvStation.svg'),
        // "PROPERTY:GENERAL_SERVICES:BELLBOY_SERVICE": require('../assets/amenitiesIcons/SettingsAccessibility.svg'),
        "PROPERTY:GENERAL_SERVICES:CA": require('../assets/amenitiesIcons/WheelchairPickup.svg'),
        "PROPERTY:GENERAL_SERVICES:CO": require('../assets/amenitiesIcons/Concierge.svg'),
        "PROPERTY:GENERAL_SERVICES:MULTILANGUAL_STAFF": require('../assets/amenitiesIcons/MultiLangualStaff.svg'),
        "PROPERTY:GENERAL_SERVICES:LUGGAGE_ASSISTANCE": require('../assets/amenitiesIcons/LuggageStaff.svg'),
        "PROPERTY:GENERAL_SERVICES:LUGGAGE_STORAGE": require('../assets/amenitiesIcons/LuggageStorage.svg'),
        "PROPERTY:GENERAL_SERVICES:MA": require('../assets/amenitiesIcons/Markunread.svg'),
        "PROPERTY:GENERAL_SERVICES:SPECIALLY_ABLED_ASSITANCE": require('../assets/amenitiesIcons/Accessible.svg'),
        "PROPERTY:GENERAL_SERVICES:ELECTRICAL_SOCKETS": require('../assets/amenitiesIcons/Power.svg'),
        "PROPERTY:GENERAL_SERVICES:POSTAL_SERVICES": require('../assets/amenitiesIcons/ForwardToInbox.svg'),
        "PROPERTY:GENERAL_SERVICES:BUTLER_SERVICES": require('../assets/amenitiesIcons/FoodServe.svg'),
        "PROPERTY:GENERAL_SERVICES:DO": require('../assets/amenitiesIcons/Mediation.svg'),
        "PROPERTY:GENERAL_SERVICES:ME": require('../assets/amenitiesIcons/LocalPharmacy.svg'),
        "PROPERTY:GENERAL_SERVICES:TICKET_TOUR_ASSISTANCE": require('../assets/amenitiesIcons/FollowTheSigns.svg'),
        "PROPERTY:GENERAL_SERVICES:POOL_BEACH_TOWELS": require('../assets/amenitiesIcons/BeachTowel.svg'),
        "PROPERTY:GENERAL_SERVICES:WE": require('../assets/amenitiesIcons/AllInbox.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BEACH": require('../assets/amenitiesIcons/WbSunny.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BOAT_RIDE": require('../assets/amenitiesIcons/Rowing.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BONFIRE": require('../assets/amenitiesIcons/LocalFireDepartment.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:GOLF": require('../assets/amenitiesIcons/GolfCourse.svg'),
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:KAYAKS": require('../assets/amenitiesIcons/Sailing.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:CRICKET": require('../assets/amenitiesIcons/SportsCricket.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:VOLLEYBALL": require('../assets/amenitiesIcons/SportsVolleyball.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BASKETBALL": require('../assets/amenitiesIcons/SportsBasketball.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:TENNIS": require('../assets/amenitiesIcons/SportsTennis.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BADMINTON": require('../assets/amenitiesIcons/Badminton.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:CHILREND_PARK": require('../assets/amenitiesIcons/ChildrenPark.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:ROCK_CLIMBING": require('../assets/amenitiesIcons/RockClimbing.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:ARCHERY": require('../assets/amenitiesIcons/Archery.svg'),
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:HIKING": require('../assets/amenitiesIcons/Hiking.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:SQUASH": require('../assets/amenitiesIcons/SportsHandball.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:TELESCOPE": require('../assets/amenitiesIcons/Telescope.svg'),
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:WATER_SPORTS": require('../assets/amenitiesIcons/Kayaking.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:VEHICAL_RENTALS": require('../assets/amenitiesIcons/CarRental.svg'),
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:CANOEING": require('../assets/amenitiesIcons/Kitesurfing.svg'),
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:SKIING": require('../assets/amenitiesIcons/DownhillSkiing.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:JUNGLE_SAFARI": require('../assets/amenitiesIcons/JungleSafari.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:JUNGLE_TOURS_AND_TREKS": require('../assets/amenitiesIcons/JungleTour.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPOR": require('../assets/amenitiesIcons/DirectionsBike.svg'),
        "PROPERTY:COMMON_AREA:AQUARIUM": require('../assets/amenitiesIcons/Aquarium.svg'),
        // "PROPERTY:COMMON_AREA:BALCONY": require('../assets/amenitiesIcons/Balcony.svg'),
        "PROPERTY:COMMON_AREA:FIREPLACE": require('../assets/amenitiesIcons/Whatshot.svg'),
        "PROPERTY:COMMON_AREA:LAWN": require('../assets/amenitiesIcons/Grass.svg'),
        "PROPERTY:COMMON_AREA:LIBRARY": require('../assets/amenitiesIcons/MenuBook.svg'),
        "PROPERTY:COMMON_AREA:LOUNGE": require('../assets/amenitiesIcons/Chair.svg'),
        "PROPERTY:COMMON_AREA:RECEPTION": require('../assets/amenitiesIcons/Reception.svg'),
        "PROPERTY:COMMON_AREA:SEARING_AREA": require('../assets/amenitiesIcons/AirlineSeatReclineNormal.svg'),
        "PROPERTY:COMMON_AREA:SUN_DECK": require('../assets/amenitiesIcons/ChairDeck.svg'),
        "PROPERTY:COMMON_AREA:TEMPLE_CHAPEL": require('../assets/amenitiesIcons/TempleChappel.svg'),
        // "PROPERTY:COMMON_AREA:VERANDAH": require('../assets/amenitiesIcons/Balcony.svg'),
        "PROPERTY:COMMON_AREA:JACUZZI": require('../assets/amenitiesIcons/Bathtub.svg'),
        "PROPERTY:COMMON_AREA:PRAYER_ROOM": require('../assets/amenitiesIcons/Prayer.svg'),
        "PROPERTY:COMMON_AREA:LIVING_ROOM": require('../assets/amenitiesIcons/Weekend.svg'),
        "PROPERTY:COMMON_AREA:OUTDOOR_FURNITURE": require('../assets/amenitiesIcons/Deck.svg'),
        "PROPERTY:COMMON_AREA:PICNIC_AREA": require('../assets/amenitiesIcons/PicnicArea.svg'),
        "PROPERTY:COMMON_AREA:GAME_ROOM": require('../assets/amenitiesIcons/SportsEsports.svg'),
        "PROPERTY:COMMON_AREA:SITOUT_AREA": require('../assets/amenitiesIcons/Deck.svg'),
        "PROPERTY:COMMON_AREA:TV_AREA": require('../assets/amenitiesIcons/Tv.svg'),
        "PROPERTY:COMMON_AREA:BONFIRE_PIT": require('../assets/amenitiesIcons/Bonfire.svg'),
        "PROPERTY:FOOD_DRINKS:BAR": require('../assets/amenitiesIcons/LocalBar.svg'),
        "PROPERTY:FOOD_DRINKS:BARBEQUUE": require('../assets/amenitiesIcons/OutdoorGrill.svg'),
        "PROPERTY:FOOD_DRINKS:CAFE": require('../assets/amenitiesIcons/LocalCafe.svg'),
        "PROPERTY:FOOD_DRINKS:COFFEE_SHOP": require('../assets/amenitiesIcons/Storefront.svg'),
        "PROPERTY:FOOD_DRINKS:DINING_AREA": require('../assets/amenitiesIcons/DiningArea.svg'),
        "PROPERTY:FOOD_DRINKS:RESTAURANT": require('../assets/amenitiesIcons/Restaurant.svg'),
        "PROPERTY:FOOD_DRINKS:BAKERY": require('../assets/amenitiesIcons/BakeryDining.svg'),
        "PROPERTY:BEAUTY_AND_SPA:HAIR_TREATMENTS": require('../assets/amenitiesIcons/HairTreatment.svg'),
        "PROPERTY:BEAUTY_AND_SPA:MANICURE_PEDICURE": require('../assets/amenitiesIcons/ManicurePedicure.svg'),
        "PROPERTY:BEAUTY_AND_SPA:MASSAGE": require('../assets/amenitiesIcons/Massage.svg'),
        "PROPERTY:BEAUTY_AND_SPA:SALON": require('../assets/amenitiesIcons/Salon.svg'),
        "PROPERTY:BEAUTY_AND_SPA:SPA": require('../assets/amenitiesIcons/Spa.svg'),
        "PROPERTY:BEAUTY_AND_SPA:STEAM_AND_SAUNA": require('../assets/amenitiesIcons/SteamAndSauna.svg'),
        "PROPERTY:BEAUTY_AND_SPA:OPEN_AIR_BATH": require('../assets/amenitiesIcons/Bathtub.svg'),
        "PROPERTY:BEAUTY_AND_SPA:PUBLIC_BATH": require('../assets/amenitiesIcons/PubliceBath.svg'),
        "PROPERTY:BEAUTY_AND_SPA:HAMMAM": require('../assets/amenitiesIcons/Hammam.svg'),
        "PROPERTY:SECURITY:BODYGUARDS": require('../assets/amenitiesIcons/Bodyguards.svg'),
        "PROPERTY:SECURITY:ELECTRONIC_KEYCARD": require('../assets/amenitiesIcons/Payment.svg'),
        "PROPERTY:SECURITY:EMERGENCY_EXIT_MAP": require('../assets/amenitiesIcons/ExitMap.svg'),
        "PROPERTY:SECURITY:SAFE": require('../assets/amenitiesIcons/Wash.svg'),
        "PROPERTY:SECURITY:CCTV": require('../assets/amenitiesIcons/Cctv.svg'),
        "PROPERTY:SECURITY:FIRE_EXTINGUISHERS": require('../assets/amenitiesIcons/FireExtinguisher.svg'),
        "PROPERTY:SECURITY:SAFETY_SECURITY": require('../assets/amenitiesIcons/Security.svg'),
        "PROPERTY:SECURITY:SECURITY_ALARMS": require('../assets/amenitiesIcons/SecurityAlarm.svg'),
        "PROPERTY:SECURITY:SMOKE_ALARMS": require('../assets/amenitiesIcons/FireAlarm.svg'),
        "PROPERTY:SECURITY:SMART_DOOR_LOCK": require('../assets/amenitiesIcons/SmartDoorLock.svg'),
        "PROPERTY:SECURITY:FIRE_ALARM": require('../assets/amenitiesIcons/FireAlarm.svg'),
        "PROPERTY:SECURITY:SECURITY_GUARD": require('../assets/amenitiesIcons/securityGuard.svg'),
        "PROPERTY:SECURITY:CARBON_MONOXIDE_DETECTOR": require('../assets/amenitiesIcons/CarbonMonoxideDetector.svg'),
        "PROPERTY:SECURITY:ACCESS_CONTROL_SYSTEM": require('../assets/amenitiesIcons/AccessControl.svg'),
        // "PROPERTY:TRANSFERS:AIRPORT_TRANSFERS": require('../assets/amenitiesIcons/ConnectingAirportsIcon.svg'),
        "PROPERTY:TRANSFERS:PICKUP_DROP": require('../assets/amenitiesIcons/LocalTaxi.svg'),
        "PROPERTY:TRANSFERS:SHUTTLE_SERVICE": require('../assets/amenitiesIcons/AirportShuttle.svg'),
        "PROPERTY:TRANSFERS:RAILWAY_STATION_TRANSFERS": require('../assets/amenitiesIcons/DirectionsTransit.svg'),
        "PROPERTY:TRANSFERS:BUS_STATION_TRANSFERS": require('../assets/amenitiesIcons/DirectionsBus.svg'),
        "PROPERTY:TRANSFERS:PUBLIC_TRANSIT_TICKETS": require('../assets/amenitiesIcons/ConfirmationNumber.svg'),
        "PROPERTY:ENTERTAINMENT:MOVIE_ROOM": require('../assets/amenitiesIcons/Theaters.svg'),
        "PROPERTY:ENTERTAINMENT:HOME_THEATRE": require('../assets/amenitiesIcons/HomeTheatre.svg'),
        "PROPERTY:ENTERTAINMENT:MUSIC_SYSTEM": require('../assets/amenitiesIcons/PlayArrow.svg'),
        "PROPERTY:ENTERTAINMENT:EVENTS": require('../assets/amenitiesIcons/Events.svg'),
        "PROPERTY:ENTERTAINMENT:PUB": require('../assets/amenitiesIcons/SportsBar.svg'),
        "PROPERTY:ENTERTAINMENT:RADIO": require('../assets/amenitiesIcons/Radio.svg'),
        "PROPERTY:ENTERTAINMENT:PHOTO_SESSION": require('../assets/amenitiesIcons/CameraAlt.svg'),
        "PROPERTY:ENTERTAINMENT:NIGHT_CLUB": require('../assets/amenitiesIcons/Liquor.svg'),
        "PROPERTY:ENTERTAINMENT:BEACH_CLUB": require('../assets/amenitiesIcons/BeachClub.svg'),
        "PROPERTY:PAYMENT_SERVICES:ATM": require('../assets/amenitiesIcons/Atm.svg'),
        // "PROPERTY:PAYMENT_SERVICES:CURRENCY_EXCHANGE": require('../assets/amenitiesIcons/CurrencyExchangeIcon.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:CASINO": require('../assets/amenitiesIcons/Casino.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:POOL_TABLE": require('../assets/amenitiesIcons/PoolTable.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:TABLE_TENNIS": require('../assets/amenitiesIcons/TableTennis.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:CHESS": require('../assets/amenitiesIcons/Chess.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:CARROM_BOARD": require('../assets/amenitiesIcons/Carrom.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:FOOSBALL": require('../assets/amenitiesIcons/SportsSoccer.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:PUZZLES": require('../assets/amenitiesIcons/Extension.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:BOWLING": require('../assets/amenitiesIcons/Bowling.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:DART": require('../assets/amenitiesIcons/Dart.svg'),
        "PROPERTY:FAMILY_AND_KIDS:BABYSITTING": require('../assets/amenitiesIcons/BabyChangingStation.svg'),
        "PROPERTY:FAMILY_AND_KIDS:CHILDREN_PLAY_AREA": require('../assets/amenitiesIcons/ChildrenPark.svg'),
        "PROPERTY:FAMILY_AND_KIDS:STOLLERS": require('../assets/amenitiesIcons/Stroller.svg'),
        "PROPERTY:FAMILY_AND_KIDS:PLAYGROUND": require('../assets/amenitiesIcons/PlayGround.svg'),
        "PROPERTY:SAFETY_HYGIENE:DISINFECTION": require('../assets/amenitiesIcons/CleanHands.svg'),
        "PROPERTY:SAFETY_HYGIENE:SHOE_COVERS": require('../assets/amenitiesIcons/ShoeCovers.svg'),
        "PROPERTY:SAFETY_HYGIENE:HAIR_NETS": require('../assets/amenitiesIcons/HairNet.svg'),
        "PROPERTY:SAFETY_HYGIENE:FACE_SHIELDS": require('../assets/amenitiesIcons/AddModerator.svg'),
        "PROPERTY:SAFETY_HYGIENE:PPE": require('../assets/amenitiesIcons/Masks.svg'),
        "PROPERTY:SAFETY_HYGIENE:HOSPITAL_IN_THE_VICINITY": require('../assets/amenitiesIcons/Hospital.svg'),
        "PROPERTY:SAFETY_HYGIENE:SAFETY_AUTHORIZATION_CERTIFICATE": require('../assets/amenitiesIcons/AuthorizationCertificate.svg'),
        "PROPERTY:SAFETY_HYGIENE:DISPOSABLE_SERVEWARE": require('../assets/amenitiesIcons/Disposableserveware.svg'),
        "PROPERTY:SAFETY_HYGIENE:CONTACTLESS_ROOM_SERVICE": require('../assets/amenitiesIcons/Contactless.svg'),
        "PROPERTY:SAFETY_HYGIENE:THERMAL_SCREENING": require('../assets/amenitiesIcons/ThermalScreening.svg'),
        "PROPERTY:SAFETY_HYGIENE:MASKS": require('../assets/amenitiesIcons/Masks.svg'),
        "PROPERTY:SAFETY_HYGIENE:DISINFECTANT_WIPES": require('../assets/amenitiesIcons/DisInfectantWipes.svg'),
        "PROPERTY:SAFETY_HYGIENE:GLOVES": require('../assets/amenitiesIcons/PanTool.svg'),
        "PROPERTY:SAFETY_HYGIENE:SANITIZERS": require('../assets/amenitiesIcons/Sanitizer.svg'),
        "PROPERTY:SAFETY_HYGIENE:CONTACTLESS_CHECK_IN": require('../assets/amenitiesIcons/ContactlessCheckins.svg'),
        "PROPERTY:PET_ESSENTIALS:PET_BOWLS": require('../assets/amenitiesIcons/PetBowls.svg'),
        "PROPERTY:PET_ESSENTIALS:PET_BASKETS": require('../assets/amenitiesIcons/PetBasket.svg'),
        "SPACE:POPULAR_WITH_GUESTS:AIR_CONDITIONING": require('../assets/amenitiesIcons/AcUnit.svg'),
        "SPACE:POPULAR_WITH_GUESTS:INTERCONNECTED_ROOM": require('../assets/amenitiesIcons/interConnectedRooms.svg'),
        "SPACE:POPULAR_WITH_GUESTS:HEATER": require('../assets/amenitiesIcons/Heater.svg'),
        "SPACE:POPULAR_WITH_GUESTS:HOUSEKIPPING": require('../assets/amenitiesIcons/HouseKeeping.svg'),
        "SPACE:POPULAR_WITH_GUESTS:ROOM_SERVICE": require('../assets/amenitiesIcons/RoomService.svg'),
        "SPACE:POPULAR_WITH_GUESTS:IN_ROOM_DINING": require('../assets/amenitiesIcons/InRoomDining.svg'),
        // "SPACE:POPULAR_WITH_GUESTS:IRON_IRONING_BOARD": require('../assets/amenitiesIcons/Iron.svg'),
        "SPACE:POPULAR_WITH_GUESTS:LAUNDRY_SERVICE": require('../assets/amenitiesIcons/LocalLaundryService.svg'),
        "SPACE:POPULAR_WITH_GUESTS:MINERAL_WATER": require('../assets/amenitiesIcons/LocalDrink.svg'),
        "SPACE:POPULAR_WITH_GUESTS:SMOKING_ROOM": require('../assets/amenitiesIcons/SmokingRoom.svg'),
        "SPACE:POPULAR_WITH_GUESTS:STUDY_ROOM": require('../assets/amenitiesIcons/StudyRoom.svg'),
        "SPACE:POPULAR_WITH_GUESTS:ELECTRIC_KETTLE": require('../assets/amenitiesIcons/ElectricKettle.svg'),
        "SPACE:POPULAR_WITH_GUESTS:BATHROOM": require('../assets/amenitiesIcons/BabyChangingStation.svg'),
        "SPACE:POPULAR_WITH_GUESTS:WIFI": require('../assets/amenitiesIcons/Wifi.svg'),
        "SPACE:POPULAR_WITH_GUESTS:AIR_PURIFIER": require('../assets/amenitiesIcons/Air.svg'),
        "SPACE:POPULAR_WITH_GUESTS:SANITIZERS": require('../assets/amenitiesIcons/Sanitizer.svg'),
        "SPACE:BATHROOM:BATHROOM_PHONE": require('../assets/amenitiesIcons/BathroomPhone.svg'),
        "SPACE:BATHROOM:BATHTUB": require('../assets/amenitiesIcons/Bathtub.svg'),
        "SPACE:BATHROOM:BUBBLE_BATH": require('../assets/amenitiesIcons/BubbleBath.svg'),
        "SPACE:BATHROOM:DENTAL_KIT": require('../assets/amenitiesIcons/DentalKit.svg'),
        "SPACE:BATHROOM:GYSER_WATER_HEATER": require('../assets/amenitiesIcons/Heater.svg'),
        // "SPACE:BATHROOM:HAIRDRYER": require('../assets/amenitiesIcons/HairDryer.svg'),
        "SPACE:BATHROOM:HOT_COLD_WATER": require('../assets/amenitiesIcons/Water.svg'),
        // "SPACE:BATHROOM:SLIPPERS": require('../assets/amenitiesIcons/Slipper.svg'),
        "SPACE:BATHROOM:SPA_TUB": require('../assets/amenitiesIcons/SpaTub.svg'),
        // "SPACE:BATHROOM:SHOWER": require('../assets/amenitiesIcons/Bathroom.svg'),
        "SPACE:BATHROOM:TOILET_PAPERS": require('../assets/amenitiesIcons/ToiletPaper.svg'),
        "SPACE:BATHROOM:TOILETRIES": require('../assets/amenitiesIcons/Toiletries.svg'),
        // "SPACE:BATHROOM:SANITARY_BIN": require('../assets/amenitiesIcons/SanitaryBin.svg'),
        "SPACE:BATHROOM:SHOWER_CAP": require('../assets/amenitiesIcons/HairNet.svg'),
        "SPACE:BATHROOM:TOWELS": require('../assets/amenitiesIcons/DryCleaning.svg'),
        "SPACE:BATHROOM:BODY_SCRUB": require('../assets/amenitiesIcons/Scrub.svg'),
        "SPACE:BATHROOM:BODY_WRAP": require('../assets/amenitiesIcons/BodyWrap.svg'),
        "SPACE:BATHROOM:EMERGENCY_CORD": require('../assets/amenitiesIcons/EmergencyChord.svg'),
        "SPACE:BATHROOM:HIGHER_LEVEL_TOILET": require('../assets/amenitiesIcons/HigherLevelToilet.svg'),
        "SPACE:BATHROOM:LOWER_BATHROOM_SINK": require('../assets/amenitiesIcons/Countertops.svg'),
        "SPACE:BATHROOM:HAMMAM": require('../assets/amenitiesIcons/Hammam.svg'),
        "SPACE:BATHROOM:BATHROBES": require('../assets/amenitiesIcons/HotTub.svg'),
        "SPACE:BATHROOM:DUSTBINS": require('../assets/amenitiesIcons/DeleteOutline.svg'),
        "SPACE:BATHROOM:WESTERN_TOILET_SEAT": require('../assets/amenitiesIcons/HigherLevelToilet.svg'),
        // "SPACE:BATHROOM:SHOWER_CUBICLE": require('../assets/amenitiesIcons/Shower.svg'),
        "SPACE:BATHROOM:WEIGHING_SCALE": require('../assets/amenitiesIcons/WeighingScale.svg'),
        // "SPACE:BATHROOM:SHAVING_MIRROR": require('../assets/amenitiesIcons/ShavingMirror.svg'),
        // "SPACE:BATHROOM:SEWING_KIT": require('../assets/amenitiesIcons/SewingKit.svg'),
        "SPACE:BATHROOM:ADAPTED_BATH": require('../assets/amenitiesIcons/AdaptedBath.svg'),
        "SPACE:BATHROOM:BIDET": require('../assets/amenitiesIcons/Bidet.svg'),
        "SPACE:BATHROOM:TOILET_WITH_GRAB_RAILS": require('../assets/amenitiesIcons/DragHandle.svg'),
        "SPACE:SPACE_FEATURES:CLOSET": require('../assets/amenitiesIcons/Closet.svg'),
        "SPACE:SPACE_FEATURES:CLOTHES_RACK": require('../assets/amenitiesIcons/ClothesRack.svg'),
        "SPACE:SPACE_FEATURES:HANGERS": require('../assets/amenitiesIcons/DryCleaning.svg'),
        "SPACE:SPACE_FEATURES:BLACKOUT_CURTAINS": require('../assets/amenitiesIcons/Curtains.svg'),
        "SPACE:SPACE_FEATURES:BOUQUET": require('../assets/amenitiesIcons/EmojiNature.svg'),
        "SPACE:SPACE_FEATURES:MINI_FRIDGE": require('../assets/amenitiesIcons/Kitchen.svg'),
        // "SPACE:SPACE_FEATURES:CHARGING_PORTS": require('../assets/amenitiesIcons/Cable.svg'),
        // "SPACE:SPACE_FEATURES:DINING_TABLE": require('../assets/amenitiesIcons/TableRestaurant.svg'),
        "SPACE:SPACE_FEATURES:SOFA": require('../assets/amenitiesIcons/Chair.svg'),
        "SPACE:SPACE_FEATURES:WORK_DESK": require('../assets/amenitiesIcons/Desk.svg'),
        // "SPACE:SPACE_FEATURES:CHAIR": require('../assets/amenitiesIcons/ChairAlt.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:IN_HOUSE_MOBIES": require('../assets/amenitiesIcons/LiveTv.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:TV": require('../assets/amenitiesIcons/Tv.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:IPOD_DOCKING_STATION": require('../assets/amenitiesIcons/Dock.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:SOUND_SPEAKERS": require('../assets/amenitiesIcons/Speaker.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:SMARTPHONE": require('../assets/amenitiesIcons/Smartphone.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:IPAD": require('../assets/amenitiesIcons/TabletAndroid.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:COMPUTER": require('../assets/amenitiesIcons/Computer.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:GAME_CONSOLE": require('../assets/amenitiesIcons/SportsEsports.svg'),
        "SPACE:FOOD_AND_DRINKS:CAKE": require('../assets/amenitiesIcons/Cake.svg'),
        "SPACE:FOOD_AND_DRINKS:CHAMPAGNE": require('../assets/amenitiesIcons/Liquor.svg'),
        "SPACE:FOOD_AND_DRINKS:COOKIES": require('../assets/amenitiesIcons/Cookie.svg'),
        "SPACE:FOOD_AND_DRINKS:DRINKS": require('../assets/amenitiesIcons/SportsBar.svg'),
        "SPACE:FOOD_AND_DRINKS:FRUIT_BASKET": require('../assets/amenitiesIcons/ShoppingBasket.svg'),
        "SPACE:FOOD_AND_DRINKS:FRUIT_WINE": require('../assets/amenitiesIcons/WineBar.svg'),
        "SPACE:FOOD_AND_DRINKS:SPARKLING_WINE": require('../assets/amenitiesIcons/LocalBar.svg'),
        "SPACE:FOOD_AND_DRINKS:BBW_GRILL": require('../assets/amenitiesIcons/OutdoorGrill.svg'),
        "SPACE:FOOD_AND_DRINKS:WASHING_MACHINE": require('../assets/amenitiesIcons/LocalLaundryService.svg'),
        // "SPACE:SAFETY_AND_SECURITY:SAFE": require('../assets/amenitiesIcons/HealthAndSafety.svg'),
        // "SPACE:SAFETY_AND_SECURITY:SAFETY": require('../assets/amenitiesIcons/SafetyCheck.svg'),
        "SPACE:SAFETY_AND_SECURITY:SECURITY": require('../assets/amenitiesIcons/Security.svg'),
        "SPACE:CHILDCARE:IN_ROOM_CHILD_CARE": require('../assets/amenitiesIcons/ChildFriendly.svg'),
        "SPACE:FOOD_AND_DRINKS:REFRIGERATOR": require('../assets/amenitiesIcons/Kitchen.svg'),
        "SPACE:CHILDCARE:CRIBS": require('../assets/amenitiesIcons/Crib.svg'),
        'NO_IMAGE_FOUND': require('../assets/MarketChannelLogos/NO_IMAGE_FOUND.svg').toString()
    };

    const requiredSvg = iconSet[amenityName] || iconSet['NO_IMAGE_FOUND']

    if (requiredSvg) {
        return requiredSvg.replace(/width="[\d.]+"/, `width="${width}"`)
            .replace(/height="[\d.]+"/, `height="${height}"`)
            .replace(/fill="[^"]+"/, `fill="${color}"`);

    }
}

module.exports = AmenityIcon
