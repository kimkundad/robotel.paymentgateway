// const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_AUTH_URL = process.env.REACT_APP_AUTHEN_BASE_URL;
const BASE_URL = ''

const API = {
  // manament
  STORE_REGISTER_INFORMATION: `${BASE_URL}/api/store-register-information`,
  PAYMENT_CHANNEL: `${BASE_URL}/api/payment-channel`,
  STORE_TYPE: `${BASE_URL}/api/store-type`,
  STORE_DETAIL: `${BASE_URL}/api/store-detail`,

  // account
  QR_TRANSACTION: `${BASE_URL}/api/qr-transaction`,
  FUNDING_TRANSFER: `${BASE_URL}/api/funding-transfer`,
  AR_PR: `${BASE_URL}/api/ar-pr`,
  MDR: `${BASE_URL}/api/mdr`,
  TAX_CALCULATION: `${BASE_URL}/api/tax-calculation`,

}

export default API;