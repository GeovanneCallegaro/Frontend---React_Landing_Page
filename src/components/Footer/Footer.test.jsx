import { renderTheme } from '../../styles/render-theme';
import { Footer } from '.';

describe('<Footer />', () => {
  it('should render', () => {
    const { container } = renderTheme(<Footer html={<h1>Olá</h1>} />);
    expect(container).toMatchSnapshot();
  });
});
