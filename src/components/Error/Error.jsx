import React from 'react'
import "./Error.css"

const Error = () => {
  return (
    <div id='error'>
      <img src="/images/icon-error.svg" alt="Error" />
      <h6>Something went wrong</h6>
      <p>We couldn't connect to the server (API error). Please try again in a few moments.</p>
      <a href='/'> 
        <img src="/images/icon-retry.svg" alt="Icon retry" />
        Retry
      </a>
    </div>
  )
}

export default Error
