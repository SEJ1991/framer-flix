import { MovieBanner } from '../components';
import { useFetchMovies } from '../shared/hooks';
import { getRandomInt } from '../shared/utils/number';

export function MovieBannerContainer() {
  const { data: movies, isLoading, isError } = useFetchMovies('now-playing');
  const index = getRandomInt(0, 10);

  if (isLoading || isError || !movies || !movies[index]) return null;
  return <MovieBanner {...movies[index]} />;
}
