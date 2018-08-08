import _axios from 'axios'
const BASE_URL = 'https://one.nhtsa.gov/webapi/api/Recalls'
const axios = _axios.create({
  timeout: 100000
})

export function searchByYearAndMake (year, make, model) {
  return axios.get(`${BASE_URL}/vehicle/modelyear/${year}/make/${make}/model/${model}?format=json`)
    .then(function (response) {
      console.log('[DEBUG] - ', response.data) // ex.: { user: 'Your User'}
      console.log('[DEBUG] - ', response.status) // ex.: 200
      return response.data
    })
}
