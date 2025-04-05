import styled from '@emotion/styled';
import { motion } from 'framer-motion';

export const PageFrame = styled.section<{ padding?: string }>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
  padding: ${({ padding = '0' }) => padding};
`;

export const Box = styled(motion.div)<{
  top?: string;
  width?: string;
  height?: string;
  position?: React.CSSProperties['position'];
  padding?: string;
}>`
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  position: ${({ position = 'relative' }) => position};
  padding: ${({ padding = '0' }) => padding};
  top: ${({ top = '0' }) => top};
`;

export const FlexBox = styled.div<{
  width?: string;
  height?: string;
  direction?: React.CSSProperties['flexDirection'];
  gap?: string;
  justify?: React.CSSProperties['justifyContent'];
  align?: React.CSSProperties['alignItems'];
  position?: React.CSSProperties['position'];
  padding?: string;
}>`
  display: flex;
  flex-direction: ${({ direction = 'row' }) => direction};
  gap: ${({ gap = '0' }) => gap};
  width: ${({ width = '100%' }) => width};
  height: ${({ height = '100%' }) => height};
  justify-content: ${({ justify = 'flex-start' }) => justify};
  align-items: ${({ align = 'stretch' }) => align};
  position: ${({ position = 'relative' }) => position};
  padding: ${({ padding = '0' }) => padding};
`;
