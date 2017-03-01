
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

