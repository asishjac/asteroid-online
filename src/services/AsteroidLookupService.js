import axios from "axios";

const GET_ASTEROID_DETAILS_API_URL = "http://localhost:8080/api/v1/asteroids"

class AsteroidLookupService{

    getAsteroidDetails(){
        return axios.get(GET_ASTEROID_DETAILS_API_URL);
    }
}

export default new AsteroidLookupService();