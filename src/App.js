import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { GlobalStyles } from './layouts/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './layouts/theme';
import { Router } from '@reach/router';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import CbdPage from './pages/CbdPage';
import CbdItem from './pages/CbdItem';
import Footer from './layouts/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
      <Router>
        <HomePage path="/" />
        <CbdPage path="/cbdoil" />
        <CbdItem path="/:id" />
        <Login path="/login" />
        <SignUp path="/signup" />
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
