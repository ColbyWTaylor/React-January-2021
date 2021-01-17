import './Header.css';
import HeaderButtons from './HeaderButtons'
import Article from './Article'


function Header() {

  let preferredLanguage = "JS"

  let data = [{
    articleName: "A Quick Breakdown of Neural Processing During Online FPS",
    articleAuthor: "Colby Again",
    articleDate: "January 16th, 2020",
    articleContent: "This isn't porn, yet. Game smarter, not harder",
    articleSiblingContent: ['article1'],
    keyWords: ["gaming", "meditation"],
    articleActions: ["Download Level 1: Shooting Fast by Breathing Slow"]
  },
  {
    articleName: "article3",
    articleAuthor: "Colby Colby",
    articleDate: "January 17th, 2020",
    articleContent: <p>here is the content</p>,
    articleSiblingContent: ['article1'],
    keyWords: ["gaming", "meditation"],
    articleActions: ["A Quick Breakdown of Neural Processing During Online FPS"]
  }
  ]

  const dataMapped = data.map((article)=> <Article {...article} />)

  return (
    <>
    <div className="Header">
      <h1>CodeFlow.io</h1>
      <p>/*Remember to Breathe Here*/</p>
     { (preferredLanguage === "JS") && (<p>Language Preference: <i>JavaScript</i></p>)}
      <hr className="HeaderHr"/>
    </div>
    <HeaderButtons />
    <Article articleSiblingContent="About Meditation for Coding | Free Consultation | Coding with Calm: Your New 6 Favorite Ways to Release Stress" articleActions="Email this to yourself or someone"  articleName="3 Noncoding Tips to Becoming a Better Developer" articleAuthor="Colby Taylor" articleDate="January 14th, 2021" articleContent={<><p>Breathe. Take a breathe, and by focusing on relaxing in the moment, you will be able to reposition your mind in a way to better approach any problem. This goes well beyond programming as well!</p><p>Tell me your most basic problem- literally. Verbalize it- get the words together, and you will find yourself forcing your mind to specify either something you are overlooking, or do not completley understand. This is an amazing moment, sometimes referred to as an 'ah-ha' moment.</p><p>Take a break. Allowing for space between yourself and your problem can allow you to see it for what it is- just a new challenge. You've done this before. If you are feeling burnt out, go for a walk, do eleven pushups, or ride your bike, and the distance may enlighten you with new perspective.</p></>} />
    {dataMapped}

    <div className="button" >More Info</div>
    
    </>
  );
}

export default Header;