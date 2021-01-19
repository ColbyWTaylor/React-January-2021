import './Article.css';
import {useState} from 'react';


function Article() {

  let data = [{
    articleName: "A Quick Breakdown of Neural Processing During Online FPS",
    key:"0001",
    articleAuthor: "Colby Again",
    articleDate: "January 16th, 2020",
    articleContent: <p>This isn't porn, yet. Game smarter, not harder</p>,
    articleSiblingContent: ['article1'],
    keyWords: ["gaming", "meditation"],
    articleActions: ["Download Level 1: Shooting Fast by Breathing Slow"]
  },
  {
    articleName: "React Legos",
    key:"0002",
    articleAuthor: "Colby Colby",
    articleDate: "January 17th, 2020",
    articleContent: <p>While many different pieces of programming may be thought of as digital lego pieces combined as something more interesting and useful than the sum of their parts, perhaps React components are the most fun to build with.</p>,
    articleSiblingContent: ['article1'],
    keyWords: ["gaming", "meditation"],
    articleActions: ["A Quick Breakdown of Neural Processing During Online FPS"]
  },
  {
    articleName:"3 Noncoding Tips to Becoming a Better Developer",
    key:"0003",
  articleAuthor:"Colby Taylor",
  articleSiblingContent:"About Meditation for Coding | Free Consultation | Coding with Calm: Your New 6 Favorite Ways to Release Stress",
  articleActions:"Email this to yourself or someone",
  articleDate:"January 14th, 2021",
  articleContent:<><p>Breathe. Take a breathe, and by focusing on relaxing in the moment, you will be able to reposition your mind in a way to better approach any problem. This goes well beyond programming as well!</p><p>Tell me your most basic problem- literally. Verbalize it- get the words together, and you will find yourself forcing your mind to specify either something you are overlooking, or do not completley understand. This is an amazing moment, sometimes referred to as an 'ah-ha' moment.</p><p>Take a break. Allowing for space between yourself and your problem can allow you to see it for what it is- just a new challenge. You've done this before. If you are feeling burnt out, go for a walk, do eleven pushups, or ride your bike, and the distance may enlighten you with new perspective.</p></>
}
]

const dataMapped = data.map((article,i)=> (
  <div className="Article" key={i}>
    <h1>{article.articleName}</h1>
    <p><strong>{article.articleAuthor}</strong></p>
    <p><i>{article.articleDate}</i></p>
    <div className="articleContent">
      {article.articleContent}
    </div>
    <hr className="w50" />
    <div>
    <p>{article.articleSiblingContent}</p>
      <p>{article.articleActions}</p>
      <h2>KeyWords:</h2>
      <ul>
        {console.log(article.keyWords)}
      </ul>

    </div>

  </div>))

  // const [count, setCount] = useState(0);
  // const [firstName, setFirstName] = useState("");
  
  return dataMapped

}


export default Article;