import * as C from './styles';
import P from 'prop-types';
import { MenuLink } from '../MenuLink';

export const NavLinks = ({ links = [] }) => {
  return (
    <C.Container>
      {links.map((link) => (
        <MenuLink {...link} key={link.link} />
      ))}
    </C.Container>
  );
};

NavLinks.propTypes = {
  links: P.arrayOf(
    P.shape({
      children: P.string.isRequired,
      link: P.string.isRequired,
      newTab: P.bool,
    }),
  ),
};
