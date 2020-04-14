import React from 'react'
import { useState } from 'react'
import WDicon from './images/WDicon.png'

export default function NavBar(props) {
  const [condition, setCondition] = useState(false)

  return (
    <div className='nav-bar'>
      <img
        alt='William Diffey Logo'
        src={WDicon}
        width='100'
        height='100'
        class='logo'
      ></img>

      <div
        onClick={() => setCondition(!condition)}
        className={condition ? 'burger_toggled' : 'burger'}
      >
        <div className='bar1'></div>
        <div className='bar2'></div>
        <div className='bar3'></div>
      </div>

      <div className={condition ? 'menu-popout-toggled' : 'menu-popout'}>
        <ul className='nav-links'>
          <li>
            <a
              href='https://github.com/williamdiffey'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              Github
            </a>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/williamdiffey/'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              LinkedIn
            </a>
          </li>

          <li>
            <a
              href='https://www.linkedin.com/in/williamdiffey/'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              Render Art
            </a>
          </li>

          <li>
            <a
              href='https://github.com/williamdiffey'
              className='link'
              rel='noopener noreferrer'
              target='_blank'
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
