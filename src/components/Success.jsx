import React from 'react';

export const Success = ({count}) => {
  return (
    <div className='success-block'>
      <img src="" alt="" />
      <h3>Success!</h3>
      <p>For all {count} users sended inviting</p>
      <button onClick={() => window.location.reload()} className='send-invite-btn'>Back</button>
    </div>
  )
}