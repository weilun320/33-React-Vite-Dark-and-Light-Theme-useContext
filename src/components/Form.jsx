import React, { useContext } from 'react';
import ThemeContext from '../ThemeContext';

export default function Form() {
  const currentTheme = useContext(ThemeContext).theme;
  const setTheme = useContext(ThemeContext).setTheme;
  const updatedTheme = currentTheme === "light" ? "dark" : "light";
  const title = useContext(ThemeContext).title;

  return (
    <Panel title={title}>
      <Button>Sign up</Button>
      <Button>Log in</Button>
      <button onClick={() => setTheme(updatedTheme)}>
        Toggle Theme
      </button>
    </Panel>
  );
}

function Panel({ title, children }) {
  const theme = useContext(ThemeContext).theme;
  const className = "panel-" + theme;
  const image = theme === "light" ? "sun" : "moon";

  return (
    <section className={className}>
      <div>
        <h1>{title}</h1>
        {children}
      </div>
      <div>
        <img alt={image} height="100" src={"./assets/" + image + ".png"} />
      </div>
    </section>
  );
}

function Button({ children }) {
  const theme = useContext(ThemeContext).theme;
  const className = "button-" + theme;
  const setTitle = useContext(ThemeContext).setTitle;

  return (
    <button className={className} onClick={() => setTitle(children)}>
      {children}
    </button>
  );
}