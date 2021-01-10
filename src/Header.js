import './Header.css';
import Button from './Button';


function Header() {
  return (
    <div className="Header">
      <h1>Code Flow</h1>
      <p>Better Input, Better Output</p>
      <Button buttonName="About"/>
      <Button buttonName="Services"/>
      <Button buttonName="Contact"/>
      
    </div>
  );
}

export default Header;