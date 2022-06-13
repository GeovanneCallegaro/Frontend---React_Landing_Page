import * as C from './styles';
import P from 'prop-types';

export const TextComponent = ({ children }) => {
  return <C.Container dangerouslySetInnerHTML={{ __html: children }} />;
};

TextComponent.propTypes = {
  children: P.node.isRequired,
};
