import { movieAxios } from '../shared/apis/axios';
import { MoivesRes, MovieDetail } from '../types';

export async function getPopularMovies(): Promise<MoivesRes> {
  const response = await movieAxios.get('/popular');
  return response.data;
}

export async function getNowPlayingMovies(): Promise<MoivesRes> {
  const response = await movieAxios.get('/now-playing');
  return response.data;
}

export async function getComingSoonMovies(): Promise<MoivesRes> {
  const response = await movieAxios.get('/coming-soon');
  return response.data;
}

export function getMovie(id: string) {
  return async function (): Promise<MovieDetail> {
    const response = await movieAxios.get(`/movie?id=${id}`);
    return response.data;
  };
}
