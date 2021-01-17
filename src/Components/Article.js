import './Article.css';
import {useState} from 'react';


function Article(props) {

  // const [count, setCount] = useState(0);
  // const [firstName, setFirstName] = useState("");
  
  return (
    <div className="Article">
      <h1>{props.articleName}</h1>
      <p><strong>{props.articleAuthor}</strong></p>
      <p><i>{props.articleDate}</i></p>
      <div className="articleContent">
        {props.articleContent}
      </div>
      <hr className="w50" />
      <div>
      <p>{props.articleSiblingContent}</p>
        <p>{props.articleActions}</p>
      </div>

    </div>
  );
}

export default Article;
