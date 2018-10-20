import React from 'react'
import Particles from 'react-particles-js';

const particleOpt = {
    particles:{
        number:{
            value: 200,
            density: {
                enable: true,
                value_area:2000
            }
        }
    }
}

class ParticleBG extends React.Component {
  constructor(props) {
    super(props)
  }

  render(){
  return (
    <div className="particleBg">
    <Particles
        params={particleOpt}
    />
    </div>
  )}
}

export default ParticleBG

