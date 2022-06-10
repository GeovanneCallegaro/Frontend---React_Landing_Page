import * as C from './styles';
import P from 'prop-types';

export const SectionContainer = ({ children }) => {
  return <C.Container>{children}</C.Container>;
};

SectionContainer.propTypes = {
  children: P.node.isRequired,
};
