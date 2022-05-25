import { renderTheme } from '../../styles/render-theme';
import Home from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';

test('renders learn react link', () => {
  const { debug } = renderTheme(<Home />);
  const headingContainer = screen.getByRole('heading', {
    name: 'Oi',
  }).parentElement;

  expect(headingContainer).toHaveStyle({
    background: theme.mainBg,
  });
  debug();
});
