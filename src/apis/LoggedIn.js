export const isLoggedIn = () => {
    let token = localStorage.getItem("token")
    if (token === "null" || token === "undefined" || token === "" || token === undefined || token === null) {
        return false
    }
    return true
}