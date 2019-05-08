import React from 'react';
import axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name : props.name,
      score: 0
    }
    this.voteLeft = this.voteLeft.bind(this)
    this.voteRight = this.voteRight.bind(this)
  }

  voteLeft() {
    this.setState({score: this.state.score+1}) 
  }

  voteRight() {
    this.setState({score: this.state.score-1}) 
  }


  render () {
    return  <div>
        <button onClick={this.voteLeft}>left</button>
            {this.state.name} : {this.state.score}
        <button onClick={this.voteRight}>right</button>
    </div>
  }
 
}

export default App;
