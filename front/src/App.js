import React from 'react';
import axios from 'axios';
import Concept from './concept'
import { rejects } from 'assert';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.changeConcept = this.changeConcept.bind(this)
    this.createConcept = this.createConcept.bind(this)

    this.state = {
      new_concept: null,
    }
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
              <Concept></Concept>
              <input onChange={this.changeConcept}></input>
              <button onClick={this.createConcept} >Créer mon concept</button>
            </div>;
  }
 
}

export default App;
