import { AnimatePresence } from 'framer-motion';
import { Carousel, Img } from '../shared/components';
import { Movie, MovieStatus } from '../types';
import { useState } from 'react';
import { useResize } from '../shared/hooks';
import { makeBgPath } from '../shared/utils/path';
import { getMaxPage, getOffset } from '../shared/utils/carousel';
import styled from '@emotion/styled';

const Info = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: bold;
  font-size: 18px;
`;

interface Props {
  movies?: Movie[];
  status: MovieStatus;
  onClick: (id: number, status: MovieStatus) => () => void;
}
export function MoviesCarousel({ movies = [], status, onClick }: Props) {
  const { innerWidth } = useResize();
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [debounce, setDebounce] = useState(false);

  const handleClickArrow = (param: -1 | 1) => () => {
    if (debounce) return;
    setDebounce(true);
    setDirection(param);
    setIndex(prev => prev + param);
  };

  const handleExitComplete = () => {
    setDebounce(false);
  };

  const offset = getOffset(innerWidth);
  const maxPage = getMaxPage(offset, movies.length);
  const slicedMovies = movies.slice(offset * index, offset * index + offset);

  return (
    <Carousel.Base
      initial={{ opacity: 0.8, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring', duration: 0.6 }}
    >
      <AnimatePresence initial={false} custom={direction} onExitComplete={handleExitComplete}>
        <Carousel.Body
          key={`${status}-${index}`}
          cols={offset}
          custom={direction}
          variants={{
            hidden: (direction: -1 | 1) => ({ x: direction * innerWidth }),
            visible: { x: 0 },
            exit: (direction: -1 | 1) => ({ x: direction * -innerWidth }),
          }}
          initial='hidden'
          animate='visible'
          exit='exit'
          transition={{ type: 'tween', duration: 1 }}
        >
          {slicedMovies.map(({ id, title, backdrop_path }) => (
            <Carousel.Item
              key={`card-${status}-${id}`}
              transition={{
                type: 'spring',
                duration: 0.3,
              }}
              whileTap='tap'
              whileHover='hover'
              initial='initial'
              variants={{
                initial: { scale: 1 },
                hover: { scale: 1.2, y: 3, zIndex: 5 },
                tap: { scale: 1.1 },
              }}
              onClick={onClick(id, status)}
            >
              <Carousel.Card>
                <Img src={makeBgPath(backdrop_path)} alt={`${title}'s image`} />
                <Carousel.BottomBlackGradientOverlay
                  variants={{
                    hover: {
                      opacity: 1,
                      transition: {
                        type: 'tween',
                        duration: 0.1,
                      },
                    },
                  }}
                >
                  <Info>
                    <Title>{title}</Title>
                  </Info>
                </Carousel.BottomBlackGradientOverlay>
              </Carousel.Card>
            </Carousel.Item>
          ))}
        </Carousel.Body>
      </AnimatePresence>

      {index > 0 && (
        <Carousel.Button onClick={handleClickArrow(-1)}>
          <Carousel.PrevIcon />
        </Carousel.Button>
      )}

      {index + 1 < maxPage && (
        <Carousel.Button arrowDirection='right' onClick={handleClickArrow(1)}>
          <Carousel.NextIcon />
        </Carousel.Button>
      )}
    </Carousel.Base>
  );
}
