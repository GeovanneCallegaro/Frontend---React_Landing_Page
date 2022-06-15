import * as C from './styles';
import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';

export const GoTop = () => {
  return (
    <C.Container href="#" aria-label="Go to top" title="Go to top">
      <KeyboardArrowUp />
    </C.Container>
  );
};
