import { memo } from 'react'
import { useCallback, useEffect, useState } from 'react'
import './style.scss'

const Work = (props) => {
    const [currentSlide, setCurrentSlide] = useState(0)
    const data = [
        {
            id: "1",
            icon: "./assets/mobile.png",
            title: "Web Design",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
            img:
                "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
            id: "2",
            icon: "./assets/globe.png",
            title: "Mobile Application",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
            id: "3",
            icon: "./assets/writing.png",
            title: "Branding",
            desc:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            img:
                "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
    ]

    const handleClick = (way) => {
        way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    }

    const nextSlide = useCallback(
        () => {
            const index = currentSlide + 1 === data.length ? 0 : currentSlide + 1
            setCurrentSlide(index)
        },
        [currentSlide, data.length]
    )

    // useEffect(() => {
    //     if (props.auto) {
    //         const slideAuto = setInterval(() => {
    //             nextSlide()
    //         }, 5000)
    //         return () => {
    //             clearInterval(slideAuto)
    //         }
    //     }
    // }, [nextSlide, props])

    return (
        <div className="work" id="work">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {
                    data.map(item => (
                        <div className="container" key={item.id}>
                            <div className="item">
                                <div className="left">
                                    <div className="leftContainer">
                                        <div className="imgContainer">
                                            <img src={item.icon} alt="" />
                                        </div>
                                        <h2>{item.title}</h2>
                                        <p>{item.desc}</p>
                                        <span>Project</span>
                                    </div>
                                </div>
                                <div className="right">
                                    <img src={item.img} alt="" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <img
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={() => handleClick("left")}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={() => handleClick()}
            />
        </div>
    )
}

export default memo(Work)
