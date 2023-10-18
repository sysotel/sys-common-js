import {LogoMappings} from "./mappings/MarketChannelLogosMapping/LogoMappings.js";
import NoImageFound from './assets/MarketChannelLogos/NO_IMAGE_FOUND.svg'

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in LogoMappings) {
        return LogoMappings[marketChannel]

    } else {
        return NoImageFound

    }
}