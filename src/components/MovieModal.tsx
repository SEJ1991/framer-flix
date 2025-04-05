import { MovieDetail } from '../types';
import { FlexBox, XCircleIcon } from '../shared/components';
import { makeBgPath } from '../shared/utils/path';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';
import { useEffect } from 'react';

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 30;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: grid;
  place-content: center;
  grid-template-columns: 70dvw;
  z-index: 35;

  @media (max-width: 1024px) {
    grid-template-columns: 95dvw;
  }
`;

const Base = styled(motion.div)<{ bgImage: string }>`
  position: relative;
  aspect-ratio: 2 / 1;
  border-radius: 8px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.7)),
    url(${({ bgImage }) => bgImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
  padding: 5% 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Title = styled.h2`
  font-size: 30px;

  @media (max-width: 1024px) {
    font-size: 26px;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  overflow-y: auto;
  padding: 16px;
  border-radius: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  flex-grow: 1;
`;

const Overview = styled.p`
  font-size: 20px;

  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Info = styled.dl`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 50px;
`;

const Dt = styled.dt`
  font-size: 20px;

  @media (max-width: 540px) {
    font-size: 16px;
  }
`;

const Dd = styled.dd`
  font-size: 18px;
  font-weight: bolder;

  @media (max-width: 540px) {
    font-size: 12px;
  }
`;

const CloseButton = styled(XCircleIcon)`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 8px;
`;

interface Props {
  movie: MovieDetail;
  onClickClose: () => void;
}
export function MovieModal({
  movie: { title, overview, budget, revenue, runtime, backdrop_path, release_date },
  onClickClose,
}: Props) {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);
  return (
    <>
      <Overlay
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
      <Wrapper>
        <Base
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.4, type: 'spring' }}
          bgImage={makeBgPath(backdrop_path)}
        >
          <Title>{title}</Title>
          <Body>
            <Overview>{overview}</Overview>
            <Info>
              <FlexBox direction='column' align='center' justify='center'>
                <Dt>🔥BUDGET🔥</Dt>
                <Dd>{budget.toLocaleString()}</Dd>
              </FlexBox>
              <FlexBox direction='column' align='center' justify='center'>
                <Dt>🔥REVENUE🔥</Dt>
                <Dd>{revenue.toLocaleString()}</Dd>
              </FlexBox>
              <FlexBox direction='column' align='center' justify='center'>
                <Dt>🔥RUNTIME🔥</Dt>
                <Dd>{runtime.toLocaleString()}</Dd>
              </FlexBox>
              <FlexBox direction='column' align='center' justify='center'>
                <Dt>🔥RELEASE🔥</Dt>
                <Dd>{release_date}</Dd>
              </FlexBox>
            </Info>
          </Body>
          <CloseButton onClick={onClickClose} />
        </Base>
      </Wrapper>
    </>
  );
}
