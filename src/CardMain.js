import './CardMain.css';


function CardMain(props) {
  return (
    <div className="CardMain">
      This is a {props.productName}
      <div className="button">More info</div>
    </div>
  );
}

export default CardMain;
