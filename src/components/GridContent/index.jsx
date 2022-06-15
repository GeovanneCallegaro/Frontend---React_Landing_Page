import * as C from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridContent = ({ title, html, background = false }) => {
  return (
    <SectionBackground background={background}>
      <C.Container>
        <Heading uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <C.Html></C.Html>
        <TextComponent>{html}</TextComponent>
      </C.Container>
    </SectionBackground>
  );
};

GridContent.propTypes = {
  title: P.string.isRequired,
  html: P.string.isRequired,
  background: P.bool,
};
