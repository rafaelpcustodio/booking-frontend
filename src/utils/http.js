import { CODES } from '../constants/HTTP';


const responseWas = (responseCode, httpCode) => responseCode === httpCode
const responseWasOK = responseCode => responseWas(responseCode, CODES.OK);

export { responseWasOK }