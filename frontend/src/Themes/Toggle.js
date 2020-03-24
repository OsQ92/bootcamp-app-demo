import React from 'react'
import { func, string } from 'prop-types';
import {ToggleContainer} from './Toggle.styled';
// Import a couple of SVG files we'll use in the design: https://www.flaticon.com
//import { ReactComponent as MoonIcon } from 'icons/moon.svg';
//import { ReactComponent as SunIcon } from 'icons/sun.svg';

const Toggle = ({ toggleTheme }) => {
  return (
    <ToggleContainer onClick={toggleTheme} >
        TOGGLE
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle;