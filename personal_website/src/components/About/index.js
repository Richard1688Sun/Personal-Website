import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import {
    faAngular,
    faCss3,
    faGitAlt,
    faHtml5,
    faJsSquare,
    faReact,
  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import Loader from "react-loaders"


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-hover')
        }, 3000)
      }, [])
    
    return (
        <>
        <div className="container about-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']} idx={15}/>
                </h1>
                <p>paragraph 1</p>
                <p>paragraph 2</p>
                <p>paragraph 3</p>
            </div>
            <div className="stage-cube-cont">
            <div className="cubespinner">
                <div className="face" id="face1">
                    <FontAwesomeIcon icon={faAngular} color="#DD0031" />
                </div>
                <div className="face" id="face2">
                    <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                </div>
                <div className="face" id="face3">
                    <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                </div>
                <div className="face" id="face4">
                    <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                </div>
                <div className="face" id="face5">
                    <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                </div>
                <div className="face" id="face6">
                    <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                </div>
            </div>
        </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About