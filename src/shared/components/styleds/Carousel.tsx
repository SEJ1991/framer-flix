import styled from '@emotion/styled';
import { RightArrowIcon } from '../icons/RightArrowIcon';
import { LeftArrowIcon } from '../icons/LeftArrowIcon';
import { motion } from 'framer-motion';
import { css } from '@emotion/react';

const Base = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: relative;
`;

const Body = styled(motion.ul)<{ cols?: number }>`
  display: grid;
  grid-template-columns: ${({ cols = 6 }) => `repeat(${cols}, 1fr)`};
  width: 100%;
  height: 100%;
  position: absolute;
  gap: 12px;

  /* @media (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(3, 1fr);
  } */
`;

const Item = styled(motion.li)`
  height: 100%;
  cursor: pointer;

  &:first-of-type {
    transform-origin: center left;
  }

  &:last-of-type {
    transform-origin: center right;
  }
`;

const Card = styled(motion.div)`
  height: 100%;
  border-radius: 8px;
  position: relative;
`;

const Button = styled(motion.button)<{ arrowDirection?: 'left' | 'right' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  width: 50px;
  height: 50px;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  border-radius: 50%;
  z-index: 5;

  ${({ arrowDirection = 'left' }) =>
    arrowDirection === 'left'
      ? css`
          left: 5px;
        `
      : css`
          right: 5px;
        `}

  &:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const NextIcon = styled(RightArrowIcon)`
  width: 35px;
  height: 35px;
  color: white;
`;

const PrevIcon = styled(LeftArrowIcon)`
  width: 35px;
  height: 35px;
  color: white;
`;

const BottomBlackGradientOverlay = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  opacity: 0;
`;

export const Carousel = {
  Base,
  Body,
  Item,
  Card,
  Button,
  NextIcon,
  PrevIcon,
  BottomBlackGradientOverlay,
};
