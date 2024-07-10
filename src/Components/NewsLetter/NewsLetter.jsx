import React from 'react'
import '../NewsLetter/NewsLetter.css'
const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Unlock Exclusive Deals in Your Inbox </h1>
      <p>Subscribe to our newsletter and stay updated</p>
      <div>
        <input type='email' placeholder='Your Email Id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}

export default NewsLetter
