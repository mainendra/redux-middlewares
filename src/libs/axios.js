import axios from 'axios';

export const CancelToken = axios.CancelToken;
export const isCancel = axios.isCancel;

export default axios.create();
