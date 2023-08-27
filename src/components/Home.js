import React, { useState } from "react";
import SearchArea from "./SearchComponents";
import Card from "./CardComponents";

export default function Home() {
    const [cards, setCards] = useState([]);


    function handleNewData(data) {
        setCards(data);
    }

    return (
        <div>
            <SearchArea
                onSearch={handleNewData}
            />

             {cards.map((cardItem) => {
                return (
                    <Card
                        key={cardItem.index}
                        title={cardItem.title}
                        img={cardItem.img}
                    />
                );
            })} 
        </div>
    )
}