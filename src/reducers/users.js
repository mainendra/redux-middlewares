import {
    USERS_FETCH_ERROR,
    USERS_FETCH_INPROGRESS,
    USERS_FETCH_SUCCESS,
} from '../actions/users';

const initialState = {
    inProgress: false,
    errorObj: null,
    data: [],
};

const reductions = {
    [USERS_FETCH_INPROGRESS]: () => ({ ...initialState, inProgress: true }),
    [USERS_FETCH_SUCCESS]: (state, action) => ({ ...state, inProgress: false, data: action.payload || {} }),
    [USERS_FETCH_ERROR]: (state, action) => ({ ...state, inProgress: false, errorObj: action.payload || {} }),
};

const users = (state = initialState, action) => {
    const reducerAction = reductions[action.type];
    if (reducerAction) {
        return reducerAction(state, action);
    }

    return state;
};

export default users;
