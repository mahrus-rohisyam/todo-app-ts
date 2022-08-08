import React from 'react'

const RegisterPage = () => {
  return (
    <div id="register" className='container flex flex-col items-center justify-center'>
      <div id="form" className='shadow-xl p-24 rounded-xl border-2 border-main-white md:max-w-[50%]'>
        <div className='my-4'>
          <h1>Login</h1>
          <p>Start login to do some cool stuff!</p>
        </div>
        <form action="login" className='flex flex-col gap-2'>
          <input className='bg-[#e4e4e4] p-1 px-2 rounded-lg' type="text" name="email" placeholder="Cool Email" id='email' />
          <input className='bg-[#e4e4e4] p-1 px-2 rounded-lg' type="password" placeholder='Secret Password' name="" id="password" />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  )
}

export default RegisterPage