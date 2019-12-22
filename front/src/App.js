import React from 'react';
import axios from 'axios';
import Concept from './concept'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.changeConcept = this.changeConcept.bind(this)
    this.createConcept = this.createConcept.bind(this)
    this.getVotes = this.getVotes.bind(this)

    this.state = {
      new_concept: null,
      concepts : []
    }
    this.getConcepts()
  }

  getConcepts() {
    axios.get('http://localhost:5000/concepts')
      .then((response) => {
        this.setState({
          concepts: response.data
        })
    })
  }

  getVotes() {
    axios.get('http://localhost:5000/votes')
      .then((response) => {
        console.log(response);
    })
  }

  changeConcept(e) {
    this.setState({
      new_concept: e.target.value
    })
  }

  createConcept(e) {
    axios.post('http://localhost:5000/concept', {
      concept: this.state.new_concept
    }).then(() => this.getConcepts())
  }


  render () {
    return  <div className="App">
              <h1>Concepts :</h1>
              {this.state.concepts.map((concept, index) => {
                return <Concept key={index} name={concept.name}></Concept>
              })}

              <input onChange={this.changeConcept}></input>
              <button onClick={this.createConcept}>Créer mon concept</button>
              <button onClick={this.getVotes}>All votes in console</button>
            </div>;
  }
 
}

export default App;
