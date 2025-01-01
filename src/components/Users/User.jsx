import React from 'react';

export const User = () => (
  <li className='user-item'>
    <div className='user-content'>
      <img width="20px" src="./avatar.jpg" alt="Avatar" className='user-avatar' />
      <div>
        <h3 className=''>Amon Bower</h3>
        <p>
          george.bluth@reqres.in
        </p>
      </div>
      <img width="26px" className='action' src="./plus.svg" alt="Action" />
    </div>
  </li>
)