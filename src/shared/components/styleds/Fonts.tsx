import styled from '@emotion/styled';
import isPropValid from '@emotion/is-prop-valid';
import { Link } from 'react-router';

export const MiddleHeading = styled.h2`
  font-size: 21px;
`;

export const MiddleHeadingLink = styled(Link, {
  shouldForwardProp: prop => isPropValid(prop) && prop !== 'zIndex',
})<{ zIndex?: number }>`
  font-size: 21px;
  font-weight: bolder;
  z-index: ${({ zIndex = 0 }) => zIndex};
`;
