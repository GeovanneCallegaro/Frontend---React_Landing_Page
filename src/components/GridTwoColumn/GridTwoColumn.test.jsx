import { renderTheme } from '../../styles/render-theme';
import { GridTwoColumn } from '.';

describe('<GridTwoColumn />', () => {
  it('should render two column grid', () => {
    const { container } = renderTheme(
      <GridTwoColumn
        title="GridTwoColumn"
        text="texto"
        srcImg="assets/images/javascript.svg"
      >
        Children
      </GridTwoColumn>,
    );
    expect(container).toMatchSnapshot();
  });
});
