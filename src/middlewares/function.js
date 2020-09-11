const functionMiddleware = store => next => action => {
    if (action.callBack) {
        return action.callBack({...store});
    }

    return next(action);
};

export default functionMiddleware;
