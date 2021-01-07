import logo from './logo.svg';
import './App.css';
import CardMain from './CardMain';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
 
      <CardMain productName="Code Flow i/o Poster"/>
      <CardMain productName="Code Flow Meditation Podcast"/>
    </div>
  );
}

export default App;
