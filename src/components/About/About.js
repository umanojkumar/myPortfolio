import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social1, social2, picture } = about

  return (
    <div className='about center'>
      <div className='about__header'>
        {picture && (
          <img
            src={
              picture.startsWith('http')
                ? picture
                : `${process.env.PUBLIC_URL}/images/${picture}`
            }
            alt={name}
            className='about__picture'
          />
        )}

    <div className='about__intro'>
      {name && (
        <h1>
          Hi, I am <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>
      </div>
      </div>

      <div className='about__contact center'>
          {social1 && (
          <>
            {social1.github && (
              <a
                href={social1.github}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}
          </>
        )}


        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social2 && (
          <>
            {social2.linkedin && (
              <a
                href={social2.linkedin}
                target='_blank'
                rel='noopener noreferrer'
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
