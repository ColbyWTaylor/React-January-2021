import './App.css';
import Cards from './Components/Cards';
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
      <Cards />
      
      <Footer/>
      
      
    </div>
  );
}

export default App;