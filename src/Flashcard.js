import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState("initial")
    const [Dolev, setDolev] = useState([])

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(() => {
        console.log("render")
        console.log(flip)
        console.log(Dolev)
    })

    const handleClick = () => {
        setFlip(!flip)
        setDolev(prevDolev => {
            const newArray = [...prevDolev]
            console.log(flashcard.answer)
            newArray.push(flashcard.answer)
            return newArray
        })
    }

    useEffect(setMaxHeight, [flashcard.question, flashcard.answer, flashcard.options])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={handleClick}
        >
            <div className="front" ref={frontEl}>
                <img alt="" src={flashcard.question} width="180px"  ></img>
            </div>
            <div className="back" ref={backEl}>
                <img alt="" src={flashcard.answer} width="180px" ></img>
            </div>
        </div>
    )
}
