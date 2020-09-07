import React, { useState, useEffect, useRef } from 'react'

export default function Flashcard({ flashcard, trueSideCards, settrueSideCards , handleClick , flip, setFlip , index}) {
    
    
    const frontEl = useRef()
    const backEl = useRef()

    

    

    

    
    return (
        <div
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: "200px" }}
            onClick={() =>handleClick(index , flashcard.id)}
        >
            <div className="front" ref={frontEl}>
                <img alt="" src={flashcard.question} width="180px"   ></img>
            </div>
            <div className="back" ref={backEl}>
                <img alt="" src={flashcard.answer} width="180px" height="180px" ></img>
            </div>
        </div>
    )
}
