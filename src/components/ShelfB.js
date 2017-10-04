import React, { Component } from 'react';
import '../reset.css';
import './Shelves.css';
import axios from 'axios'
import {Link} from 'react-router-dom';

class ShelfB extends Component {
    constructor() {
        super();
        this.state = {
            bins:[]
        }
    }

componentDidMount() {
    axios.get('http://localhost:3001/api/shelf/B')
        .then(response => {
            this.setState({
                bins: response.data
            })
        })
}

    render() {
        return (
            <div>
                <section className='nav-bar-shelves-container'>
                <Link to='/' className='nav-bar-shelves-home'>
                        <img src={require('../assets/logo.png')}></img>
                    </Link>
                    <div className='nav-bar-shelves-shelf'>
                        Shelf B
                    </div>
                </section>
                <section className='main-content-shelves'>
                {
                    this.state.bins.map((bin) => {
                        let binNum = bin.binid.match(/\d+/g)
                        return (bin.name && bin.price ? 
                        <Link to={`/shelfb/${bin.binid}`} className ='main-content-shelves-populated'>{`Bin ${binNum}`}</Link> 
                        : 
                        <Link to={`/shelfbAdd/${bin.binid}`} className ='main-content-shelves-empty'>+ Add inventory to bin</Link>)
                    })
                 }
                </section>
            </div>
        )
    }
}

export default ShelfB;