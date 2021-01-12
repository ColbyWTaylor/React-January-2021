import './App.css';
import CardMain from './CardMain';
import Header from './Header';
import Sounds from './Sounds';

let data = [{
  type: "developer",
  needs: ["meditation", "training"]
},
{
  type: "client",
needs: ["new website", "update website","other" ]}]

const listOptions = data.map((item) => {<p>hello</p>})

function App() {
  return (
    <div className="App">
      <Header/>
      <Sounds/>
      <listOptions />
      <CardMain productName="Code Flow i/o Poster"/>
      <CardMain productName="Code Flow Meditation Podcast"/>
      <CardMain productName="Apparel"/>
      <CardMain productName="Health Test"/>

      
      <p>We are dedicated to improving the human experience.</p>
      
    </div>
  );
}

export default App;