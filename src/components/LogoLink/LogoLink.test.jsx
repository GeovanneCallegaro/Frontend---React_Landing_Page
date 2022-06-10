import { renderTheme } from '../../styles/render-theme';
import { LogoLink } from '.';
import { screen } from '@testing-library/react';

describe('<LogoLink />', () => {
  it('should render text logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" />);
    const heading = screen.getByRole('heading', { name: 'Olá mundo' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });

  it('should render image logo', () => {
    renderTheme(<LogoLink link="#target" text="Olá mundo" image="image.jpg" />);
    expect(screen.getByRole('img', { name: 'Olá mundo' })).toHaveAttribute(
      'src',
      'image.jpg',
    );
  });

  it('should render image logo', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Olá mundo" image="image.jpg" />,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
