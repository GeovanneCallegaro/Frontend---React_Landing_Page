import * as C from './styles';
import P from 'prop-types';
import { TextComponent } from '../TextComponent';
import { SectionContainer } from '../SectionContainer';

export const Footer = ({ html }) => {
  return (
    <C.Container>
      <SectionContainer>
        <TextComponent>{html}</TextComponent>
      </SectionContainer>
    </C.Container>
  );
};

Footer.propTypes = {
  html: P.string.isRequired,
};
