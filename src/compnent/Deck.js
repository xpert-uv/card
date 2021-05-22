import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from "./Card";
import "../css/Deck.css";
const BASE_API = "http://deckofcardsapi.com/api/deck";


const Deck = () => {
    //Setting up deck while loading page
    const [card, setCard] = useState([]);
    const [deck, setDeck] = useState();


    useEffect(() => {
        console.log("this is runnint");
        async function cards() {
            const res = await axios.get(`${BASE_API}/new/shuffle/?deck_count=1`)
            setDeck(res.data);
        }
        cards();
    }, [setDeck])


    const addCard = async () => {
        let { deck_id } = deck;
        console.log(deck_id);
        const response = await axios.get(`${BASE_API}/${deck_id}/draw/?count=1`);
        const dwranCard = response.data.cards[0];
        setCard(card => [...card, dwranCard]);
    }

    const cards = card.map(c => (<Card key={c.code} image={c.image} />));

    return (
        <div className="deck">
            <button onClick={addCard}> Give me Card</button>
            {cards}
        </div>
    )
}

export default Deck;
