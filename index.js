import {LogoMappings} from "./mappings/MarketChannelLogosMapping/LogoMappings.js";
import iconMapper from "./mappings/AmenityIconsMapping/IconMappings.js";
import {paymentGatewayIconsMapping} from "./mappings/PaymentGatewayIconsMapping/PaymentGatewayIconsMapping.js";
import {affiliationSourceIconMapping} from "./mappings/AffiliationSourceIconMapping/AffiliationSourceIconMapping.js";

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in LogoMappings) {
        return LogoMappings[marketChannel]

    } else {
        return LogoMappings['NO_IMAGE_FOUND']

    }
}

export const amenityIcon = (amenity) => {
    const requiredAmenity = iconMapper(amenity)

    if (requiredAmenity) {
        return requiredAmenity

    }

    return 'DoNotDisturbAlt'
}

export const paymentGatewayIcons = (paymentGateway) => {
    if (paymentGateway in paymentGatewayIconsMapping) {
        return paymentGatewayIconsMapping[paymentGateway]

    } else {
        return paymentGatewayIconsMapping['NO_IMAGE_FOUND']

    }
}

export const affiliationSourceIcon = (affiliationSource) => {
    if (affiliationSource in affiliationSourceIconMapping) {
        return affiliationSourceIconMapping[affiliationSource]

    }

    return affiliationSourceIconMapping['NO_IMAGE_FOUND']
}
