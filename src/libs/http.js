import axios, { CancelToken } from './axios';

export const REQUEST_CANCELLED = 'Request cancelled';

function request({url, method, params, data}) {
    const source = CancelToken.source();
    const promise = axios({
        method,
        url,
        data,
        params,
        cancelToken: source.token
    });
    const cancel = () => source.cancel({
        reqUrl: url
    });
    return {
        promise,
        cancel
    };
}

export default {
    request
};
