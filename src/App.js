import React, { Component } from 'react';
import TrappingWater from './components/TrappingWater'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      elevation: [0,1,0,2,1,0,1,3,2,1,2,1]
    }
  }

  render() {
    return (
      <div style={{width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <TrappingWater elevation={this.state.elevation} />
        <input
          type="text"
          style={{padding: 10, fontSize: 22, marginTop: 20, outline: 'none'}}
          value={this.state.elevation.join(',')}
          onChange={e => this.setState({ elevation: e.currentTarget.value.split(',') })}
        />
      </div>
    );
  }
}

export default App;
