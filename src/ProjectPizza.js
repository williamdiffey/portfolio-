import React from 'react'
import contentsScreen from './images/prekursor.now.sh_(iPhone 6_7_8) - contents.png'
import tagsScreen from './images/prekursor.now.sh_(iPhone 6_7_8) - tags.png'

export default function ProjectPizza() {
  return (
    <div className='project'>
      <h2>Projects</h2>
      <h3 className='project-title'>Doug's Pizza Van App</h3>
      <p>
        Description: A commissioned PWA app for a local pizza van business.
        Design brief: create an app that can be easily edited by the business
        owner via phone; to display location, menu, messages, times of
        operation; to be cleanly designed with a single page view.
      </p>
      <p className='created-using'>
        Created using PostgreSQL, Express, React, Node.js
      </p>
      <ul className='project-links'>
        <li>
          <a className='project-link' href='https://dougs-pizza-nu.now.sh/'>
            Live Customer Site
          </a>
        </li>

        <li>
          <a
            className='project-link'
            href='https://food-van-demo-client.now.sh/'
          >
            Demo Site - please try the editing!
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
