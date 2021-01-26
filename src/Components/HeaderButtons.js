import "./HeaderButtons.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function HeaderButtons() {
  return (
    <div>
      <Link exact to="/">
        <Button buttonName="About" />
      </Link>
      <Link to="/services">
        <Button buttonName="Services" />
      </Link>
      <Link to="/contact">
        <Button buttonName="Contact" />
      </Link>
      <Link to="/articles">
        <Button buttonName="Articles" />
      </Link>

      {/* <Button buttonName="Services" />
      <Button buttonName="Contact" />
      <Button buttonName="Articles" /> */}
    </div>
  );
}

export default HeaderButtons;
