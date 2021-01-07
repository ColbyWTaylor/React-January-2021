import './CardMain.css';
import {useState} from 'react';


function CardMain(props) {

  const [count, setCount] = useState(0);

  
  return (
    <div className="CardMain">
      <p>This is a {props.productName}</p>
      <button className="button" onClick={() => setCount(count + 1)}>Clicked {count} times.</button>
    </div>
  );
}

export default CardMain;
