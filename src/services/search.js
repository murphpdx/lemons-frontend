import axios from 'axios';
const BASE_URL = 'https://one.nhtsa.gov/webapi/api/Recalls';

export function searchByYearAndMake(year, make) {
    return axios.get(`${BASE_URL}/vehicle/modelyear/${year}/make/${make}?format=json`)
        .then(function(response){
            console.log('[DEBUG] - ', response.data); // ex.: { user: 'Your User'}
            console.log('[DEBUG] - ', response.status); // ex.: 200
            return response.data;
        });
}
