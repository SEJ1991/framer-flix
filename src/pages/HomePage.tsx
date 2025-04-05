import { MoviesCarousel } from '../components';
import { MovieBannerContainer, MovieModalContainer, MoviesContainer } from '../containers';
import { Box, FlexBox, MiddleHeadingLink, PageFrame } from '../shared/components';

export function HomePage() {
  return (
    <PageFrame padding='70dvh 0 30px 0'>
      <Box position='absolute' height='90dvh'>
        <MovieBannerContainer />
      </Box>
      <FlexBox direction='column' gap='70px' padding='0 20px'>
        <FlexBox direction='column' gap='16px' align='flex-start'>
          <MiddleHeadingLink zIndex={1} to='/popular'>
            Popular movies
          </MiddleHeadingLink>
          <Box height='200px'>
            <MoviesContainer
              render={(movies, status, onClick) => (
                <MoviesCarousel movies={movies} status={status} onClick={onClick} />
              )}
            />
          </Box>
        </FlexBox>
        <FlexBox direction='column' gap='16px' align='flex-start'>
          <MiddleHeadingLink to='/coming-soon'>Coming soon movies</MiddleHeadingLink>
          <Box height='200px'>
            <MoviesContainer
              status='coming-soon'
              render={(movies, status, onClick) => (
                <MoviesCarousel movies={movies} status={status} onClick={onClick} />
              )}
            />
          </Box>
        </FlexBox>
        <FlexBox direction='column' gap='16px' align='flex-start'>
          <MiddleHeadingLink to='/now-playing'>Now playing movies</MiddleHeadingLink>
          <Box height='200px'>
            <MoviesContainer
              status='now-playing'
              render={(movies, status, onClick) => (
                <MoviesCarousel movies={movies} status={status} onClick={onClick} />
              )}
            />
          </Box>
        </FlexBox>
      </FlexBox>
      <MovieModalContainer />
    </PageFrame>
  );
}
