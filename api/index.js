import axios from 'axios';

const BASE_URL = 'https://businessy-poc-api.herokuapp.com';
const apiBaseRequest = method => url => data =>
  axios({
    method,
    url: `${BASE_URL}${url}`,
    ...data,
  });

export const apiGET = apiBaseRequest('GET');
export const apiPOST = apiBaseRequest('POST');
