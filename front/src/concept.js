import React from 'react';
import axios from 'axios';


class Concept extends React.Component {

  constructor(props) {

    super(props)
    this.state = {
      concept : null,
      score : 0,
    }
    this.voteLeft       = this.voteLeft.bind(this)
    this.voteRight      = this.voteRight.bind(this)
    this.deleteConcept  = this.deleteConcept.bind(this)

    this.changeConcept()
  }

  getRandomConcept() {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:5000/random-concept').then(response => {
        resolve(response.data)
      }).catch(e => reject(e))
    })
  }

  getVoteCount(votes) {
    const leftVotes = votes.filter(vote => vote.orientation === 'left')
    const rightVotes = votes.filter(vote => vote.orientation === 'right')

    return rightVotes.length - leftVotes.length
  }

  changeConcept() {
    this.getRandomConcept().then((concept) => {

      const voteCount = this.getVoteCount(concept.votes)

      this.setState({
        concept: concept,
        score: voteCount
      })
    })
  }

  deleteConcept() {
    const conceptId = this.state.concept._id
    
    axios.delete('http://localhost:5000/concept/delete/:conceptId', {
      params: {
        conceptId: conceptId
      }
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

    if (!this.state.concept) {
      return null
    }
    return  <div>
      <h1>{this.state.concept.name}</h1>
      <br></br>
      ... est-ce de gôche ou de drouate ?
      <br></br> <br></br>
        Score : {this.state.score}
        <br></br> <br></br>
        <button onClick={this.voteLeft}>De gôche !</button> 
        <button onClick={this.voteRight}>De drouate !</button>
        <br></br> <br></br>
        <button onClick={this.deleteConcept}>Supprimer</button>
    </div>
  }
 
}

export default Concept;
