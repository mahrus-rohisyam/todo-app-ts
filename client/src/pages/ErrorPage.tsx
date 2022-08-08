import React from 'react'

const ErrorPage = () => {
  return (
    <div id="error" className='container flex flex-col items-center justify-center text-center'>
      <h1>Error 404, Your requested page doesnt exist.</h1>
      <p>It seems you are lost! let me get you back to the right path <a href="/">Home</a></p>
    </div>
  )
}

export default ErrorPage