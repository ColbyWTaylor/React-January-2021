import './CardMain.css';
import {useState} from 'react';
import CardMain from './CardMain';

function Cards(props) {


  let cardData = [
    {productName: "Code Flow i/o Poster",
    productInfo: "It is a poster"
   },
    {productName: "Code Flow Meditation Podcast",
    productInfo: "Limited run audio podcast episodes"
   },
    {productName: "Apparel",
    productInfo: "Look dashingly comfortable from the comfort of our clothes."
   },
    {productName: "Health Test",
    productInfo: "A checklist for keeping it 100%"
   },
  ]

  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  
  return (
    <>
    <h1>Cards</h1>
      {cardData.map((element, index)  => <CardMain key={index} {...element} />)}
    </>

  );
}

export default Cards;
