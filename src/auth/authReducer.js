import { types } from "../types/types";

// const state = {
//     name: 'Juan',
//     logged: true
// }

//Manejar las acciones de la autentificación
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        case types.logout:
            return {
                logged: false
            }
        default:
            return state;
    }
}