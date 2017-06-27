import PropTypes from 'prop-types';
import React from 'react';
import defaultPhoto from '../assets/images/dPhoto'


export default Bio = (props) => {
  const { name, photo, about} = this.props.user;
  <div>
    <h1  className='nameText'>{name}</h1>
    <img  className='profile-bio-pic'>{photo}</img>
    <p className='about'>{about}</p>
  </div>
}
