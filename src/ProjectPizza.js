import React from 'react'
import Customer from './images/food-van-demo-client.now.sh_contents(iPhone 6_7_8) customer.png'
import Admin from './images/food-van-demo-client.now.sh_contents(iPhone 6_7_8) admin.png'
import iPad from './images/food-van-demo-client.now.sh_contents(iPad).png'

export default function ProjectPizza() {
  return (
    <div className='project'>
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
            href='https://food-van-demo-client.now.sh/signin'
          >
            Demo Site
          </a>
        </li>
      </ul>

      <ul className='screenshots'>
        <li>
          <img
            alt='contents screen'
            src={Customer}
            className='screenshot'
          ></img>
        </li>
        <li>
          <img
            alt='contents screen on ipad'
            src={iPad}
            className='ipad-screenshot'
          ></img>
        </li>
        <li>
          <img alt='tags popout' src={Admin} className='screenshot'></img>
        </li>
      </ul>
    </div>
  )
}
