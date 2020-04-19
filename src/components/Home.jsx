import React from 'react';
import ComponentsIcon from '../images/components.svg';
import StylesIcon from '../images/styles.svg';
import BlogsIcon from '../images/blogs.svg';
import TutorialsIcon from '../images/tutorials.svg';
import Kendoka from '../images/kendoka.svg';

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className='row'>
                <div className='col-12'>
                    <h1 className='welcome mb-0'>Welcome to Mikey Raptor</h1>
                    <h2 className='sub-header mt-0'></h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <h1 className='get-started'>Get Started</h1>
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className='col-6 text-right'>
                    <div className='kendoka-div'>
                        <img className='kendoka' src={Kendoka} alt='kendoka' />
                    </div>
                </div>
                <div className='col-6 components-list'>
                    <p>
                    Learn To make Progressive Web Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home;
