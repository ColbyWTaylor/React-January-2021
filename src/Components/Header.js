import './Header.css';
import HeaderButtons from './HeaderButtons'
import Article from './Article'
import Nest from './Nest'


function Header() {

  let preferredLanguage = "JS"

  return (
    <>
    <div className="Header">
      <h1>CodeFlow.io</h1>
      <p>/*Remember to Breathe Here*/</p>
     { (preferredLanguage === "JS") && (<p>Language Preference: <i>JavaScript</i></p>)}
      <hr className="HeaderHr"/>
    </div>
    <Nest />
    <HeaderButtons />
    <Article />

    <div className="button">More Info</div>
    
    </>
  );
}

export default Header;