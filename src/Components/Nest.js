import './Nest.css';

function Nest() {

  let data = [
    { id: 1, contents: [ 'dolphin', 'mosquito', 'alien' ]},
    { id: 2, contents: [ 'car', 'plane', 'submarine' ]},
  ]

  return (
  
    <div className="nest">
  <ul>
  {data.map(element => {
    return element.contents.map(innerArrayElement => (
      <li key={element.id}>
        {innerArrayElement} - {element.id}
      </li>
    ))
  })}
</ul>
</div>
)

}


export default Nest;