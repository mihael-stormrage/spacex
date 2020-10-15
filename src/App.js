import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
// import Calendar from './components/Calendar';
// import Details from './components/Details';

import './style.css';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Footer />
      {/*<Calendar />*/}
      {/*<Details />*/}
    </>
  );
}

export default App;
