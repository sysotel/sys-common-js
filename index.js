import {MarketChannelMapping} from "./mappings/MarketChannelLogosMapping/MarketChannelLogosMapping.js";
import NoImageFound from "./assets/MarketChannelLogos/NO_IMAGE_FOUND.svg"

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in MarketChannelMapping) {
        return MarketChannelMapping[marketChannel]

    } else {
        return NoImageFound

    }
}