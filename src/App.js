import React from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
// import Calendar from './components/Calendar';
// import Details from './components/Details';

import FetchData from './service/FetchData';

import './style.css';
import Footer from "./components/Footer";

class App extends React.Component {

  fetchData = new FetchData();

  state = {
    rocket: 'Falcon 1',
  };

  componentDidMount() {
  }

  updateRocket() {

  }

  render() {
    return (
      <>
        <Header />
        <Main rocket={this.state.rocket}/>
        <Features />
        <Footer />
        {/*<Calendar />*/}
        {/*<Details />*/}
      </>
    );
  }
}

export default App;
