import React from 'react';
import axios from 'axios';


class Concept extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      concept : null,
    }
    this.voteLeft = this.voteLeft.bind(this)
    this.voteRight = this.voteRight.bind(this)

    this.changeConcept()
  }

  getRandomConcept() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:5000/random-concept').then(response => {
        resolve(response.data)
      }).catch(e => reject(e))
    })
  }

  changeConcept() {
    this.getRandomConcept().then(concept => {
      this.setState({
        concept
      })
    })
  }

  vote(orientation) {
      axios.post('http://localhost:5000/vote',{
        orientation,
        concept: this.state.concept
      })
  }

  voteLeft() {
    this.vote("left")
    this.changeConcept()
  }

  voteRight() {
    this.vote("right")
    this.changeConcept()
  }


  render () {
    console.log(this.state.concept)

    if (! this.state.concept) {
      return null
    }
    return  <div>
      <h1>{this.state.concept.name}</h1>
        Score : {this.state.concept.score}
        <br></br>
        <button onClick={this.voteLeft}>left</button> 
        <button onClick={this.voteRight}>right</button>
    </div>
  }
 
}

export default Concept;
