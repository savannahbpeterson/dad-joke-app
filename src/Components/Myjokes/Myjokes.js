import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header'

// import Editjoke from './Editjoke'

class Myjokes extends Component {
    constructor() {
        super()
        this.state = {
            myJokes: [],
            editMode: false,
            text: ''
        }
    }



    handleSave() {
        axios.post('/savejoke', this.props)
            .then(response => {
                console.log(response.data)
                this.setState({ myJokes: response.data })

            })
    }

    // handleUpdateJoke() {
    //     let textObj = {
    //         text: this.state.text
    //     };
    //     console.log(textObj)
    //     axios.put('/editjoke', textObj)
    //     .then(response => {
    //         this.setState({myJokes: response.data})
    //     })
    // }

    handleEdit(id) {
        let textObj = {
               text: this.state.text
                 };
        this.setState({ editMode: !this.state.editMode })
        axios.put('/updateJoke/' + id, textObj)
        .then( response => {
            this.setState({myJokes: response.data})
        })
    }

    handleDeleteJoke(id) {
        axios.delete('/deleteJoke/' + id)
        .then(response => {
            this.setState({myJokes: response.data})
        })
    }

    editName(text){
        this.setState({text: text})
    }


    render() {
        let mappedJokes = this.state.myJokes.map((element) => {
            return (
                <div><h1>{element.myJokes}</h1>
                <button onClick={() => this.handleDeleteJoke(element.id)} 
                style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', border: 'dotted', borderRadius: 15, fontSize: 20 }}> DELETE JOKE</button>
                {this.state.editMode
                    ?
                    <div>
                        <button onClick={() => this.handleEdit(element.id)} 
                        style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', border: 'dotted', borderRadius: 15, fontSize: 24 }}>SUBMIT</button>
                        <input type="text" onChange={(e) => this.editName(e.target.value)} 
                        style={{ height: 35, border: 'dotted', borderRadius: 15, fontSize: 24 }} />
                    </div>
                    :
                    ''}
                </div>
                
            )
        })
        return (
            <div>
                <button onClick={() => this.handleSave()}
                    style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', border: 'dotted', borderRadius: 15, fontSize: 24 }}>
                    SAVE JOKE
                </button>
                <button onClick={() => this.handleEdit()}
                    style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', border: 'dotted', borderRadius: 15, fontSize: 24 }}>EDIT JOKE</button>
                
                <ul>{mappedJokes}</ul>
                <span></span>
                <Header />
            </div>
        )
    }
}

export default Myjokes;