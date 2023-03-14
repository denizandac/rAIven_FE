import React from 'react';
import './index.css';
import TextButton from './components/TextButton';
import VoiceButton from './components/VoiceButton';
import NavBar from './components/NavBar';
import Header from './components/Header';
import ParallaxImages from './components/ParallaxImages';
import RaivenText from './components/RaivenText';
import AboutUsText from './components/AboutUsText';
import MapLocation from './components/MapLocation';
function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ParallaxImages></ParallaxImages>
      <Header></Header>
      <RaivenText></RaivenText>
      <TextButton></TextButton>
      <VoiceButton></VoiceButton>
      <MapLocation {...{ latitude: 51.505, longitude: -0.09 }}></MapLocation>
      <AboutUsText></AboutUsText>
    </div>
  );
}

export default App;
