export const setCookie = (cookieName, cookieValue, expDays) => {
    let date = new Date()
    date.setTime(date.getTime() + expDays*24*60*60*1000)
    let expires = `expires=${date.toUTCString()}`
    document.cookie = `${cookieName}=${cookieValue};${expires};path=/`
}