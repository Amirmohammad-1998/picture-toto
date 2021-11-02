import React, { useContext , useState } from "react";
import { CardContext } from "./CardContext";
import { ImgContext } from './ImgContext';
import MyCard from "./Card";


export default function CardList() {
    const [cards , setCards] = useContext(CardContext);
    
    return (
        <div className="list">
           {cards.map((card) =>(
                <MyCard title={card.text} url={card.url} />
           ))}
            
        </div>
    )
}
