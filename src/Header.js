import './Header.css';
import Button from './Button';


function Header() {
  return (
    <div className="Header">
      <h1>Code Flow</h1>
      <p>Breathe In, Code Out</p>
      <hr />
      <Button buttonName="About"/>
      <Button buttonName="Services"/>
      <Button buttonName="Contact"/>
      <p>We are dedicated to improving the human experience.</p>
      
    </div>
  );
}

export default Header;