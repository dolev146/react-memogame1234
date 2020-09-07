import React, { useState, useEffect } from 'react'
import Flashcard from './Flashcard'

let beforeRenderFlip = []

export default function FlashcardList({ flashcards }) {

    const [trueSideCards, settrueSideCards] = useState([])
    const [flip, setFlip] = useState(Array(flashcards.length - 1).fill(false))


    useEffect(() => {           
        if (trueSideCards.length === 2) {
            if (trueSideCards[0] === trueSideCards[1]) {
                console.log(flip)
                beforeRenderFlip=[...flip]
            } else {
                let coverCard = setTimeout(() => {
                    setFlip(beforeRenderFlip)
                }, 500)
            }
            trueSideCards.length = 0
        }
        
    }, [trueSideCards])


    const handleClick = (index, id) => {
        const tempArray = [...flip];
        tempArray[index] = !tempArray[index]
        setFlip(tempArray)
        settrueSideCards([...trueSideCards, flashcards[index].answer])
    }
    return (
        <div className="card-grid" >
            {flashcards.map((flashcard, index) => {
                return <Flashcard
                    index={index}
                    flip={flip[index]}
                    setFlip={setFlip}
                    handleClick={handleClick}
                    settrueSideCards={settrueSideCards}
                    trueSideCards={trueSideCards}
                    flashcard={flashcard}
                    key={flashcard.id} />
            })}
        </div>
    )
}
