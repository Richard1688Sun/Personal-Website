import './index.scss'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHome,
    faUser,
    faEnvelope,
  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoS} alt="logo" />
            <img className="sub-logo" src={LogoSubtitle} alt="sublogo" />
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>

            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreference' href='https://www.linkedin.com/in/richard-sun-6b5a16178/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreference' href='https://github.com/Richard1688Sun'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" className="anchor-icon"/>
                </a>
            </li>

        </ul>
    </div>
)

export default Sidebar