const {
    PAYMENT_GATEWAY_PAYU,
    PAYMENT_GATEWAY_RAZORPAY,
    PAYMENT_GATEWAY_AIRPAY,
    PAYMENT_GATEWAY_CASHFREE
} = require("../constants/BeConstants");

const paymentGatewayIcon = (paymentGateway) => {

    const paymentGatewayIconsMapping = {
        [PAYMENT_GATEWAY_PAYU]: require('../assets/MarketChannelLogos/payu.svg').default,
        [PAYMENT_GATEWAY_RAZORPAY]: require('../assets/MarketChannelLogos/Razorpay.svg').default,
        [PAYMENT_GATEWAY_AIRPAY]: require('../assets/MarketChannelLogos/airpay.svg').default,
        [PAYMENT_GATEWAY_CASHFREE]: require('../assets/MarketChannelLogos/Cashfree.svg').default,
        'NO_IMAGE_FOUND': require('../assets/MarketChannelLogos/NO_IMAGE_FOUND.svg').default,
    }

    if (paymentGateway in paymentGatewayIconsMapping) {
        return paymentGatewayIconsMapping[paymentGateway]

    } else {
        return paymentGatewayIconsMapping['NO_IMAGE_FOUND']

    }
}

module.exports = paymentGatewayIcon
