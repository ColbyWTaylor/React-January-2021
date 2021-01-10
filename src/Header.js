import './Header.css';
import Button from './Button';


function Header() {
  return (
    <div className="Header">
      This is the Header to my Beautiful website.
      <div className="button">Button 1</div>
      <Button buttonName="Link 1"/>
      
    </div>
  );
}

export default Header;