import styled from '@emotion/styled';
import { Skeleton } from './atoms/Skeleton';
import { Grid } from './styleds/Lists';

const Item = styled.div`
  aspect-ratio: 2 / 3;
`;

interface Props {
  length?: number;
}
export function SkeletonsGrid({ length = 15 }: Props) {
  return (
    <Grid>
      {Array.from({ length }).map((_, index) => (
        <Item key={index}>
          <Skeleton />
        </Item>
      ))}
    </Grid>
  );
}
