import http from '../libs/http';

export const USERS_FETCH_INPROGRESS = 'USERS_FETCH_INPROGRESS';
export const USERS_FETCH_SUCCESS = 'USERS_FETCH_SUCCESS';
export const USERS_FETCH_ERROR = 'USERS_FETCH_ERROR';

let cancelRequest;

export function fetchUsers(cancelPrevRequest=true) {
    return {
        type: 'USERS_FETCH',
        promiseFn: async () => {
            if (cancelPrevRequest && cancelRequest) {
                cancelRequest();
            }
            const url = `https://reqres.in/api/users`;
            const { promise, cancel } = http.request({
                url,
                method: 'get'
            });
            cancelRequest = cancel;
            const resp = await promise.then(resp => resp.data);
            return resp.data;
        }
    };
}
