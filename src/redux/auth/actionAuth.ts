export const IS_USER_LOGGED = "IS_USER_LOGGED";
export const LOGOUT = "LOGOUT"

interface User {
    user: {};
}

export function isLoggedUser(user: User) {
    return {
        type: IS_USER_LOGGED,
        info: "Status do usuário",
        payload: user
    };
}

export function logout() {
    return {
        type: LOGOUT,
        info: "Logout da aplicação",
        payload: null
    };
}






