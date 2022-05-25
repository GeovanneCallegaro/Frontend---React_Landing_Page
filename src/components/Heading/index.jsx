import * as C from './styles';
import P from 'prop-types';

export const Heading = ({ children, light = false }) => {
  return <C.Title light={light}>{children}</C.Title>;
};

Heading.propTypes = {
  children: P.node.isRequired,
  light: P.bool.isRequired,
};
