import React, {Component} from 'react';
import axios from 'axios';

class Getjoke extends Component {
    constructor(){
        super()
        this.state = {
            jokes: []
        }
    }
  componentDidMount(){
      axios.get('https://icanhazdadjoke.com/')
      .then (results => {
          console.log ('Its working', results)
          this.setState({jokes: results.data})
      })
  }
    render(){
        return(
            <div>
                <button onClick = {() => this.componentDidMount ()}>GET JOKE</button>
            </div>
        )
    }

}

export default Getjoke;