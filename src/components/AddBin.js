import React, { Component } from 'react';
import '../reset.css'
import './AddBin.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

class AddBin extends Component {
constructor() {
    super();
    this.state = {
        selectedBin:{}
    }
}

componentDidMount() {
axios.get(`http://localhost:3001/api/bin/${this.props.match.params.id}`)
    .then(response => {
        this.setState({
            selectedBin: response.data[0]
        })
    })
}

addToBin = () => {
    let addName = this.refs.name.value
    let addPrice = this.refs.price.value
    let obj = {name: addName , price:addPrice}
    axios.put(`http://localhost:3001/api/addbin/${this.props.match.params.id}`,obj)
        .then(window.location.reload())
    this.refs.name.value = ''
    this.refs.price.value = ''
}


    render() {
        return (
            <div>
                <section className='nav-bar-container-add'>
                    <Link to='/' className='nav-bar-home-add'>
                        <img src={require('../assets/logo.png')}></img>
                    </Link>
                    <Link to={`/shelf${this.state.selectedBin.shelfid}`} className='nav-bar-shelf-add'>
                        Shelf {this.state.selectedBin.shelfid}
                    </Link>
                    <div className='nav-bar-bin-add'>
                        Bin {this.props.match.params.id.match(/\d+/g)}
                    </div>
                </section>
                <section className='main-content-bin'>
                    <div className='main-content-bin-container'>
                        <div className='main-content-input-container'>
                            <div className='main-content-input-container-text'>Name</div>
                            <input placeholder='Item Name' ref='name'></input>
                            <div className='main-content-input-container-text'>Price</div>
                            <input placeholder='0.00' ref='price'></input>
                            <Link to={`/shelf${this.state.selectedBin.shelfid}`} 
                                  onClick={this.addToBin} 
                                  className='main-content-button-add-container'>+ Add to inventory
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default AddBin;