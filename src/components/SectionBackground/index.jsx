import * as C from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';

export const SectionBackground = ({ children, background = false }) => {
  return (
    <C.Container background={background}>
      <SectionContainer>{children}</SectionContainer>
    </C.Container>
  );
};

SectionBackground.propTypes = {
  children: P.node.isRequired,
  background: P.bool,
};
