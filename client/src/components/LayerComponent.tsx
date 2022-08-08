import React from 'react'

type Props = {
  children: React.ReactNode
  header?: boolean
  footer?: boolean
}

const LayerComponent:React.FC<Props> = ({children, footer, header}) => {
  return (
    <div className="min-h-[100vh]">
      {header && 
        <nav id='navbar'>
          <a href="/"><h2 className='text-main-gray sticky'>Mahrus Sayid<span className='text-main-orange'>.</span></h2></a>
          <ul>
            <li><a href="/#welcome">Home</a></li>
            <li><a href="/#about">About</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li><a href="/#projects">Apps</a></li>
          </ul>
        </nav>
      }
      <div className=''>
      {children}
      </div>
      {footer && 
        <footer id='footer'>
          <p>Created with 2 cups of coffe and 1 hour indie band playlist ©️ <span id="copyright">2021</span> by <a href="/">Russ</a></p>
        </footer>
      }
    </div>
  )
}

export default LayerComponent