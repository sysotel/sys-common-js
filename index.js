import {MarketChannelMapping} from "./mappings/MarketChannelLogosMapping/MarketChannelLogosMapping.js";
import NoImageFound from "./assets/MarketChannelLogos/NO_IMAGE_FOUND.svg"

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in MarketChannelMapping) {
        return `url(data:image/svg+xml;base64,${btoa(MarketChannelMapping[marketChannel])})`;

    } else {
        return `url(data:image/svg+xml;base64,${btoa(NoImageFound)})`;

    }
}