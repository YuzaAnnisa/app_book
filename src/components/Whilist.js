import { useState, useEffect } from "react"
import axios from 'axios';
import InfiniteScroll from "react-infinite-scroll-component"

export default function Whilist() {
    const [cards, setCards] = useState([]);

    
    const fetchBook = () => {
        axios.get('http://localhost:3001/book/')
        .then(res => {
            console.log(res.data)
            if(res.status == 200) setCards(res.data)
            else Promise.reject()
        })
        .catch(err => alert('Something went wrong'))
      };

      useEffect(() => {
        fetchBook()
      }, [])

    return (
        <div>
          <h1 className="judul">Favorite Book</h1>
            <InfiniteScroll
                dataLength={cards.length}
                hasMore={true}
            >
                <div className='item-container'>
                    {cards.map((card) => (
                       <div className='cardItems' key={card.id}>
                         <img src={card.picture} alt='' />
                         <h3 className="itemFave">{card.title}</h3>
                         <p>{card.authors}</p>
                      </div>
                    ))}
                </div>
            </InfiniteScroll>
        </div>
    )
}