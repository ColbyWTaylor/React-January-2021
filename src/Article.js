import './Article.css';
import {useState} from 'react';


function Article(props) {

  // const [count, setCount] = useState(0);
  // const [firstName, setFirstName] = useState("");
  
  return (
    <div className="Article">
      <h1>{props.articleName}</h1>
      <p>{props.articleDate}</p>
      <p>{props.articleAuthor}</p>
      <div className="articleContent">
        {props.articleContent}
      </div>

    </div>
  );
}

export default Article;
