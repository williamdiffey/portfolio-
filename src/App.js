import React, { Fragment } from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import NavBar from './NavBar'
import Hero from './Hero'
import Bio from './Bio'
import ProjectPrekursor from './ProjectPrekusor'
import ProjectPizza from './ProjectPizza'
import ProjectFootieText from './ProjectFootietext'
import ProjectNutri from './ProjectNutri'
import ProjectSamplesQuiz from './ProjectSamplesQuiz'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route
          exact
          path='/'
          render={() => (
            <Fragment>
              <NavBar />
              <Hero />
              <Bio />
              <ProjectPrekursor />
              <ProjectPizza />
              <ProjectFootieText />
              <ProjectNutri />
              <ProjectSamplesQuiz />
            </Fragment>
          )}
        />
      </Router>
    </div>
  )
}

export default App
