import './CardMain.css';
import {useState} from 'react';


function CardMain(props) {

  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  
  return (
    <div className="CardMain">
      Name: <input onChange={e=> setFirstName(e.target.value)} />
      <p>This is a {props.productName}</p>
      <button value={firstName} className="button" onClick={() => setCount(count + 1)}>Clicked {count} times.</button>

      <p>Name: {firstName}</p>

      <div>
        <h2>
          Something
        </h2>
      </div>
    </div>
  );
}

export default CardMain;
