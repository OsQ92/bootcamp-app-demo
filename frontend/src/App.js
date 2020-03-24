import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Gallery from './Components/Gallery';
import EmailForm from './Components/EmailForm';

import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './Global';
import { lightTheme, darkTheme } from './Themes/Themes';
import { Switcher } from './Themes/Switcher';
import { AppContainer } from './App.styled';

function App() {
  const [theme, toggleTheme] = Switcher();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <React.Fragment>
      <GlobalStyles />
      <AppContainer>
          <Router>
            <NavBar toggleTheme={toggleTheme} />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/email" component={EmailForm} />
              <Route render={() => "404 - not found!"} />
            </Switch>
          </Router>
        </AppContainer>
      </React.Fragment>
    </ThemeProvider>
  );
}

export default App;
