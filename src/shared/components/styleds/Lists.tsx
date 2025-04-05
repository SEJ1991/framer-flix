import styled from '@emotion/styled';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 32px;
  width: 100%;
  height: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 28px;
  }

  @media (max-width: 540px) {
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    gap: 24px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fit, minmax(75px, 1fr));
    gap: 20px;
  }
`;
