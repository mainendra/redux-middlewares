import { getIntervalCount } from '../selectors/interval';

export const UPDATE_INTERVAL_COUNT = 'UPDATE_INTERVAL_COUNT';

export function startInterval(delayMs=1000) {
    return {
        type: 'INTERVAL',
        delay: delayMs,
        callBack: ({ getState, dispatch }) => {
            dispatch({
                type: UPDATE_INTERVAL_COUNT,
                payload: getIntervalCount(getState()) + 1
            });
        }
    };
}
