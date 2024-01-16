'use strict';

const axios = require('axios');

class Client {

  constructor(key) {
    this.instance = axios.create({ baseURL: 'https://api.emailable.com/v1/' });
    if (key) {
      this.instance.defaults.headers.common['Authorization'] = `Bearer ${key}`;
    }
  }

  makeGetRequest(endpoint, params = {}) {
    return new Promise((resolve, reject) => {
      this.instance.get(endpoint, { params: params })
        .then(response => resolve(response.data))
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

  makePostRequest(endpoint, data = {}) {
    return new Promise((resolve, reject) => {
      this.instance.post(endpoint, data)
        .then(response => resolve(response.data))
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
