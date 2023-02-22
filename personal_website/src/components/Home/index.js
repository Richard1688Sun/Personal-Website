import LogoTitle from '../../assets/images/logo-s.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['R', 'i', 'c', 'h', 'a', 'r', 'd']
    const titleArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'] 

    useEffect(() => {
        return setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 6000)
    }, []);
    

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span> 
                <br/>
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span> 
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={21}/>
                </h1>
                <h2>UBC Student / Android App Developer / Java Programmer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
    );
}

export default Home