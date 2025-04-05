import axios from 'axios';

export const movieAxios = axios.create({ baseURL: 'https://movies-api.nomadcoders.workers.dev' });
