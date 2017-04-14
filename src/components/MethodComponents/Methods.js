import React, { Component } from 'react';
import '../App/App';

class Methods extends Component {
constructor() {
  super()
  this.state = {
    images: ['https://www.w3schools.com/css/trolltunga.jpg', 'http://delphosherald.com/Images/Images/119344.jpg', 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5_XnQ4TGdKThuVZbggjqY7ylfzCGLJgjZ5R0MY7jmDWptIO48vW8LZD4'] ,
    currentImg: 0
  }
  this.imgToggle2 = this.imgToggle2.bind(this)

}
  imgToggle2()  {
      let currentImg = this.state.currentImg;
      if (this.state.currentImg < this.state.images.length - 1) {
      this.setState({currentImg : currentImg += 1});
    } else {
      this.setState({currentImg : 0});
    }
  }

  render() {
      return (
        <div>
          <img onClick={this.imgToggle2} src={this.state.images[this.state.currentImg]} alt="Johnny"/>
        </div>

      )

  }
}


export default Methods;
