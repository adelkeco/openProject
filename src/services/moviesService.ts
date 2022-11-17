import axios from 'axios';
import { GET_TRENDING_MOVIES } from 'utils/api';

const MoviesService = {
    getTrending: () => {
        return axios.get(`${process.env.REACT_APP_API_URL}${GET_TRENDING_MOVIES}?api_key=${process.env.REACT_APP_API_KEY}`)
    }
}

export default MoviesService;