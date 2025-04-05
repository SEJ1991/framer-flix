import { useSearchParams } from 'react-router';
import { Skeleton } from '../shared/components';
import { useFetchMovies } from '../shared/hooks';
import { Movie, MovieStatus } from '../types';

interface Props {
  status?: MovieStatus;
  fallback?: React.ReactNode;
  render: (
    movies: Movie[] | undefined,
    status: MovieStatus,
    onClick: (id: number, status: MovieStatus) => () => void
  ) => React.ReactNode;
}
export function MoviesContainer({ status = 'popular', fallback = <Skeleton />, render }: Props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const { data: movies, isLoading, isError } = useFetchMovies(status);

  const handleClick = (id: number, status: MovieStatus) => () => {
    searchParams.set('id', id.toString());

    setSearchParams(searchParams, { replace: true });
  };

  if (isLoading || isError) return fallback;
  return <>{render(movies, status, handleClick)}</>;
}
