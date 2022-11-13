'use strict';

const axios = require('axios');

class Client {

  constructor(key) {
    this.key = key;
  }

  makeRequest(method, endpoint, params = {}, transformResponse) {

    params = Object.assign(params, { api_key: this.key })

    return new Promise((resolve, reject) => {

      axios({
        method: method,
        url: `https://api.emailable.com/v1/${endpoint}`,
        params: params,
        transformResponse: transformResponse
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        if (error.response) {
          reject({
            message: error.response.data.message,
            code: error.response.status
          })
        } else {
          reject({ message: error });
        }
      });

    });
  };

  makePostRequest(method, endpoint, data = {}, transformResponse) {

    data = Object.assign(data, { api_key: this.key })

    return new Promise((resolve, reject) => {

      axios({
        method: method,
        url: `https://api.emailable.com/v1/${endpoint}`,
        data: data,
        transformResponse: transformResponse
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(error => {
        reject({
          message: error.response.data.message,
          code: error.response.status
        })
      });

    });
  };
}

module.exports = Client;
