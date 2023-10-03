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
import Search_map from './components/Search_map';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <Header></Header>
      <RaivenText></RaivenText>
      <Search_map></Search_map>
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
