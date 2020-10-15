import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
// import Calendar from './components/Calendar';

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
    </>
  );
}

export default App;
