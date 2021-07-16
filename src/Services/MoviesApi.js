import axios from 'axios'

const MoviesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/popular?api_key=5f806e98f1b3ee6e498219d17b4720cc&language=pt-BR&page=1'
})

export default MoviesApi;