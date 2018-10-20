import React from 'react';
import { HashRouter as Router, Route,} from "react-router-dom";

import Header from './Header'
import ParticleBG from './ParticleBG'
import About from './About'
import Portfolio from './Portfolio';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <Router>
      <React.Fragment>
        <div className='grid-container'>
            <div id='header'>
              <Route path="/" component={Header} />
            </div>
            <div id='aboutContainer'>
              <Route path="/" component={About} />
            </div>
            <div className='skewBox'>
              <Route path="/" component={ParticleBG} />
            </div>
            <div className='portfolioContainer'>
              <Route path="/" component={Portfolio} />
            </div>
        </div>
      </React.Fragment>
    </Router>
    )
  }
}

export default App