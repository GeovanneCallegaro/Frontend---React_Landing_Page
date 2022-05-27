import { renderTheme } from '../../styles/render-theme';
import { NavLinks } from '.';
import { screen } from '@testing-library/react';
import mockLinks from './mock';
import { theme } from '../../styles/theme';

describe('<NavLinks />', () => {
  it('should render links', () => {
    renderTheme(<NavLinks links={mockLinks} />);
    expect(screen.getAllByRole('link')).toHaveLength(mockLinks.length);
  });

  it('should not render links', () => {
    renderTheme(<NavLinks />);
    expect(screen.queryAllByText(/links/i)).toHaveLength(0);
  });

  it('should render links', () => {
    renderTheme(<NavLinks links={mockLinks} />);
    expect(screen.getByText(/link 10/i).parentElement).toHaveStyleRule(
      'flex-flow',
      'column nowrap',
      {
        media: theme.media.lteMedium,
      },
    );
  });

  it('should match snapshot', () => {
    const { container } = renderTheme(<NavLinks links={mockLinks} />);
    expect(container).toMatchSnapshot();
  });
});
