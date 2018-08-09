import _axios from 'axios'
const BASE_URL = 'http://35.192.36.45'
const axios = _axios.create({
  timeout: 100000
})

export function searchByYearAndMake (year, make, model) {
  return axios.get(`${BASE_URL}/recalls/${year}/make/${make}/model/${model}?format=json`)
    .then(function (response) {
      console.log('[DEBUG] - ', response.data) // ex.: { user: 'Your User'}
      console.log('[DEBUG] - ', response.status) // ex.: 200
      return response.data
    })
}

export function getModels (year, make) {
    return axios.get(`${BASE_URL}/models/${year}/make/${make}?format=json`)
        .then(function (response) {
            return response.data
        })
}

export function getMakes (year) {
    return axios.get(`${BASE_URL}/year/${year}`)
        .then(function (response) {
            return response.data
        })
}
