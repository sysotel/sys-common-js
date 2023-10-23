import {LogoMappings} from "./mappings/MarketChannelLogosMapping/LogoMappings.js";
import NoImageFound from './assets/MarketChannelLogos/NO_IMAGE_FOUND.svg'
import iconMapper from "./mappings/AmenityIconsMapping/IconMappings.js";

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in LogoMappings) {
        return LogoMappings[marketChannel]

    } else {
        return NoImageFound

    }
}

export const AmenityIcon = (amenity) => {
    const requiredAmenity = iconMapper(amenity)

    if(requiredAmenity) {
        return requiredAmenity

    }

    return 'DoNotDisturbAlt'
}