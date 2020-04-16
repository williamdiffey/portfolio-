import React from 'react'
import contentsScreen from './images/prekursor.now.sh_(iPhone 6_7_8) - contents.png'
import tagsScreen from './images/prekursor.now.sh_(iPhone 6_7_8) - tags.png'
import iPad from './images/prekursor.now.sh_(iPad).png'

export default function ProjectPrekusor() {
  return (
    <div className='project'>
      <h2>Projects</h2>
      <h3 className='project-title'>Prekursor Gallery Site</h3>
      <p>
        This PWA was made to showcase the images and video of a collective of
        artists operating in Seoul, Korea.
        <br />
        Design brief: to use design to complement the artists' work; to create a
        'tag' system that would allow users to navigate the work by topic; to be
        able to create pages with a simple JSON file; to randomize order of
        contents.
      </p>
      <p className='created-using'>Created using React, CSS animations</p>
      <ul className='project-links'>
        <li>
          <a className='project-link' href='https://prekursor.now.sh/'>
            Live Page
          </a>
        </li>
        <li>
          <a
            className='project-link'
            href='https://github.com/williamdiffey/samplesQuiz'
          >
            Github
          </a>
        </li>
      </ul>
      <ul className='screenshots'>
        <li>
          <img
            alt='contents screen'
            src={contentsScreen}
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
          <img alt='tags popout' src={tagsScreen} className='screenshot'></img>
        </li>
      </ul>
    </div>
  )
}
