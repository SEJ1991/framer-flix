import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Base = styled(motion.div)`
  width: 100%;
  height: 100%;
  background-color: #1a1a1a;
  border-radius: 8px;
`;

export function Skeleton() {
  return (
    <Base
      animate={{ opacity: [0.3, 0.7, 0.3] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeOut' }}
    />
  );
}
