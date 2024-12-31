import React from 'react';
import Skeleton from './Skeleton';

export const Users = ({items, isLoading}) => {
  return (
    <>
      <div className='search'>
        <svg viewBox='0 0 20 20' xmlns='http://www.W3.org/2000/svg'>
          <path></path>
        </svg>
        <input type="text" placeholder='Find user...' />
      </div>
      {isLoading ? (
        <div className='skeleton-list'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className='users-list'>
          <User />
        </ul>
      )}
    </>
  )
}