import React from 'react'

const navbar = ({logoText}) => {
  return (
    <div>
        <div className='logo'>{logoText}</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Profile</li>
        </ul>
    </div>
  )
}

export default navbar