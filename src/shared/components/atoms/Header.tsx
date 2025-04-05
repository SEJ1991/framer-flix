import styled from '@emotion/styled';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { useState } from 'react';

const Base = styled(motion.header)`
  width: 100%;
  max-width: 1920px;
  height: 70px;
  padding: 8px 20px;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

interface Props {
  children?: React.ReactNode;
}
export function Header({ children }: Props) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    setIsScrolled(latest > 70);
  });

  return (
    <Base
      animate={{
        backgroundColor: isScrolled ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0)',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}
    >
      {children}
    </Base>
  );
}
