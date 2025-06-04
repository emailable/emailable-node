'use strict'

const axios = require('axios')

class Client {

  constructor(apiKey = null) {
    this.instance = axios.create({ baseURL: 'https://api.emailable.com/v1/' })
    this.apiKey = apiKey
  }

  makeGetRequest(endpoint, params = {}) {
    const { apiKey, accessToken, ...filteredParams } = params
    const key = apiKey || accessToken || this.apiKey
    const headers = key ? { Authorization: `Bearer ${key}` } : {}

    return new Promise((resolve, reject) => {
      this.instance.get(endpoint, { params: filteredParams, headers: headers })
        .then(response => resolve(response.data))
        .catch(error => {
          if (error.response) {
            reject({
              message: error.response.data.message,
              code: error.response.status
            })
          } else {
            reject({ message: error })
          }
        })
    })
  }

  makePostRequest(endpoint, data = {}) {
    const { apiKey, accessToken, ...filteredData } = data
    const key = apiKey || accessToken || this.apiKey
    const headers = key ? { Authorization: `Bearer ${key}` } : {}

    return new Promise((resolve, reject) => {
      this.instance.post(endpoint, filteredData, { headers: headers })
        .then(response => resolve(response.data))
        .catch(error => {
          reject({
            message: error.response.data.message,
            code: error.response.status
          })
        })
    })
  }

}

module.exports = Client
