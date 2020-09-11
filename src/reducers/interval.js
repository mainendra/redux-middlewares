import {
    UPDATE_INTERVAL_COUNT
} from '../actions/interval';

const initialState = {
    count: 0
};

const reductions = {
    [UPDATE_INTERVAL_COUNT]: (state, action) => ({ ...state, count: action.payload }),
};

const interval = (state = initialState, action) => {
    const reducerAction = reductions[action.type];
    if (reducerAction) {
        return reducerAction(state, action);
    }

    return state;
};

export default interval;
