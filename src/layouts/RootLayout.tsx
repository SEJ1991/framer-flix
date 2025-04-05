import styled from '@emotion/styled';
import { Outlet } from 'react-router';
import { Header, Navigator } from '../shared/components';

const Base = styled.div`
  width: 100%;
  max-width: 1920px;
  min-height: 100dvh;
  margin: 0 auto;
  position: relative;
  padding: 80px 20px 30px;
`;

export function RootLayout() {
  return (
    <Base>
      <Header>
        <Navigator />
      </Header>
      <Outlet />
    </Base>
  );
}
