import './index.scss';
import { useEffect } from 'react'

const AnimatedLetters = ({letterClass, strArray, idx}) => {

    useEffect(() => {
        const letterEls = document.querySelectorAll(`.${letterClass}`);
        letterEls.forEach((letterEl, i) => {
            if (!letterEl.classList.contains("text-animate")) {
                letterEl.addEventListener('mouseenter', () => {
                    console.log(`hovering over ${i}`);
                    letterEl.classList.remove("text-animate-wait")
                    letterEl.classList.add("text-animate-hover")
                  });
                  letterEl.addEventListener('animationend', () => {
                    console.log(`animation ended ${i}`);
                    letterEl.classList.remove("text-animate-hover")
                    letterEl.classList.add("text-animate-wait")
                  });
                }
            }
        );
    }, [letterClass]);


    return (
        <span>
            {
                strArray.map((char, i) => (
                    <span key={char + i} className={`${letterClass} _${i + idx}`}>
                        {char}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimatedLetters