import { useQuery } from '@tanstack/react-query';
import { getComingSoonMovies, getNowPlayingMovies, getPopularMovies } from '../../services/movie';
import { MovieStatus } from '../../types';

export function useFetchMovies(status: MovieStatus) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [status],
    queryFn: getQueryFn(status),
    select: data => data.results,
  });

  return { data, isLoading, isError };
}

function getQueryFn(status: MovieStatus) {
  switch (status) {
    case 'popular':
      return getPopularMovies;

    case 'coming-soon':
      return getComingSoonMovies;

    case 'now-playing':
      return getNowPlayingMovies;
  }
}
