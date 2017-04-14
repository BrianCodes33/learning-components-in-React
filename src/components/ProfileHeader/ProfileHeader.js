import React from 'react';
import '../App/App';
import './ProfileHeader.css'


const ProfileHeader = props => {
  return (
    <div className="header">
      <h3>Name:</h3>
      {props.name}
      <img onClick={props.imgToggle} src={props.images} alt="brian"/>
    </div>
  )
}

export default ProfileHeader;
