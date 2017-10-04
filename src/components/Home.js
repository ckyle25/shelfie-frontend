import React, { Component } from 'react';
import '../reset.css'
import './Home.css'
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <section className='nav-bar'>
                   <div className='nav-content-container'>
                    <img src={require('../assets/logo.png')}></img>
                    <div className='nav-bar-text'>SHELFIE</div>
                    </div>
                </section>
                <section className='main-content'>
                            <Link to='/shelfa'>
                                Shelf A
                            </Link>
                            <Link to='/shelfb'>
                                Shelf B
                            </Link>
                            <Link to='/shelfc'>
                                Shelf C
                            </Link>
                            <Link to='/shelfd'>
                                Shelf D
                            </Link>
                </section>
            </div>
        )
    }
}

export default Home;