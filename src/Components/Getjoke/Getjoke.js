import React, {Component} from 'react';
import axios from 'axios';
import Myjokes from '../Myjokes/Myjokes' 
class Getjoke extends Component {
    constructor(){
        super()
        this.state = {
            jokes: []
           
        }
    }
  componentDidMount(){
      axios.get('https://icanhazdadjoke.com/', {
          headers: {
              Accept: 'text/plain'
          }
      })
      .then (response => {
          console.log ('Its working', response)
          this.setState({jokes: response.data})
      })
      .catch((error) => {
          console.log(error)
      })
  }

    render(){
        return(
            <div>
                <button onClick = {() => this.componentDidMount ()} 
                style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', borderRadius: 15, fontSize: 24 }}>GET JOKE</button>
                <h1>{this.state.jokes}</h1>
                <Myjokes myJokes={this.state.jokes}/>
                
            </div>
        )
    }

}

export default Getjoke;