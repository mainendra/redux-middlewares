const intervalMiddleware = store => next => action => {
    if (action.type === 'TIMEOUT') {
        const intervalId = setInterval(() => action.callBack({...store}), action.delay);
        return function cancel() {
            clearInterval(intervalId);
        };
    }

    return next(action);
};

export default intervalMiddleware;

