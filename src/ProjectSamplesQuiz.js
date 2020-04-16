import React from 'react'
import Question from './images/_T__Coding_samplesQuiz_index.html(iPhone 6_7_8) Question.png'
import Feedback from './images/_T__Coding_samplesQuiz_index.html(iPhone 6_7_8) Feedback.png'
import iPad from './images/_T__Coding_samplesQuiz_index.html(iPad).png'

export default function ProjectSamplesQuiz() {
  return (
    <div className='project'>
      <h3 className='project-title'>Jungle Sample Quiz</h3>
      <p>
        Tracking down samples used in music is something that has spawned
        numerous websites, facebook groups and forums. Many a night’s sleep has
        been lost trying to track down an elusive breakbeat or vocal sample.
        This app allows lovers of drum & bass to test their knowledge and
        hopefully inspire a few to use some of these samples to make more great
        music.
      </p>
      <p className='created-using'>
        Created using JQuery, Javascript, HTML/CSS
      </p>
      <ul className='project-links'>
        <li>
          <a
            className='project-link'
            href='https://williamdiffey.github.io/samplesQuiz/'
          >
            Live Site
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
            src={Question}
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
          <img alt='tags popout' src={Feedback} className='screenshot'></img>
        </li>
      </ul>
    </div>
  )
}
