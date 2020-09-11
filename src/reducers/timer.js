import {
    UPDATE_TIMER_STATE
} from '../actions/timer';

const initialState = {
    state: ''
};

const reductions = {
    [UPDATE_TIMER_STATE]: (state, action) => ({ ...state, state: action.payload }),
};

const timer = (state = initialState, action) => {
    const reducerAction = reductions[action.type];
    if (reducerAction) {
        return reducerAction(state, action);
    }

    return state;
};

export default timer;
