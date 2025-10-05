import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className='card'>
        <img src="https://imgs.search.brave.com/URgRXI0RrbAdUL95WkeoZDtrE-L8cybgHm05T7Az0Hg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvd29y/ay92aWRlby1mb3It/cHJvZHVjdC1wb3N0/ZXIud2VicA" alt="image" />
        <h1>{props.title}</h1>
        <p>{props.description}</p>
    </div>
  )
}

export default Card