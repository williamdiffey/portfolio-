import React from 'react'
import Search from './images/islington-english-nutrition.herokuapp.com_(iPhone 6_7_8) Search.png'
import Results from './images/islington-english-nutrition.herokuapp.com_(iPhone 6_7_8) Result.png'

export default function ProjectNutri() {
  return (
    <div className='project'>
      <h2>Projects</h2>
      <h3 className='project-title'>Islington Education Nutrition App</h3>
      <p>
        Description: A simplified nutrition searching app for students of my
        school to use as part of a project on healthy eating. Design brief: a
        simple, responsive UX that young children can use without confusion or
        frustration.
      </p>
      <p className='created-using'>Created using React</p>
      <ul className='project-links'>
        <li>
          <a
            className='project-link'
            href='https://github.com/williamdiffey/nutrition_app'
          >
            Github
          </a>
        </li>

        <li>
          <a
            className='project-link'
            href='https://islington-english-nutrition.herokuapp.com/'
          >
            Live Site
          </a>
        </li>
      </ul>

      <ul className='screenshots'>
        <li>
          <img alt='contents screen' src={Search} class='screenshot'></img>
        </li>
        <li>
          <img alt='tags popout' src={Results} class='screenshot'></img>
        </li>
      </ul>
    </div>
  )
}
