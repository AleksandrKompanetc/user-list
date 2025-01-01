import React from 'react';

export const User = () => (
  <li className='user-item'>
    <div className='user-content'>
      <img width="30px" height="30px" src="./avatar.jpg" alt="Avatar" className='user-avatar' />
      <div className='user-title'>
          <span className='user-name'>Amon Bower</span> <br/>
          <span>george.bluth@reqres.in</span>
      </div>
      <img width="26px" className='action' src="./plus.svg" alt="Action" />
    </div>
  </li>
)