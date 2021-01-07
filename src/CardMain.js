import './CardMain.css';


function CardMain(props) {
  return (
    <div className="CardMain">
      This is a {props.productName}
    </div>
  );
}

export default CardMain;
