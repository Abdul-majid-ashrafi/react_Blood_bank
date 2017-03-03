
export function signUp(user) {
    return {
        type: 'signup',
        value: user
    }
}
export function signIn(user) {
    return {
        type: "signin",
        value: user
    }
}
export function Loggedin(user) {
    return {
        type: "loggedin",
        value: user
    }
}
export function FindDonors(user) {
    // console.log("Auth action ", user)
    return {
        type: "find",
        value: user
    }
}

