import './CardMain.css';
import {useState} from 'react';


function CardMain(article) {

  const [count, setCount] = useState(0);
  const [firstName, setFirstName] = useState("");
  
  return (
    <div className="CardMain">
      Your Name: <input onChange={e=> setFirstName(e.target.value)} />
      <h1>{firstName.length > 0 ? firstName + "'s" : null} {article.productName}</h1>
      
      <button value={firstName} className="button" onClick={() => setCount(count + 1)}>{count < 1 ? "Add to cart." : count + " currently in cart."}</button>


      <div>
        <p>
          {article.productInfo}.
        </p>
      </div>
    </div>
  );
}

export default CardMain;
