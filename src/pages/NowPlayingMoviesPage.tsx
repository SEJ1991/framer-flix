import { MoviesGrid } from '../components';
import { MovieModalContainer, MoviesContainer } from '../containers';
import { FlexBox, MiddleHeading, PageFrame, SkeletonsGrid } from '../shared/components';

export function NowPlayingMoviesPage() {
  return (
    <PageFrame padding='0 20px 30px'>
      <FlexBox direction='column' gap='8px'>
        <MiddleHeading>Now playing movies</MiddleHeading>
        <MoviesContainer
          status='now-playing'
          fallback={<SkeletonsGrid />}
          render={(movies, status, onClick) => (
            <MoviesGrid movies={movies} status={status} onClick={onClick} />
          )}
        />
      </FlexBox>
      <MovieModalContainer />
    </PageFrame>
  );
}
