import styled from '@emotion/styled';
import { Movie } from '../types';
import { motion } from 'framer-motion';
import { makeBgPath } from '../shared/utils/path';

const Base = styled(motion.div)<{ imgUrl: string }>`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)),
    url(${({ imgUrl }) => imgUrl});
  background-size: cover;
  background-position: center;
  padding: 80px 20px 25dvh;
  display: flex;
  flex-direction: column;
  gap: 15px;
  justify-content: flex-end;
  color: #f8f9fa;
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 300;

  @media (max-width: 768px) {
    font-size: 30px;
  }

  @media (max-width: 540px) {
    font-size: 25px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;

const Overview = styled.h3`
  width: 50%;
  font-size: 25px;
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 768px) {
    font-size: 20px;
    width: 60%;
  }

  @media (max-width: 540px) {
    font-size: 18px;
    width: 70%;
  }

  @media (max-width: 400px) {
    font-size: 15px;
    width: 80%;
  }
`;

export function MovieBanner({ title, overview, backdrop_path }: Movie) {
  return (
    <Base
      imgUrl={makeBgPath(backdrop_path)}
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, type: 'tween' }}
    >
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </Base>
  );
}
