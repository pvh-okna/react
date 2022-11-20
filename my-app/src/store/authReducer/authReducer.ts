import {AuthActions, SignUpError, SignUpSuccessPayload,
    SIGNUP_REQUEST,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,} from "./type";

type AuthState = {
    user: SignUpSuccessPayload | null
    error: SignUpError | null,
    // pending: boolean,
}

const initialState: AuthState = {
    user: null,
    error: null,
    // pending: false,
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        // case SIGNUP_REQUEST:
        //     return {
        //         ...state,
        //         // pending: true,
        //     };
        case SIGNUP_FAILURE:
            return {
                ...state,
                // pending: false,
                user: null,
                error: action.payload,
            };

        case SIGNUP_SUCCESS:
            return {
                ...state,
                // pending: false,
                user: action.payload,
                error: null,
            };

        default:
            return {
                ...state,
            };
    }
};