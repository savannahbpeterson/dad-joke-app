import React, {Component} from 'react';
import axios from 'axios';

// import Editjoke from './Editjoke'

class Myjokes extends Component {
    constructor(){
        super()
        this.state = {
            myJokes: [],
            editMode: false
        }
    }
    handleSave(){
       console.log (this.props)
        axios.post('/savejoke', this.props)
        .then (response => {
            console.log(response.data[0].myJokes)
            this.setState({myJokes: response.data[0].myJokes })
        })
      }
      handleUpdateJoke(){
          axios.put('/editjoke', )
      }
      handleEdit(){
          this.setState({editMode: !this.state.editMode})
      }
    render(){
        return(
            <div>
                <button onClick = {() => this.handleSave ()} 
                style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', borderRadius: 15, fontSize: 24 }}>
                SAVE JOKE
                </button>
                <button onClick = {()=> this.handleEdit()} 
                style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', borderRadius: 15, fontSize: 24 }}>EDIT JOKE</button>
                {this.state.editMode 
                    ? 
                <div>
                    <button onClick = {() => this.handleEdit()} style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', borderRadius: 15, fontSize: 24 }}>Submit</button>
                    <input type="text"/>
                </div>
                    :
                <h1>{this.state.myJokes}</h1>}
                <span></span>
            </div>
        )
    }
}

export default Myjokes;