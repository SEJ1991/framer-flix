import { useQuery } from '@tanstack/react-query';
import { AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router';
import { getMovie } from '../services/movie';
import { MovieModal } from '../components';

export function MovieModalContainer() {
  const [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get('id') ?? '';

  const { data: movie } = useQuery({
    queryKey: ['movie', id],
    queryFn: getMovie(id),
    enabled: !!id,
  });

  const handleClickClose = () => {
    searchParams.delete('id');

    setSearchParams(searchParams, { replace: true });
  };

  return (
    <AnimatePresence>
      {movie && <MovieModal movie={movie} onClickClose={handleClickClose} />}
    </AnimatePresence>
  );
}
