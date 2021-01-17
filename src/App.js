import './App.css';
import CardMain from './Components/CardMain';
import Header from './Components/Header';
import Footer from './Components/Footer';
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
      <CardMain productName="Code Flow i/o Poster" productInfo="It is a poster"/>
      <CardMain productName="Code Flow Meditation Podcast" productInfo="Limited run audio podcast episodes"/>
      <CardMain productName="Apparel" productInfo="Look dashingly comfortable from the comfort of our clothes."/>
      <CardMain productName="Health Test" productInfo="A checklist for keeping it 100%"/>

      
      <Footer/>
      
      
    </div>
  );
}

export default App;