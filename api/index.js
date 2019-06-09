import axios from 'axios';

const BASE_URL = 'https://businessy-poc-api.herokuapp.com';
const apiBaseRequest = method => url => data =>
  axios({
    method,
    url: `${BASE_URL}${url}`,
    ...data,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
    },
  });

export const apiGET = apiBaseRequest('GET');
export const apiPOST = apiBaseRequest('POST');
export const apiPUT = apiBaseRequest('PUT');
