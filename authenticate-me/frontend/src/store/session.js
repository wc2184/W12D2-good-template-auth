import csrfFetch from "./csrf";


const SET_CURRENT_USER = 'session/setCurrentUser';
const REMOVE_CURRENT_USER = 'session/removeCurrentUser';

export const setCurrentUser = (user) => {
    return {
        type: SET_CURRENT_USER,
        payload: user
    };
};

export const removeCurrentUser = () => {
    return {
        type: REMOVE_CURRENT_USER,
    };
};

const initialState = {
    user: null
}

export const login = (user) => async dispatch => {
    const {credential, password} = user;
    const response = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify({
            credential,
            password
        })
    });
    const data = await response.json();
    dispatch(setCurrentUser(data.user));
    return response;
};

export default function sessionReducer(state=initialState, action) {
    // const nextState = { ...state };

    switch (action.type) {
        case SET_CURRENT_USER:
            // nextState[action.payload.id] = action.payload;
            // return nextState;
            return { ...state, user: action.payload }
        case REMOVE_CURRENT_USER:
            return {...state, user: null};
        default:
            return state;
    } 
};