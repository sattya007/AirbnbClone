import React from 'react';
import './SearchPage.css';
import SearchResult from './SearchResult';

function SearchPage() {
  return (
    <div className='searchPage'>
      <div className='searchPage__info'>
         <p>62 stays . 26 august to 30 august . 2 guest</p>
         <h1>Stays nearby</h1>
         <button type="text">
          Cancellation Flexibility</button>
          <button type="text">
          Type of place</button>
          <button type="text">
          Price</button>
          <button type="text">
          Rooms and Beds</button>
          <button type="text">
          More filters</button>
      </div>
      <SearchResult/>
    </div>
  )
}

export default SearchPage;
