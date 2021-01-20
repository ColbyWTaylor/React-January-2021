import './CardMain.css';
import {useState} from 'react';
import CardMain from './CardMain';

function Cards(props) {

  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  
  return (
    <>
    <CardMain productName="Code Flow i/o Poster" productInfo="It is a poster"/>
    <CardMain productName="Code Flow Meditation Podcast" productInfo="Limited run audio podcast episodes"/>
    <CardMain productName="Apparel" productInfo="Look dashingly comfortable from the comfort of our clothes."/>
    <CardMain productName="Health Test" productInfo="A checklist for keeping it 100%"/>
    </>

  );
}

export default Cards;
