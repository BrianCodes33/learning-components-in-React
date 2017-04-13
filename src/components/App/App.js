import React, { Component } from 'react';
import './App.css';
import ProfileContent from '../ProfileContent/ProfileContent';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import SocialContent from '../SocialContent/SocialContent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Brian',
      img: 'https://www.w3schools.com/css/trolltunga.jpg',
      age: 31,
      height: 160,
      city: 'LA',
      bio: "I'm a boss"
    }
  }
  render () {
    return (
      <div>
        <ProfileHeader name={this.state.name} img={this.state.img} />
        <ProfileContent age={this.state.age} height={this.state.height} city={this.state.city} bio={this.state.bio} />
        <SocialContent />
      </div>
    )
  }
}

export default App;
