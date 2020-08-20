const timeoutMiddleware = store => next => action => {
    if (action.type === 'TIMEOUT') {
        const timerId = setTimeout(() => action.callBack({...store}), action.delay);
        return function cancel() {
            clearTimeout(timerId);
        };
    }

    return next(action);
};

export default timeoutMiddleware;

