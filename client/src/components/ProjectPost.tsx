import React from 'react'

type Props = {
  title: string,
  description: string,
  image: {
    src: string,
    alt: string,
  },
  link: string,
}

const ProjectPost:React.FC<Props> = ({title, description, link, image}) => {
  return (
    <div className='bg-main-black rounded-xl w-72'>
      <a href={link}>
        <img className='rounded-xl resize' src={image.src} alt={image.alt} />
        <div className='text-center py-5'>
          <h2 className='subtitle'>{title}</h2>
          <p className='description'>{description}</p>
        </div>
      </a>
    </div>
  )
}

export default ProjectPost