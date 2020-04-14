import React from 'react'

export default function Bio() {
  return (
    <>
      <section className='bio'>
        <h2>Bio</h2>
        <p>
          I am a full stack web-developer and recent graduation of the Thinkful
          Software Engineering course.{' '}
        </p>
        <p>
          I have an MA in Education and I am passionate about improving
          educational standards. I also love cooking, making music and creating
          3D renders.
        </p>
        <p>
          I currently reside in South Korea with my family where I run several
          small businesses.
        </p>
      </section>

      <section className='skills'>
        <h2>Technologies</h2>
        <ul>
          <li>React</li>
          <li>React Native</li>
          <li>Node.js / Express</li>
          <li>PostgreSQL</li>
          <li>Sass</li>
          <li>D3</li>
          <li>Javascript</li>
          <li>HTML/CSS</li>
        </ul>
      </section>
    </>
  )
}
