import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router';

const Base = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
`;

const NavLink = styled(Link)`
  position: relative;
  font-size: 13px;

  @media (max-width: 400px) {
    font-size: 11px;
  }
`;

const Indicator = styled(motion.div)`
  position: absolute;
  left: 50%;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #fff;
  transform: translateX(-50%);
  background-color: tomato;
`;

export function Navigator() {
  const { pathname } = useLocation();

  return (
    <Base>
      {NAVS.map(({ to, name }) => {
        const isActive = to === pathname;
        return (
          <li key={to}>
            <NavLink to={to}>
              {name}
              {isActive && (
                <Indicator
                  layoutId='nav-indicator'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </NavLink>
          </li>
        );
      })}
    </Base>
  );
}

const NAVS = [
  { to: '/', name: 'HOME' },
  { to: '/popular', name: 'POPULAR' },
  { to: '/coming-soon', name: 'COMING SOON' },
  { to: '/now-playing', name: 'NOW PLAYING' },
];
