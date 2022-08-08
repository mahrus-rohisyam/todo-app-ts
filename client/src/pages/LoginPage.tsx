import React, { ChangeEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import IUser from '../interfaces/IUser'

const LoginPage = () => {
  const [userName, setUserName] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [user, setUser] = useState<IUser>()

  const loginHandler = () => {
    let _user: IUser = {
      _id: Date.now(),
      username: userName,
      role: 'user'
    }

    setUserName('')
    setPassword('')
    setUser(_user)

    checkLocalUser(_user)
  }

  const checkLocalUser = async (user: IUser) => {
    let currentUser = await localStorage.getItem('CURRENT_USER')
    currentUser = JSON.parse(String(currentUser))

    if(!currentUser){
      console.log('There is no user')
      await saveLocalUser(user)
    } else {
      console.log('There is a user', currentUser)
    }
  }

  const saveLocalUser = async (user: IUser) => {
    await localStorage.setItem('CURRENT_USER', JSON.stringify(user))
    console.log('User saved successfully');
  }

  return (
    <div id="login" className='container flex flex-col items-center justify-center'>
      <div id="form" className='shadow-xl p-24 rounded-xl border-2 border-main-white md:max-w-[50%]'>
        <div className='my-4'>
          <h1>Login</h1>
          <p>Start login to do some cool stuff!</p>
        </div>
        <form className='flex flex-col gap-2'>
          <input className='bg-[#e4e4e4] p-1 px-2 rounded-lg' onChange={(e) => {setUserName(e.target.value)}} type="text" placeholder="Cool Email" id='email' />
          <input className='bg-[#e4e4e4] p-1 px-2 rounded-lg' onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder='Secret Password' id="password" />
        </form>
          <button className="p-2 flex justify-center w-full" onClick={loginHandler} type="submit">Login</button>
        <p>Don't have an account? Take it easy and register within 2 minutes here <Link to='/register'>Register</Link></p>
      </div>
    </div>
  )
}

export default LoginPage