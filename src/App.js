// App.js
import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';
import { Frame, MenuList, MenuListItem, Monitor, Separator, styleReset } from 'react95';
import original from 'react95/dist/themes/original';
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import myImage from './images/guesshueicon.png';
import Board from './Board';

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  body {
    font-family: 'ms_sans_serif';
  }
`;

const Home = () => {
  const navigate = useNavigate();

  return (
    <div id='main_frame'>
      <GlobalStyles />
      <ThemeProvider theme={original}>
        <center>
          <Frame
            style={{
              height: '500px',
              width: '400px',
              padding: '10px',
            }}
          >
            <br />
            <header>Guess-Hue</header>
            <br />
            <Monitor>
              <img
                src={myImage}
                alt="Inside Monitor"
                style={{ width: '100%', height: '100%' }}
              />
            </Monitor>

            <br /><br />
            <MenuList>
              <MenuListItem onClick={() => navigate('/gameboard')}>
                <center>Play Game</center>
              </MenuListItem>
              <Separator />
              <MenuListItem disabled>Created by Henry & Emma Bryant</MenuListItem>
            </MenuList>
          </Frame>
        </center>
      </ThemeProvider>
    </div>
  );
};

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gameboard" element={<Board />} />
    </Routes>
  </Router>
);

export default App;
