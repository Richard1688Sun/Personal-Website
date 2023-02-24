import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const contactArray = ['C', 'o', 'n','t','a','c','t', ' ','m','e']
    const refForm = useRef()
    
    useEffect(() => {
        setTimeout(() => {
          setLetterClass('text-animate-wait')
        }, 1000)
    }, []);

    const sendEmail = (e) => {
        e.preventDefault() //stops default submitting

        emailjs.sendForm(
            'service_zy8whrq',
            'template_cd5phyw',
            refForm.current,
            "oiIoHvrlg-HiTv1DN",
        ).then(
            () => {
                alert ("Message Successfully Sent!")
                window.location.reload(false)
            },
            () => {
                alert ("Failed. Try again!")
                window.location.reload(false)
            }
        )
    }

    return (
        <>
        <div className='container contact-page'>
            <div className="text-zone">
                <h1>
                    <AnimatedLetters letterClass={letterClass} strArray={contactArray} idx={15}/>
                </h1>
                <p>
                    I am interested in summer software intermships near Vancouver for in-person or hybrid. Don't hesitate to contact me using the below form 
                </p>
                <div className="contact-form">
                    <form ref={refForm} onSubmit={sendEmail}>
                        <ul>
                            <li className="half">
                            <input placeholder="Name" type="text" name="user_name" required />
                            </li>
                            <li className="half">
                            <input
                                placeholder="Email"
                                type="email"
                                name="user_email"
                                required
                            />
                            </li>
                            <li>
                            <input
                                placeholder="Subject"
                                type="text"
                                name="subject"
                                required
                            />
                            </li>
                            <li>
                            <textarea
                                placeholder="Message"
                                name="message"
                                required
                            ></textarea>
                            </li>
                            <li>
                            <input type="submit" className="flat-button" value="SEND" />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact