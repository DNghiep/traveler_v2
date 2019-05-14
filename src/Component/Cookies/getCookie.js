export const getCookie = (cookieName) => {
  let name = `${cookieName}=`
  let decodedCookie = decodeURIComponent(document.cookie)
  let listCookie = decodedCookie.split(";")
  for(let i = 0; i < listCookie.length; i++) {
    let eachCookie = listCookie[i]
    while(eachCookie[0] === " ") {
      eachCookie = eachCookie.substring(1)
    }
    if(eachCookie.indexOf(name) === 0) {
      return eachCookie.substring(name.length, eachCookie.length)
    }
  } 
  return ""
}