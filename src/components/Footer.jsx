import React from 'react';
import LinkedinIcon from '../images/linkedin.svg';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';
import YoutubeIcon from '../images/youtube.svg';

const span = (<span className='divider'> | </span>)
const Footer = (props) => {
    return (
        <div className="container-fluid">
            <div className='d-flex'>
                 <div>
                <div className='mb-2 links'>
                    <a href="https://www.telerik.com/purchase/license-agreement/progress-kendoreact?utm_medium=cpm&utm_source=stackblitz-app&utm_campaign=kendo-ui-react-awareness-license-agreement">License Agreement</a>
                </div>
                <div className='copyright'>
                    Copyright © 2020 Made with &#10084; by MikeyRaptor
                </div>
                </div>
                <div className='d-flex ml-auto'>
                    <div className="social">
                   
                    <a href="https://www.facebook.com/KendoUI/"><img src={FacebookIcon} alt="facebook" /></a> 
                    <a href="https://twitter.com/kendoreact"><img src={TwitterIcon} alt="twitter" /></a>
                    <a href="https://www.youtube.com/results?search_query=kendoreact"><img src={YoutubeIcon} alt="youtube" /></a><br></br>
                    <a href="https://www.linkedin.com/showcase/telerik/"><img src={LinkedinIcon} alt="linkedin" /></a>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
