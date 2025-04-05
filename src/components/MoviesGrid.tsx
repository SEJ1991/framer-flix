import { Movie, MovieStatus } from '../types';
import { Grid, Img } from '../shared/components';
import { motion } from 'framer-motion';
import { makeImagePath } from '../shared/utils/path';
import styled from '@emotion/styled';

const Card = styled(motion.div)`
  position: relative;
  border-radius: 8px;
  cursor: pointer;
`;

interface Props {
  movies?: Movie[];
  status: MovieStatus;
  onClick: (id: number, status: MovieStatus) => () => void;
}
export function MoviesGrid({ movies = [], status, onClick }: Props) {
  return (
    <Grid>
      {movies.map(({ id, title, poster_path }, index) => (
        <motion.li
          key={`${status}-${id}`}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.1,
            type: 'spring',
            stiffness: 200,
            damping: 20,
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onClick(id, status)}
        >
          <Card whileHover={{ y: -5 }}>
            <Img src={makeImagePath(poster_path)} alt={`${title}'s poster image`} />
          </Card>
        </motion.li>
      ))}
    </Grid>
  );
}
