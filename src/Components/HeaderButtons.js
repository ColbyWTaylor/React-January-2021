import './HeaderButtons.css';
import Button from './Button';

function HeaderButtons() {
  return (
    <div>
      <Button buttonName="About"/>
      <Button buttonName="Services"/>
      <Button buttonName="Contact"/>
      <Button buttonName="Articles"/>
    </div>
  );
}

export default HeaderButtons;