import _axios from 'axios'
const BASE_URL = 'http://35.192.36.45'
const axios = _axios.create({
  timeout: 100000
})

export function searchByYearAndMake (year, make, model) {
  return axios.get(
    `${BASE_URL}/recalls/${year}/make/${make}/model/${model}?format=json`,
    null,
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }
  )
    .then(function (response) {
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
  return axios.get(`${BASE_URL}/year/${year}`,
    null,
    {
      headers: {
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods,Access-Control-Allow-Origin, Origin, X-Requested-With, Content-Type, Accept',
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Methods': 'GET,OPTIONS'
      }
    }
  )
    .then(function (response) {
      return response.data
    })
}
