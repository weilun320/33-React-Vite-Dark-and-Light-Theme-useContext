import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

export default function Footer() {
  const theme = useContext(ThemeContext).theme;
  const footerMessage = theme === "light" ? " Enjoy the light theme." : " Have a great time with the dark theme.";

  return (
    <div>
      Thank you for visiting!
      {footerMessage}
    </div>
  );
}