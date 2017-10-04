import React, { Component } from 'react';
import '../reset.css'
import './Bin.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class Bin extends Component {
constructor() {
    super();
    this.state = {
        selectedBin:{},
        name: '',
        price: '',
        allowEdit: false
    }
}

componentDidMount() {
axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`)
    .then(response => {
        this.setState({
            selectedBin: response.data[0],
            name: response.data[0].name,
            price: response.data[0].price
        })
    })
}

deleteBin = () => {
    axios.put(`http://localhost:3001/api/deletebin/${this.props.match.params.id}`)
        .then(window.location.reload())   
}

editBin = () => {
    let addName = this.refs.name.value ? this.refs.name.value : this.state.selectedBin.name
    let addPrice = this.refs.price.value ? this.refs.price.value : this.state.selectedBin.price
    let obj = {name: addName , price:addPrice}
    axios.put(`http://localhost:3001/api/editbin/${this.props.match.params.id}`,obj)
        .then(window.location.reload())
    
    this.refs.name.value = ''
    this.refs.price.value = ''
    this.setState({
        allowEdit: false
    })
}

allowEditHandler = () => {
    this.setState({
        allowEdit: true
    })
}

inputNameHandler = (value) => {
    this.setState({
        name: value
    })
}

inputPriceHandler = (value) => {
    this.setState({
        price: value
    })
}

    render() {
        return (
            <div>
                <section className='nav-bar-container'>
                    <Link to='/' className='nav-bar-home'>
                        <img src={require('../assets/logo.png')}></img>
                    </Link>
                    <Link to={`/shelf${this.state.selectedBin.shelfid}`} className='nav-bar-shelf'>
                        Shelf {this.state.selectedBin.shelfid}
                    </Link>
                    <div className='nav-bar-bin'>
                        Bin {this.props.match.params.id.match(/\d+/g)}
                    </div>
                </section>
                <section className='main-content-bin'>
                    <div className='main-content-bin-container'>
                        <img src='http://lorempixel.com/200/200/cats/'></img>
                        <div className='main-content-input-container'>
                            <div className='main-content-input-container-text'>Name</div>
                            <input onChange={e => this.inputNameHandler(e.target.value)} value={this.state.name} ref='name' disabled={!this.state.allowEdit}></input>
                            <div className='main-content-input-container-text'>Price</div>
                            <input onChange={e => this.inputPriceHandler(e.target.value)} value={this.state.price} ref='price' disabled={!this.state.allowEdit}></input>
                            <div className='main-content-button-container'>
                                {!this.state.allowEdit 
                                ?
                                <div onClick={this.allowEditHandler} className='main-content-button-container-grey'>Edit</div>
                                :
                                <div onClick={this.editBin} className='main-content-button-container-green'>Save</div>
                                }
                                <Link to={`/shelf${this.state.selectedBin.shelfid}`} onClick={this.deleteBin} className='main-content-button-container-grey'>Delete</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Bin;