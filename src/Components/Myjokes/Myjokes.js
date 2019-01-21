import React, { Component } from 'react';
import axios from 'axios';

import Header from '../Header/Header'

// import Editjoke from './Editjoke'

class Myjokes extends Component {
    constructor() {
        super()
        this.state = {
            myJokes: [],
            editMode: false
        }
    }
    handleSave() {
        //    console.log (this.props)
        axios.post('/savejoke', this.props)
            .then(response => {
                console.log(response.data)
                this.setState({ myJokes: response.data })

            })
    }
    handleUpdateJoke() {
        axios.put('/editjoke')
    }
    handleEdit() {
        this.setState({ editMode: !this.state.editMode })
    }
    handleDeleteJoke() {
        axios.delete('/deleteJoke')
    }
    render() {
        let mappedJokes = this.state.myJokes.map((element) => {
            return (
                <h1>{element.myJokes}</h1>
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
                {this.state.editMode
                    ?
                    <div>
                        <button onClick={() => this.handleEdit()} style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', border: 'dotted', borderRadius: 15, fontSize: 24 }}>SUBMIT</button>
                        <input type="text" style={{ height: 35, border: 'dotted', borderRadius: 15, fontSize: 24 }} />
                    </div>
                    :
                    <h4>{mappedJokes}</h4>}
                <button onClick={() => this.handleDeleteJoke()} style={{ marginTop: 30, height: 40, width: 150, background: 'lightyellow', border: 'dotted', borderRadius: 15, fontSize: 20 }}> DELETE JOKE</button>
                <span></span>
                <Header />
            </div>
        )
    }
}

export default Myjokes;