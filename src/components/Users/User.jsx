import React from 'react';

export const User = ({ id, email, first_name, last_name, avatar}) => (
  <li className='user-item'>
    <div className='user-content'>
      <img width="30px" height="30px" src={avatar} alt="Avatar" className='user-avatar' />
      <div className='user-title'>
          <span className='user-name'>{first_name} {last_name}</span> <br/>
          <span className='user-email'>{email}</span>
      </div>
      <img width="26px" className='action' src="./plus.svg" alt="Action" />
    </div>
  </li>
)