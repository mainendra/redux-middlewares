const promiseMiddleware = store => next => action => {
    if (action.promiseFn) {
        next({
            type: `${action.type}_INPROGRESS`
        });
        
        return action.promiseFn({ ...store }).then(resp => {
            next({
                type: `${action.type}_SUCCESS`,
                payload: resp
            });
        }, error => {
            next({
                type: `${action.type}_ERROR`,
                payload: error
            });
            throw error;
        });
    }
    
    return next(action);
};

export default promiseMiddleware;
