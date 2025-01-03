import React from 'react';
import { Skeleton } from './Skeleton';
import { User } from './User';

export const Users = ({ items, isLoading, searchValue, onChangeSearchValue, invites, onClickInvite, onClickSendInvites }) => {
  return (
    <div className='users-container'>
      <div className='search'>
        <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='search-icon'>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z" fill="#c0c0c0" />
        </svg>
        <input 
          value={searchValue} 
          onChange={onChangeSearchValue} 
          className='search-input' 
          type="text" 
          placeholder='Find user...' 
        />
      </div>
      {isLoading ? (
        <div className='skeleton-list'>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <ul className='users-list'>
          {items.filter(obj => {
            const fullName = (obj.first_name + obj.last_name).toLowerCase();

            return fullName.includes(searchValue.toLowerCase()) || obj.email.toLowerCase().includes(searchValue.toLowerCase())
          })
          .map((obj) => (
            <User 
              onClickInvite={onClickInvite} 
              isInvited={invites.includes(obj.id)} 
              key={obj.id} 
              {...obj} 
            />
          ))}
        </ul>
      )}
      {
        invites.length > 0 && (
          <button onClick={onClickSendInvites} className='send-invite-btn'>Send invite</button>
        )
      }
    </div>
  )
}