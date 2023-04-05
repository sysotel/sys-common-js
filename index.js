import {MarketChannelMapping} from "./mappings/MarketChannelLogosMapping/MarketChannelLogosMapping.js";
import NoImageFound from "./assets/MarketChannelLogos/NO_IMAGE_FOUND.svg"

export const MarketChannelLogo = (marketChannel, width, height) => {
    const setBackgroundImage = (image) => {
        return {
            backgroundImage: `url(${image})`,
            width: width,
            height: height,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            borderRadius: '50%',
        }
    }

    if (marketChannel in MarketChannelMapping) {
        return (
            <div
                style={setBackgroundImage(MarketChannelMapping[marketChannel])}
            />
        )
    } else {
        return (
            <div
                style={setBackgroundImage(NoImageFound)}
            />
        )
    }
}