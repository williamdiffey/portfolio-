import React from 'react'
import contentsScreen from './images/prekursor.now.sh_(iPhone 6_7_8) - contents.png'
import tagsScreen from './images/prekursor.now.sh_(iPhone 6_7_8) - tags.png'

export default function ProjectFootieText() {
  return (
    <div className='project'>
      <h2>Projects</h2>
      <h3 className='project-title'>FootieText App</h3>
      <p>
        Description: A commissioned work to create a PWA that presents EPL
        football data in the style of 'Ceefax'; a pre-internet TV service from
        the 1970s. Design brief: to present not only scores, league tables etc
        but also player stats and game events; to have a personalised homepage
        for users; to have an number input for selecting pages as per the
        original service.
      </p>
      <p className='created-using'>
        Created using PostgreSQL, Express, React, Node.js.
      </p>
      <ul className='project-links'>
        <li>
          <a
            className='project-link'
            href='https://github.com/williamdiffey/samplesQuiz'
          >
            Live Site (You may log in with username: demo, pw: demo)
          </a>
        </li>
      </ul>

      <ul className='screenshots'>
        <li>
          <img
            alt='contents screen'
            src={contentsScreen}
            class='screenshot'
          ></img>
        </li>
        <li>
          <img alt='tags popout' src={tagsScreen} class='screenshot'></img>
        </li>
      </ul>
    </div>
  )
}
