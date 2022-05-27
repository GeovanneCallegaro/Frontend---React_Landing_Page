import * as C from './styles';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
  return <C.Container>{children}</C.Container>;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
