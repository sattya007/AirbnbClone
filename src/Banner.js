import React, { useState } from 'react'
import './Banner.css'
import { Button } from '@mui/material'
import Search from './Search';

function Banner() {
  const [showSearch,setShowSearch] = useState(false);
  return (
    <div className='banner'>
      <div className='banner__search'>
        {showSearch && <Search />}
          <Button onClick={()=>setShowSearch(!showSearch)} className='banner__searchButton' varient='outlined'>{showSearch ? "Hide" : "Search Dates"}</Button>
      </div>
      <div className='banner__info'>
            <h1>Get out and stretch your imagination</h1>
            <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
      </div>
      <Button variant='outlined'>Explore Nearby</Button>
    </div>
  )
}

export default Banner
