import LogoTitle from '../../assets/images/logo-r.png';
import { Link } from 'react-router-dom';
import './index.scss';
import { useState, useEffect } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import Logo from './Logo';

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const greet1Array = ['H', 'i', ',']
    const greet2Array = ['I', '\'', 'm']
    const nameArray = ['i', 'c', 'h', 'a', 'r', 'd']
    const titleArray = ['C', 'o', 'm', 'p', 'u', 't', 'e', 'r', ' ', 'E', 'n', 'g', 'i', 'n', 'e', 'e', 'r', '.'] 
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-wait')
        }, 5000)
    }, []);
    

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <AnimatedLetters letterClass={letterClass} strArray={greet1Array} idx={10}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={greet2Array} idx={13}/>
                <img src={LogoTitle} alt="developer"/>
                <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={16}/>
                <br/>
                <AnimatedLetters letterClass={letterClass} strArray={titleArray} idx={23}/>
                </h1>
                <h2>UBC Student / Android App Developer / Java Programmer</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home