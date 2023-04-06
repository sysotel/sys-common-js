import {MarketChannelMapping} from "./mappings/MarketChannelLogosMapping/MarketChannelLogosMapping.js";
import NoImageFound from "./assets/MarketChannelLogos/NO_IMAGE_FOUND.svg"

export const MarketChannelLogo = (marketChannel) => {
    if (marketChannel in MarketChannelMapping) {
        const svgString = btoa(new TextEncoder().encode(MarketChannelMapping[marketChannel]).toString());
        return `data:image/svg+xml;base64,${svgString}`;

    } else {
        const svgString = btoa(new TextEncoder().encode(NoImageFound).toString());
        return `data:image/svg+xml;base64,${svgString}`;

    }
}