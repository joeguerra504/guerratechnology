import React, { Component } from 'react';
import './App.css';

import frontLogo from '../public/assets/images/gtech.jpg';

const IMAGES = [
  {
    title: '💦 ',
    url: frontLogo,
  }
];

import HiddenImages from './HiddenImages';

class App extends Component {
  state = {
    imageIdx: 0,
    header: 'Guerra Technology',
  };
  render() {
    const imageUrl = IMAGES[this.state.imageIdx].url;
    const heroImageStyle = {
      backgroundImage: `url('${imageUrl}')`,
    };
    return (
      <div className="ui middle aligned grid">
        <div className="row">
          <div className="hero-image" style={heroImageStyle}>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
