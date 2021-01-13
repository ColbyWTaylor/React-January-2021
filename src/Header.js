import './Header.css';
import HeaderButtons from './HeaderButtons'


function Header() {
  return (
    <>
    <div className="Header">
      <h1>Code Flow</h1>
      <p>Breathe In, Code Out</p>
      <hr className="HeaderHr"/>
    </div>
    <HeaderButtons />
    </>
  );
}

export default Header;