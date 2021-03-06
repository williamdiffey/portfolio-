import React from 'react'
import Search from './images/islington-english-nutrition.herokuapp.com_(iPhone 6_7_8) Search.png'
import Results from './images/islington-english-nutrition.herokuapp.com_(iPhone 6_7_8) Result.png'
import iPad from './images/islington-english-nutrition.herokuapp.com_(iPad).png'

export default function ProjectNutri() {
  return (
    <div className='project'>
      <h3 className='project-title'>Islington Education Nutrition App</h3>
      <p>
        A simplified nutrition searching app for students of my school to use as
        part of a project on healthy eating. <br /> Design brief: a simple,
        responsive UX that young children can use without confusion or
        frustration.
      </p>
      <p className='created-using'>Created using React</p>
      <ul className='project-links'>
        <li>
          <a
            className='project-link'
            href='https://islington-english-nutrition.herokuapp.com/'
          >
            Live Site
          </a>
        </li>

        <li>
          <a
            className='project-link'
            href='https://github.com/williamdiffey/nutrition_app'
          >
            Github
          </a>
        </li>
      </ul>

      <ul className='screenshots'>
        <li>
          <img alt='contents screen' src={Search} className='screenshot'></img>
        </li>
        <li>
          <img
            alt='contents screen on ipad'
            src={iPad}
            className='ipad-screenshot'
          ></img>
        </li>
        <li>
          <img alt='tags popout' src={Results} className='screenshot'></img>
        </li>
      </ul>
    </div>
  )
}
