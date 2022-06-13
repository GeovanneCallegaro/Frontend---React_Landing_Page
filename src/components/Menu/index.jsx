import * as C from './styles';
import P from 'prop-types';
import { SectionContainer } from '../SectionContainer';
import { LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useEffect, useState } from 'react';

export const Menu = ({ links = [], logoData }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', function menuIsOpen() {
      setIsVisible(false);
    });

    return () => {
      window.removeEventListener('resize', function menuIsOpen() {});
    };
  }, []);

  return (
    <>
      <C.Button
        onClick={() => setIsVisible(true)}
        visible={isVisible}
        aria-label="Open/Close menu"
      >
        {isVisible ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </C.Button>
      <C.Container visible={isVisible} onClick={() => setIsVisible(false)}>
        <SectionContainer>
          <C.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </C.MenuContainer>
        </SectionContainer>
      </C.Container>
    </>
  );
};

Menu.propTypes = {
  ...NavLinks.propTypes,
  logoData: P.shape(LogoLink.propTypes).isRequired,
};
