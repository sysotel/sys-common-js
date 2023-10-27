import {
    PAYMENT_GATEWAY_AIRPAY,
    PAYMENT_GATEWAY_CASHFREE,
    PAYMENT_GATEWAY_PAYU,
    PAYMENT_GATEWAY_RAZORPAY
} from "../../constants/BeConstants.js";
import {_AIRPAY, _CASHFREE, _PAYU, _RAZORPAY} from "../LogoImports.js";

export const paymentGatewayIconsMapping = {
    [PAYMENT_GATEWAY_PAYU] : _PAYU,
    [PAYMENT_GATEWAY_RAZORPAY] : _RAZORPAY,
    [PAYMENT_GATEWAY_AIRPAY] : _AIRPAY,
    [PAYMENT_GATEWAY_CASHFREE] : _CASHFREE,
}

