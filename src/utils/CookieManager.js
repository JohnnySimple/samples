import Cookies from "js-cookie";
import { v4 as uuidv4 } from "uuid";

export function setCookie(params = {}){
    const sessionId = uuidv4()
    let action = params.action ?? 'no'
    let consent = params.consent ?? 'no'
    let analytics = params.consent ?? 'no'
    let advertisements = params.consent ?? 'no'

    let cookieValue = `sessionid:${sessionId.replaceAll("-", "")},action:${action},consent:${consent},
        analytics:${analytics},advertisements:${advertisements}`
    Cookies.set("user-cookie-consent", encodeURIComponent(cookieValue))
}

export function getCookieDetails() {
    let userCookieConsent = decodeURIComponent(Cookies.get("user-cookie-consent"));
    let cookieObject = {}
    userCookieConsent.split(",").forEach(element => {
        cookieObject[element.split(":")[0]] = element.split(":")[1]
    });

    return cookieObject
}