import axios from 'axios';

export const callFetchApi = (...params) => callFetchAxios(...params);

function callFetchAxios(endpoint, params, method, reqbody = {}) {
    switch (method) {
        case 'GET':
            return axios.get(endpoint)
                .then(response => {
                    return response.data;
                })
                .catch(e => {
                    return e;
                });
    }
};