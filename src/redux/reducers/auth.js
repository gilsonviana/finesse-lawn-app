import { SIGN_UP } from '../actions/types'

export default function AuthReducer(state = {}, action) {
    switch (action.type) {
        case SIGN_UP:
            return Object.assign({}, state, {
                userEmail: action.payload.email
            })
        default:
            return state
    }
}