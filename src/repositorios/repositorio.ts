import axios, { AxiosResponse } from 'axios';
import { APIKEY } from '../configs/apikey'

const buscarFilmes = async () => {
        const resposta = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`)
        return resposta.data;
    }

export default buscarFilmes;


