import React from 'react';
import './index.css';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ParallaxImages from './components/ParallaxImages';
import RaivenText from './components/RaivenText';
import AboutUsText from './components/AboutUsText';
import MapLocation from './components/MapLocation';
import SearchComponent from './components/SearchComponent';
import Header from './components/Header';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <RaivenText></RaivenText>
      <SearchComponent></SearchComponent>
      <MapLocation {...{ latitude: 39.933365, longitude: 32.859741 }}></MapLocation>
      <AboutUsText></AboutUsText>
    </div >
    /*
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="/Aboutus" element={<ParallaxImages />} />
        <Route path="/" element={<Header />} />
        <Route path="/" element={<RaivenText />} />
        <Route path="/" element={<SearchComponent />} />
      </Routes>
    </BrowserRouter>
    */
  );
}

export default App;
