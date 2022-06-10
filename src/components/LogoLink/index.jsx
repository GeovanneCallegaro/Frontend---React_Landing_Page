import * as C from './styles';
import P from 'prop-types';
import { Heading } from '../Heading';

export const LogoLink = ({ text, image = '', link }) => {
  return (
    <Heading size="small" uppercase>
      <C.Container href={link}>
        {!!image && <img srcSet={image} alt={text} />}
        {!image && text}
      </C.Container>
    </Heading>
  );
};

LogoLink.propTypes = {
  text: P.string.isRequired,
  image: P.string,
  link: P.string.isRequired,
};
