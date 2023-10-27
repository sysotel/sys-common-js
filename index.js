import {LogoMappings} from "./mappings/MarketChannelLogosMapping/LogoMappings.js";
import NoImageFound from './assets/MarketChannelLogos/NO_IMAGE_FOUND.svg'
import iconMapper from "./mappings/AmenityIconsMapping/IconMappings.js";
import {paymentGatewayIconsMapping} from "./mappings/PaymentGatewayIconsMapping/PaymentGatewayIconsMapping.js";

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in LogoMappings) {
        return LogoMappings[marketChannel]

    } else {
        return NoImageFound

    }
}

export const amenityIcon = (amenity) => {
    const requiredAmenity = iconMapper(amenity)

    if(requiredAmenity) {
        return requiredAmenity

    }

    return 'DoNotDisturbAlt'
}

export const paymentGatewayIcons = (paymentGateway) => {
    if (paymentGateway in paymentGatewayIconsMapping) {
        return paymentGatewayIconsMapping[paymentGateway]

    } else {
        return NoImageFound

    }
}
