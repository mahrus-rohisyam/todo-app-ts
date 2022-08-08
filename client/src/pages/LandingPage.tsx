import React from 'react'
import LayerComponent from '../components/LayerComponent'
import ProjectPost from '../components/ProjectPost'

const LandingPage = () => {
  const image = {
    alt: 'Alt Image',
    src: 'https://gist.github.com/mahrus-rohisyam/5a8a832801d2e2afc6ad65c4340fd5a7/raw/0d673db96303c7fdeffde6a259e3f13fce79da20/todo-list.svg'
  }
  return (
    <>
    <LayerComponent header footer>
      <section id="welcome" className='container'>
        <img className='rounded-full shadow-lg border-4 border-main-orange my-4' src="https://media-exp1.licdn.com/dms/image/C4D03AQEwQp5Nona9XA/profile-displayphoto-shrink_200_200/0/1655175434420?e=1665014400&v=beta&t=PprU_JDSe3EBeviWR6Ix0oW686CT57uBm0hkRRr7INs" alt="Mahrus Sayid" />
        <h2>Mahrus Sayid</h2>
        <h3 className='subtitle'>Fullstack Software Engineer.</h3>
        <p>I love some geeky stuff and adventure all around places.</p>
      </section>
      <section id="projects" className="container">
        <h2>Here is some of my projects.</h2>
        <p>Please see my masterpiece made from my sweat and many cups of coffee which actually makes me anxious.</p>
        <div className="py-6">
          <ProjectPost title='Todo App' description='Simple Todo App, implements CRUD.' link='/todo-app' image={image} />
        </div>
      </section>
      <section id="about" className="container">
        <h2>Contacts</h2>
        <p>I would be happy if you are interested with some of my projects nor just contact me to keep in touch. <span className='highlight'>Here is some of my social media.</span></p>
        <ul className='social-links'>
          <li>
            <a className="icon-linkedin" href="https://www.linkedin.com/in/mahrus" target="_blank" rel="noopener noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a id="profile-link" className="icon-github" href="https://github.com/mahrus-rohisyam" target="_blank" rel="noopener noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a className="icon-instagram" href="https://www.instagram.com/mahrus.rohisyam/" target="_blank" rel="noopener noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a className="icon-email" href="mailto:mahrusaim@gmail.com" target="_blank" rel="noopener noreferrer" >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              <span>Email</span>
            </a>
          </li>
        </ul>
      </section>
    </LayerComponent>
    </>
  )
}

export default LandingPage