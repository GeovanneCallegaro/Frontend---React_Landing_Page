import * as C from './styles';
import P from 'prop-types';
import { SectionBackground } from '../SectionBackground';
import { Heading } from '../Heading';
import { TextComponent } from '../TextComponent';

export const GridImage = ({ background = false, title, description, grid }) => {
  return (
    <SectionBackground background={background}>
      <C.Container>
        <Heading size="huge" uppercase colorDark={!background} as="h2">
          {title}
        </Heading>
        <TextComponent>{description}</TextComponent>
        <C.Grid>
          {grid.map((element) => (
            <C.GridElement key={`${element.srcImg}${element.altText}`}>
              <C.Image src={element.srcImg} alt={element.altText} />
            </C.GridElement>
          ))}
        </C.Grid>
      </C.Container>
    </SectionBackground>
  );
};

GridImage.propTypes = {
  background: P.bool,
  title: P.string.isRequired,
  description: P.string.isRequired,
  grid: P.arrayOf(
    P.shape({
      altText: P.string.isRequired,
      srcImg: P.string.isRequired,
    }),
  ).isRequired,
};
