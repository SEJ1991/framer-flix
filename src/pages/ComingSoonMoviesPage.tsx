import { MoviesGrid } from '../components';
import { MovieModalContainer, MoviesContainer } from '../containers';
import { FlexBox, MiddleHeading, PageFrame, SkeletonsGrid } from '../shared/components';

export function ComingSoonMoviesPage() {
  return (
    <PageFrame padding='0 20px 30px'>
      <FlexBox direction='column' gap='8px'>
        <MiddleHeading>Coming soon movies</MiddleHeading>
        <MoviesContainer
          status='coming-soon'
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
