import React from 'react';
import '../App/App';
import './ProfileHeader.css'

const ProfileHeader = props => {
  return (
    <div className="header">
      <h3>Name:</h3>
      {props.name}
      <img src={props.img} alt="brian"/>
    </div>
  )
}

export default ProfileHeader;
