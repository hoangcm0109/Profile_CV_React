import './style.scss';
import { init } from 'ityped'
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef(null)

    useEffect(() => {
        init(textRef.current, {
            showCursor: false, 
            backDelay:  1500,
            backSpeed:60,
            strings: ["Developer", "Designer", "Content Creator"] 
        })
    }, [])


    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>MINH HOANG</h1>
                    <h3>I work <span ref={textRef}></span></h3>

                    <a href="#portfolio">
                        <img src="assets/down.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    )
}
