import React from 'react';
import '../App/App';
import './ProfileContent.css'

const ProfileContent = props => {
  return (
    <div className="content">
      <h3>Age:</h3>
      { props.age }
      <h3>Weight</h3>
      { props.weight }
      <h3>City</h3>
      { props.city }
      <h3>Bio</h3>
      { props.bio }
    </div>
  )
}

export default ProfileContent;
