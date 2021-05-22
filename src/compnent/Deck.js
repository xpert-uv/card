import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card";
const BASE_API = "http://deckofcardsapi.com/api/deck";
//const cardSameDeck = `https://deckofcardsapi.com/api/deck/${}new/draw/?count=1`

const Deck = () => {
    //Setting up deck while loading page
    const [cardData, setcardData] = useState(null);
    const [draw, setDraw] = useState([]);
    useEffect(() => {
        console.log("this is running");
        try {
            async function card() {
                const cards = await axios.get(`${BASE_API}/new/shuffle/`);
                setcardData(cards.data)
            }

            card();
        }
        catch (e) {
            console.log(e);
        }
    }, [setcardData]);

    useEffect(() => {
        console.log("this is running");

        async function drawFunc() {
            let { deck_id } = cardData;
            const cardDraw = await axios.get(`${BASE_API}/${deck_id}/draw/?count=1`);
            console.log(cardDraw);

            const cardDrawn = cardDraw.data.cards[0];
            console.log(cardDrawn);
            setDraw(drawn => [...drawn, cardDrawn]);
        }
        drawFunc();
    }, [cardData, setDraw])

    const cd = draw.map(c => (
        <Card key={c.code} image={c.image} />
    ))

    console.log(draw);

    return (
        <div>
            <button > Give me Card</button>
            {cd}
        </div>
    )
}

export default Deck;
