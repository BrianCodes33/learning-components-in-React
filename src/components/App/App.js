import React, { Component } from 'react';
import './App.css';
import ProfileContent from '../ProfileContent/ProfileContent';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import SocialContent from '../SocialContent/SocialContent';
import Methods from '../MethodComponents/Methods'


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Brian',
      images: ['https://www.w3schools.com/css/trolltunga.jpg', 'http://delphosherald.com/Images/Images/119344.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5_XnQ4TGdKThuVZbggjqY7ylfzCGLJgjZ5R0MY7jmDWptIO48vW8LZD4'] ,
      age: 31,
      weight: 160,
      city: 'LA',
      bio: "I'm a boss",
      currentImg: 0
    }
    this.imgToggle = this.imgToggle.bind(this)
  }

  imgToggle()  {
      let currentImg = this.state.currentImg;
      if (this.state.currentImg < this.state.images.length - 1) {
      this.setState({currentImg : currentImg += 1});
    } else {
      this.setState({currentImg : 0});
    }
  }

  render () {

    return (
      <div>
        <ProfileHeader name={this.state.name} images={this.state.images[this.state.currentImg]} imgToggle={this.imgToggle}/>
        <ProfileContent age={this.state.age} weight={this.state.weight} city={this.state.city} bio={this.state.bio} />
        <SocialContent />
        <Methods /><Methods /><Methods />
      </div>
    )
  }
}

export default App;
