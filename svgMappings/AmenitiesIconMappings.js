function AmenityIcon(amenityName) {
    const iconSet = {
        "PROPERTY:BASIC_FACILITIES:ELEVATOR": require('../assets/amenitiesIcons/Elevator.svg').default,
        "PROPERTY:BASIC_FACILITIES:AC": require('../assets/amenitiesIcons/AcUnit.svg').default,
        "PROPERTY:BASIC_FACILITIES:DRY_CLEANING_SERVICES": require('../assets/amenitiesIcons/DryCleaning.svg').default,
        "PROPERTY:BASIC_FACILITIES:HOUSEKEEPING": require('../assets/amenitiesIcons/Countertops.svg').default,
        "PROPERTY:BASIC_FACILITIES:INTERCOM": require('../assets/amenitiesIcons/Devices.svg').default,
        // "PROPERTY:BASIC_FACILITIES:IRONING_SERVICES": require('../assets/amenitiesIcons/Iron.svg'),
        // "PROPERTY:BASIC_FACILITIES:BATHROOM": require('../assets/amenitiesIcons/Bathroom.svg'),
        "PROPERTY:BASIC_FACILITIES:LAN": require('../assets/amenitiesIcons/Lan.svg').default,
        "PROPERTY:BASIC_FACILITIES:NEWSPAPER": require('../assets/amenitiesIcons/Newspaper.svg').default,
        "PROPERTY:BASIC_FACILITIES:PARKING": require('../assets/amenitiesIcons/LocalParking.svg').default,
        "PROPERTY:BASIC_FACILITIES:POWER_BACKUP": require('../assets/amenitiesIcons/BatteryChargingFull.svg').default,
        "PROPERTY:BASIC_FACILITIES:REFRIGERATOR": require('../assets/amenitiesIcons/Kitchen.svg').default,
        // "PROPERTY:BASIC_FACILITIES:SMOKE_DETECTOR": require('../assets/amenitiesIcons/Upcoming.svg'),
        "PROPERTY:BASIC_FACILITIES:SMOKING_ROOM": require('../assets/amenitiesIcons/SmokingRooms.svg').default,
        "PROPERTY:BASIC_FACILITIES:SW": require('../assets/amenitiesIcons/Pool.svg').default,
        "PROPERTY:BASIC_FACILITIES:TE": require('../assets/amenitiesIcons/Telephone.svg').default,
        // "PROPERTY:BASIC_FACILITIES:TO": require('../assets/amenitiesIcons/FlashlightOn.svg'),
        "PROPERTY:BASIC_FACILITIES:UM": require('../assets/amenitiesIcons/BeachAccess.svg').default,
        "PROPERTY:BASIC_FACILITIES:WASHING_MACHINE": require('../assets/amenitiesIcons/LocalLaundryService.svg').default,
        "PROPERTY:BASIC_FACILITIES:WI": require('../assets/amenitiesIcons/Wifi.svg').default,
        "PROPERTY:BASIC_FACILITIES:PUBLIC_RESTROOMS": require('../assets/amenitiesIcons/Wc.svg').default,
        "PROPERTY:BASIC_FACILITIES:LA": require('../assets/amenitiesIcons/ViewStream.svg').default,
        "PROPERTY:BASIC_FACILITIES:VENDING_MACHINE": require('../assets/amenitiesIcons/VendingMachine.svg').default,
        "PROPERTY:BASIC_FACILITIES:PRIVATE_ENTRANCE": require('../assets/amenitiesIcons/MeetingRoom.svg').default,
        "PROPERTY:BASIC_FACILITIES:SA": require('../assets/amenitiesIcons/CleanHands.svg').default,
        "PROPERTY:BASIC_FACILITIES:EV_CHARGING_STATION": require('../assets/amenitiesIcons/EvStation.svg').default,
        // "PROPERTY:GENERAL_SERVICES:BELLBOY_SERVICE": require('../assets/amenitiesIcons/SettingsAccessibility.svg'),
        "PROPERTY:GENERAL_SERVICES:CA": require('../assets/amenitiesIcons/WheelchairPickup.svg').default,
        "PROPERTY:GENERAL_SERVICES:CO": require('../assets/amenitiesIcons/Concierge.svg').default,
        "PROPERTY:GENERAL_SERVICES:MULTILANGUAL_STAFF": require('../assets/amenitiesIcons/MultiLangualStaff.svg').default,
        "PROPERTY:GENERAL_SERVICES:LUGGAGE_ASSISTANCE": require('../assets/amenitiesIcons/LuggageStaff.svg').default,
        "PROPERTY:GENERAL_SERVICES:LUGGAGE_STORAGE": require('../assets/amenitiesIcons/LuggageStorage.svg').default,
        "PROPERTY:GENERAL_SERVICES:MA": require('../assets/amenitiesIcons/Markunread.svg').default,
        "PROPERTY:GENERAL_SERVICES:SPECIALLY_ABLED_ASSITANCE": require('../assets/amenitiesIcons/Accessible.svg').default,
        "PROPERTY:GENERAL_SERVICES:ELECTRICAL_SOCKETS": require('../assets/amenitiesIcons/Power.svg').default,
        "PROPERTY:GENERAL_SERVICES:POSTAL_SERVICES": require('../assets/amenitiesIcons/ForwardToInbox.svg').default,
        "PROPERTY:GENERAL_SERVICES:BUTLER_SERVICES": require('../assets/amenitiesIcons/FoodServe.svg').default,
        "PROPERTY:GENERAL_SERVICES:DO": require('../assets/amenitiesIcons/Mediation.svg').default,
        "PROPERTY:GENERAL_SERVICES:ME": require('../assets/amenitiesIcons/LocalPharmacy.svg').default,
        "PROPERTY:GENERAL_SERVICES:TICKET_TOUR_ASSISTANCE": require('../assets/amenitiesIcons/FollowTheSigns.svg').default,
        "PROPERTY:GENERAL_SERVICES:POOL_BEACH_TOWELS": require('../assets/amenitiesIcons/BeachTowel.svg').default,
        "PROPERTY:GENERAL_SERVICES:WE": require('../assets/amenitiesIcons/AllInbox.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BEACH": require('../assets/amenitiesIcons/WbSunny.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BOAT_RIDE": require('../assets/amenitiesIcons/Rowing.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BONFIRE": require('../assets/amenitiesIcons/LocalFireDepartment.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:GOLF": require('../assets/amenitiesIcons/GolfCourse.svg').default,
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:KAYAKS": require('../assets/amenitiesIcons/Sailing.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:CRICKET": require('../assets/amenitiesIcons/SportsCricket.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:VOLLEYBALL": require('../assets/amenitiesIcons/SportsVolleyball.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BASKETBALL": require('../assets/amenitiesIcons/SportsBasketball.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:TENNIS": require('../assets/amenitiesIcons/SportsTennis.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:BADMINTON": require('../assets/amenitiesIcons/Badminton.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:CHILREND_PARK": require('../assets/amenitiesIcons/ChildrenPark.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:ROCK_CLIMBING": require('../assets/amenitiesIcons/RockClimbing.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:ARCHERY": require('../assets/amenitiesIcons/Archery.svg').default,
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:HIKING": require('../assets/amenitiesIcons/Hiking.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:SQUASH": require('../assets/amenitiesIcons/SportsHandball.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:TELESCOPE": require('../assets/amenitiesIcons/Telescope.svg').default,
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:WATER_SPORTS": require('../assets/amenitiesIcons/Kayaking.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:VEHICAL_RENTALS": require('../assets/amenitiesIcons/CarRental.svg').default,
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:CANOEING": require('../assets/amenitiesIcons/Kitesurfing.svg'),
        // "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:SKIING": require('../assets/amenitiesIcons/DownhillSkiing.svg'),
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:JUNGLE_SAFARI": require('../assets/amenitiesIcons/JungleSafari.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPORTS:JUNGLE_TOURS_AND_TREKS": require('../assets/amenitiesIcons/JungleTour.svg').default,
        "PROPERTY:OUTDOOR_ACTIVITIES_AND_SPOR": require('../assets/amenitiesIcons/DirectionsBike.svg').default,
        "PROPERTY:COMMON_AREA:AQUARIUM": require('../assets/amenitiesIcons/Aquarium.svg').default,
        // "PROPERTY:COMMON_AREA:BALCONY": require('../assets/amenitiesIcons/Balcony.svg'),
        "PROPERTY:COMMON_AREA:FIREPLACE": require('../assets/amenitiesIcons/Whatshot.svg').default,
        "PROPERTY:COMMON_AREA:LAWN": require('../assets/amenitiesIcons/Grass.svg').default,
        "PROPERTY:COMMON_AREA:LIBRARY": require('../assets/amenitiesIcons/MenuBook.svg').default,
        "PROPERTY:COMMON_AREA:LOUNGE": require('../assets/amenitiesIcons/Chair.svg').default,
        "PROPERTY:COMMON_AREA:RECEPTION": require('../assets/amenitiesIcons/Reception.svg').default,
        "PROPERTY:COMMON_AREA:SEARING_AREA": require('../assets/amenitiesIcons/AirlineSeatReclineNormal.svg').default,
        "PROPERTY:COMMON_AREA:SUN_DECK": require('../assets/amenitiesIcons/ChairDeck.svg').default,
        "PROPERTY:COMMON_AREA:TEMPLE_CHAPEL": require('../assets/amenitiesIcons/TempleChappel.svg').default,
        // "PROPERTY:COMMON_AREA:VERANDAH": require('../assets/amenitiesIcons/Balcony.svg'),
        "PROPERTY:COMMON_AREA:JACUZZI": require('../assets/amenitiesIcons/Bathtub.svg').default,
        "PROPERTY:COMMON_AREA:PRAYER_ROOM": require('../assets/amenitiesIcons/Prayer.svg').default,
        "PROPERTY:COMMON_AREA:LIVING_ROOM": require('../assets/amenitiesIcons/Weekend.svg').default,
        "PROPERTY:COMMON_AREA:OUTDOOR_FURNITURE": require('../assets/amenitiesIcons/Deck.svg').default,
        "PROPERTY:COMMON_AREA:PICNIC_AREA": require('../assets/amenitiesIcons/PicnicArea.svg').default,
        "PROPERTY:COMMON_AREA:GAME_ROOM": require('../assets/amenitiesIcons/SportsEsports.svg').default,
        "PROPERTY:COMMON_AREA:SITOUT_AREA": require('../assets/amenitiesIcons/Deck.svg').default,
        "PROPERTY:COMMON_AREA:TV_AREA": require('../assets/amenitiesIcons/Tv.svg').default,
        "PROPERTY:COMMON_AREA:BONFIRE_PIT": require('../assets/amenitiesIcons/Bonfire.svg').default,
        "PROPERTY:FOOD_DRINKS:BAR": require('../assets/amenitiesIcons/LocalBar.svg').default,
        "PROPERTY:FOOD_DRINKS:BARBEQUUE": require('../assets/amenitiesIcons/OutdoorGrill.svg').default,
        "PROPERTY:FOOD_DRINKS:CAFE": require('../assets/amenitiesIcons/LocalCafe.svg').default,
        "PROPERTY:FOOD_DRINKS:COFFEE_SHOP": require('../assets/amenitiesIcons/Storefront.svg').default,
        "PROPERTY:FOOD_DRINKS:DINING_AREA": require('../assets/amenitiesIcons/DiningArea.svg').default,
        "PROPERTY:FOOD_DRINKS:RESTAURANT": require('../assets/amenitiesIcons/Restaurant.svg').default,
        "PROPERTY:FOOD_DRINKS:BAKERY": require('../assets/amenitiesIcons/BakeryDining.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:HAIR_TREATMENTS": require('../assets/amenitiesIcons/HairTreatment.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:MANICURE_PEDICURE": require('../assets/amenitiesIcons/ManicurePedicure.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:MASSAGE": require('../assets/amenitiesIcons/Massage.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:SALON": require('../assets/amenitiesIcons/Salon.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:SPA": require('../assets/amenitiesIcons/Spa.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:STEAM_AND_SAUNA": require('../assets/amenitiesIcons/SteamAndSauna.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:OPEN_AIR_BATH": require('../assets/amenitiesIcons/Bathtub.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:PUBLIC_BATH": require('../assets/amenitiesIcons/PubliceBath.svg').default,
        "PROPERTY:BEAUTY_AND_SPA:HAMMAM": require('../assets/amenitiesIcons/Hammam.svg').default,
        "PROPERTY:SECURITY:BODYGUARDS": require('../assets/amenitiesIcons/Bodyguards.svg').default,
        "PROPERTY:SECURITY:ELECTRONIC_KEYCARD": require('../assets/amenitiesIcons/Payment.svg').default,
        "PROPERTY:SECURITY:EMERGENCY_EXIT_MAP": require('../assets/amenitiesIcons/ExitMap.svg').default,
        "PROPERTY:SECURITY:SAFE": require('../assets/amenitiesIcons/Wash.svg').default,
        "PROPERTY:SECURITY:CCTV": require('../assets/amenitiesIcons/Cctv.svg').default,
        "PROPERTY:SECURITY:FIRE_EXTINGUISHERS": require('../assets/amenitiesIcons/FireExtinguisher.svg').default,
        "PROPERTY:SECURITY:SAFETY_SECURITY": require('../assets/amenitiesIcons/Security.svg').default,
        "PROPERTY:SECURITY:SECURITY_ALARMS": require('../assets/amenitiesIcons/SecurityAlarm.svg').default,
        "PROPERTY:SECURITY:SMOKE_ALARMS": require('../assets/amenitiesIcons/FireAlarm.svg').default,
        "PROPERTY:SECURITY:SMART_DOOR_LOCK": require('../assets/amenitiesIcons/SmartDoorLock.svg').default,
        "PROPERTY:SECURITY:FIRE_ALARM": require('../assets/amenitiesIcons/FireAlarm.svg').default,
        "PROPERTY:SECURITY:SECURITY_GUARD": require('../assets/amenitiesIcons/securityGuard.svg').default,
        "PROPERTY:SECURITY:CARBON_MONOXIDE_DETECTOR": require('../assets/amenitiesIcons/CarbonMonoxideDetector.svg').default,
        "PROPERTY:SECURITY:ACCESS_CONTROL_SYSTEM": require('../assets/amenitiesIcons/AccessControl.svg').default,
        // "PROPERTY:TRANSFERS:AIRPORT_TRANSFERS": require('../assets/amenitiesIcons/ConnectingAirportsIcon.svg'),
        "PROPERTY:TRANSFERS:PICKUP_DROP": require('../assets/amenitiesIcons/LocalTaxi.svg').default,
        "PROPERTY:TRANSFERS:SHUTTLE_SERVICE": require('../assets/amenitiesIcons/AirportShuttle.svg').default,
        "PROPERTY:TRANSFERS:RAILWAY_STATION_TRANSFERS": require('../assets/amenitiesIcons/DirectionsTransit.svg').default,
        "PROPERTY:TRANSFERS:BUS_STATION_TRANSFERS": require('../assets/amenitiesIcons/DirectionsBus.svg').default,
        "PROPERTY:TRANSFERS:PUBLIC_TRANSIT_TICKETS": require('../assets/amenitiesIcons/ConfirmationNumber.svg').default,
        "PROPERTY:ENTERTAINMENT:MOVIE_ROOM": require('../assets/amenitiesIcons/Theaters.svg').default,
        "PROPERTY:ENTERTAINMENT:HOME_THEATRE": require('../assets/amenitiesIcons/HomeTheatre.svg').default,
        "PROPERTY:ENTERTAINMENT:MUSIC_SYSTEM": require('../assets/amenitiesIcons/PlayArrow.svg').default,
        "PROPERTY:ENTERTAINMENT:EVENTS": require('../assets/amenitiesIcons/Events.svg').default,
        "PROPERTY:ENTERTAINMENT:PUB": require('../assets/amenitiesIcons/SportsBar.svg').default,
        "PROPERTY:ENTERTAINMENT:RADIO": require('../assets/amenitiesIcons/Radio.svg').default,
        "PROPERTY:ENTERTAINMENT:PHOTO_SESSION": require('../assets/amenitiesIcons/CameraAlt.svg').default,
        "PROPERTY:ENTERTAINMENT:NIGHT_CLUB": require('../assets/amenitiesIcons/Liquor.svg').default,
        "PROPERTY:ENTERTAINMENT:BEACH_CLUB": require('../assets/amenitiesIcons/BeachClub.svg').default,
        "PROPERTY:PAYMENT_SERVICES:ATM": require('../assets/amenitiesIcons/Atm.svg').default,
        // "PROPERTY:PAYMENT_SERVICES:CURRENCY_EXCHANGE": require('../assets/amenitiesIcons/CurrencyExchangeIcon.svg'),
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:CASINO": require('../assets/amenitiesIcons/Casino.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:POOL_TABLE": require('../assets/amenitiesIcons/PoolTable.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:TABLE_TENNIS": require('../assets/amenitiesIcons/TableTennis.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:CHESS": require('../assets/amenitiesIcons/Chess.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:CARROM_BOARD": require('../assets/amenitiesIcons/Carrom.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:FOOSBALL": require('../assets/amenitiesIcons/SportsSoccer.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:PUZZLES": require('../assets/amenitiesIcons/Extension.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:BOWLING": require('../assets/amenitiesIcons/Bowling.svg').default,
        "PROPERTY:INDOOR_ACTIVITIES_AND_SPORTS:DART": require('../assets/amenitiesIcons/Dart.svg').default,
        "PROPERTY:FAMILY_AND_KIDS:BABYSITTING": require('../assets/amenitiesIcons/BabyChangingStation.svg').default,
        "PROPERTY:FAMILY_AND_KIDS:CHILDREN_PLAY_AREA": require('../assets/amenitiesIcons/ChildrenPark.svg').default,
        "PROPERTY:FAMILY_AND_KIDS:STOLLERS": require('../assets/amenitiesIcons/Stroller.svg').default,
        "PROPERTY:FAMILY_AND_KIDS:PLAYGROUND": require('../assets/amenitiesIcons/PlayGround.svg').default,
        "PROPERTY:SAFETY_HYGIENE:DISINFECTION": require('../assets/amenitiesIcons/CleanHands.svg').default,
        "PROPERTY:SAFETY_HYGIENE:SHOE_COVERS": require('../assets/amenitiesIcons/ShoeCovers.svg').default,
        "PROPERTY:SAFETY_HYGIENE:HAIR_NETS": require('../assets/amenitiesIcons/HairNet.svg').default,
        "PROPERTY:SAFETY_HYGIENE:FACE_SHIELDS": require('../assets/amenitiesIcons/AddModerator.svg').default,
        "PROPERTY:SAFETY_HYGIENE:PPE": require('../assets/amenitiesIcons/Masks.svg').default,
        "PROPERTY:SAFETY_HYGIENE:HOSPITAL_IN_THE_VICINITY": require('../assets/amenitiesIcons/Hospital.svg').default,
        "PROPERTY:SAFETY_HYGIENE:SAFETY_AUTHORIZATION_CERTIFICATE": require('../assets/amenitiesIcons/AuthorizationCertificate.svg').default,
        "PROPERTY:SAFETY_HYGIENE:DISPOSABLE_SERVEWARE": require('../assets/amenitiesIcons/Disposableserveware.svg').default,
        "PROPERTY:SAFETY_HYGIENE:CONTACTLESS_ROOM_SERVICE": require('../assets/amenitiesIcons/Contactless.svg').default,
        "PROPERTY:SAFETY_HYGIENE:THERMAL_SCREENING": require('../assets/amenitiesIcons/ThermalScreening.svg').default,
        "PROPERTY:SAFETY_HYGIENE:MASKS": require('../assets/amenitiesIcons/Masks.svg').default,
        "PROPERTY:SAFETY_HYGIENE:DISINFECTANT_WIPES": require('../assets/amenitiesIcons/DisInfectantWipes.svg').default,
        "PROPERTY:SAFETY_HYGIENE:GLOVES": require('../assets/amenitiesIcons/PanTool.svg').default,
        "PROPERTY:SAFETY_HYGIENE:SANITIZERS": require('../assets/amenitiesIcons/Sanitizer.svg').default,
        "PROPERTY:SAFETY_HYGIENE:CONTACTLESS_CHECK_IN": require('../assets/amenitiesIcons/ContactlessCheckins.svg').default,
        "PROPERTY:PET_ESSENTIALS:PET_BOWLS": require('../assets/amenitiesIcons/PetBowls.svg').default,
        "PROPERTY:PET_ESSENTIALS:PET_BASKETS": require('../assets/amenitiesIcons/PetBasket.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:AIR_CONDITIONING": require('../assets/amenitiesIcons/AcUnit.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:INTERCONNECTED_ROOM": require('../assets/amenitiesIcons/interConnectedRooms.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:HEATER": require('../assets/amenitiesIcons/Heater.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:HOUSEKIPPING": require('../assets/amenitiesIcons/HouseKeeping.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:ROOM_SERVICE": require('../assets/amenitiesIcons/RoomService.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:IN_ROOM_DINING": require('../assets/amenitiesIcons/InRoomDining.svg').default,
        // "SPACE:POPULAR_WITH_GUESTS:IRON_IRONING_BOARD": require('../assets/amenitiesIcons/Iron.svg'),
        "SPACE:POPULAR_WITH_GUESTS:LAUNDRY_SERVICE": require('../assets/amenitiesIcons/LocalLaundryService.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:MINERAL_WATER": require('../assets/amenitiesIcons/LocalDrink.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:SMOKING_ROOM": require('../assets/amenitiesIcons/SmokingRoom.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:STUDY_ROOM": require('../assets/amenitiesIcons/StudyRoom.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:ELECTRIC_KETTLE": require('../assets/amenitiesIcons/ElectricKettle.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:BATHROOM": require('../assets/amenitiesIcons/BabyChangingStation.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:WIFI": require('../assets/amenitiesIcons/Wifi.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:AIR_PURIFIER": require('../assets/amenitiesIcons/Air.svg').default,
        "SPACE:POPULAR_WITH_GUESTS:SANITIZERS": require('../assets/amenitiesIcons/Sanitizer.svg').default,
        "SPACE:BATHROOM:BATHROOM_PHONE": require('../assets/amenitiesIcons/BathroomPhone.svg').default,
        "SPACE:BATHROOM:BATHTUB": require('../assets/amenitiesIcons/Bathtub.svg').default,
        "SPACE:BATHROOM:BUBBLE_BATH": require('../assets/amenitiesIcons/BubbleBath.svg').default,
        "SPACE:BATHROOM:DENTAL_KIT": require('../assets/amenitiesIcons/DentalKit.svg').default,
        "SPACE:BATHROOM:GYSER_WATER_HEATER": require('../assets/amenitiesIcons/Heater.svg').default,
        // "SPACE:BATHROOM:HAIRDRYER": require('../assets/amenitiesIcons/HairDryer.svg'),
        "SPACE:BATHROOM:HOT_COLD_WATER": require('../assets/amenitiesIcons/Water.svg').default,
        // "SPACE:BATHROOM:SLIPPERS": require('../assets/amenitiesIcons/Slipper.svg'),
        "SPACE:BATHROOM:SPA_TUB": require('../assets/amenitiesIcons/SpaTub.svg').default,
        // "SPACE:BATHROOM:SHOWER": require('../assets/amenitiesIcons/Bathroom.svg'),
        "SPACE:BATHROOM:TOILET_PAPERS": require('../assets/amenitiesIcons/ToiletPaper.svg').default,
        "SPACE:BATHROOM:TOILETRIES": require('../assets/amenitiesIcons/Toiletries.svg').default,
        // "SPACE:BATHROOM:SANITARY_BIN": require('../assets/amenitiesIcons/SanitaryBin.svg'),
        "SPACE:BATHROOM:SHOWER_CAP": require('../assets/amenitiesIcons/HairNet.svg').default,
        "SPACE:BATHROOM:TOWELS": require('../assets/amenitiesIcons/DryCleaning.svg').default,
        "SPACE:BATHROOM:BODY_SCRUB": require('../assets/amenitiesIcons/Scrub.svg').default,
        "SPACE:BATHROOM:BODY_WRAP": require('../assets/amenitiesIcons/BodyWrap.svg').default,
        "SPACE:BATHROOM:EMERGENCY_CORD": require('../assets/amenitiesIcons/EmergencyChord.svg').default,
        "SPACE:BATHROOM:HIGHER_LEVEL_TOILET": require('../assets/amenitiesIcons/HigherLevelToilet.svg').default,
        "SPACE:BATHROOM:LOWER_BATHROOM_SINK": require('../assets/amenitiesIcons/Countertops.svg').default,
        "SPACE:BATHROOM:HAMMAM": require('../assets/amenitiesIcons/Hammam.svg').default,
        "SPACE:BATHROOM:BATHROBES": require('../assets/amenitiesIcons/HotTub.svg').default,
        "SPACE:BATHROOM:DUSTBINS": require('../assets/amenitiesIcons/DeleteOutline.svg').default,
        "SPACE:BATHROOM:WESTERN_TOILET_SEAT": require('../assets/amenitiesIcons/HigherLevelToilet.svg').default,
        // "SPACE:BATHROOM:SHOWER_CUBICLE": require('../assets/amenitiesIcons/Shower.svg'),
        "SPACE:BATHROOM:WEIGHING_SCALE": require('../assets/amenitiesIcons/WeighingScale.svg').default,
        // "SPACE:BATHROOM:SHAVING_MIRROR": require('../assets/amenitiesIcons/ShavingMirror.svg'),
        // "SPACE:BATHROOM:SEWING_KIT": require('../assets/amenitiesIcons/SewingKit.svg'),
        "SPACE:BATHROOM:ADAPTED_BATH": require('../assets/amenitiesIcons/AdaptedBath.svg').default,
        "SPACE:BATHROOM:BIDET": require('../assets/amenitiesIcons/Bidet.svg').default,
        "SPACE:BATHROOM:TOILET_WITH_GRAB_RAILS": require('../assets/amenitiesIcons/DragHandle.svg').default,
        "SPACE:SPACE_FEATURES:CLOSET": require('../assets/amenitiesIcons/Closet.svg').default,
        "SPACE:SPACE_FEATURES:CLOTHES_RACK": require('../assets/amenitiesIcons/ClothesRack.svg').default,
        "SPACE:SPACE_FEATURES:HANGERS": require('../assets/amenitiesIcons/DryCleaning.svg').default,
        "SPACE:SPACE_FEATURES:BLACKOUT_CURTAINS": require('../assets/amenitiesIcons/Curtains.svg').default,
        "SPACE:SPACE_FEATURES:BOUQUET": require('../assets/amenitiesIcons/EmojiNature.svg').default,
        "SPACE:SPACE_FEATURES:MINI_FRIDGE": require('../assets/amenitiesIcons/Kitchen.svg').default,
        // "SPACE:SPACE_FEATURES:CHARGING_PORTS": require('../assets/amenitiesIcons/Cable.svg'),
        // "SPACE:SPACE_FEATURES:DINING_TABLE": require('../assets/amenitiesIcons/TableRestaurant.svg'),
        "SPACE:SPACE_FEATURES:SOFA": require('../assets/amenitiesIcons/Chair.svg').default,
        "SPACE:SPACE_FEATURES:WORK_DESK": require('../assets/amenitiesIcons/Desk.svg').default,
        // "SPACE:SPACE_FEATURES:CHAIR": require('../assets/amenitiesIcons/ChairAlt.svg'),
        "SPACE:MEDIA_ENTERTAINMENT:IN_HOUSE_MOBIES": require('../assets/amenitiesIcons/LiveTv.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:TV": require('../assets/amenitiesIcons/Tv.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:IPOD_DOCKING_STATION": require('../assets/amenitiesIcons/Dock.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:SOUND_SPEAKERS": require('../assets/amenitiesIcons/Speaker.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:SMARTPHONE": require('../assets/amenitiesIcons/Smartphone.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:IPAD": require('../assets/amenitiesIcons/TabletAndroid.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:COMPUTER": require('../assets/amenitiesIcons/Computer.svg').default,
        "SPACE:MEDIA_ENTERTAINMENT:GAME_CONSOLE": require('../assets/amenitiesIcons/SportsEsports.svg').default,
        "SPACE:FOOD_AND_DRINKS:CAKE": require('../assets/amenitiesIcons/Cake.svg').default,
        "SPACE:FOOD_AND_DRINKS:CHAMPAGNE": require('../assets/amenitiesIcons/Liquor.svg').default,
        "SPACE:FOOD_AND_DRINKS:COOKIES": require('../assets/amenitiesIcons/Cookie.svg').default,
        "SPACE:FOOD_AND_DRINKS:DRINKS": require('../assets/amenitiesIcons/SportsBar.svg').default,
        "SPACE:FOOD_AND_DRINKS:FRUIT_BASKET": require('../assets/amenitiesIcons/ShoppingBasket.svg').default,
        "SPACE:FOOD_AND_DRINKS:FRUIT_WINE": require('../assets/amenitiesIcons/WineBar.svg').default,
        "SPACE:FOOD_AND_DRINKS:SPARKLING_WINE": require('../assets/amenitiesIcons/LocalBar.svg').default,
        "SPACE:FOOD_AND_DRINKS:BBW_GRILL": require('../assets/amenitiesIcons/OutdoorGrill.svg').default,
        "SPACE:FOOD_AND_DRINKS:WASHING_MACHINE": require('../assets/amenitiesIcons/LocalLaundryService.svg').default,
        // "SPACE:SAFETY_AND_SECURITY:SAFE": require('../assets/amenitiesIcons/HealthAndSafety.svg'),
        // "SPACE:SAFETY_AND_SECURITY:SAFETY": require('../assets/amenitiesIcons/SafetyCheck.svg'),
        "SPACE:SAFETY_AND_SECURITY:SECURITY": require('../assets/amenitiesIcons/Security.svg').default,
        "SPACE:CHILDCARE:IN_ROOM_CHILD_CARE": require('../assets/amenitiesIcons/ChildFriendly.svg').default,
        "SPACE:FOOD_AND_DRINKS:REFRIGERATOR": require('../assets/amenitiesIcons/Kitchen.svg').default,
        "SPACE:CHILDCARE:CRIBS": require('../assets/amenitiesIcons/Crib.svg').default,
        "NO_IMAGE_FOUND": require('../assets/MarketChannelLogos/NO_IMAGE_FOUND.svg').defaul.defaultt
    };

    return iconSet[amenityName] || iconSet['PROPERTY:BASIC_FACILITIES:DRY_CLEANING_SERVICES']
}

module.exports = AmenityIcon
