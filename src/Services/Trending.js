import axios from 'axios';

const Trending = axios.create({
    baseURL: 'https://api.themoviedb.org/3/trending/all/day?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=1'
})

export default Trending;