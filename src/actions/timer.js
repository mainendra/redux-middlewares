export const UPDATE_TIMER_STATE = 'UPDATE_TIMER_STATE';

export const TIMER_STATES = {
    'RUNNING': 'running',
    'STOPPED': 'stopped'
};

let cancelTimer;

export function startTimer(delayMs=3000) {
    return {
        callBack: ({ dispatch }) => {
            // Cancel previously running timer
            if (cancelTimer) {
                cancelTimer();
            }
            // Reset state
            dispatch({
                type: UPDATE_TIMER_STATE,
                payload: TIMER_STATES.RUNNING
            });
            cancelTimer = dispatch({
                type: 'TIMEOUT',
                delay: delayMs,
                callBack: ({ dispatch }) => {
                    dispatch({
                        type: UPDATE_TIMER_STATE,
                        payload: TIMER_STATES.STOPPED
                    });
                }
            });
        }
    };
}
