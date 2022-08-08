import React from 'react'

const HeaderComponent = () => {
  return (
    <>
    <header id='header'></header>
      <nav id='navbar'>
        <h1>Mahrus Sayid<span className='text-orange-500'>.</span></h1>
        <ul>
          <li><a href="#welcome">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/todo-app">Todo App</a></li>
        </ul>
      </nav>
    </>
  )
}

export default HeaderComponent