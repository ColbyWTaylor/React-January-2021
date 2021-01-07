import logo from './logo.svg';
import './App.css';
import CardMain from './CardMain';
import Header from './Header';
import useSound from 'use-sound';

let data = [{
  type: "developer",
  needs: ["meditation", "training"]
},
{
  type: "client",
needs: ["new website", "update website","other" ]}]

const listOptions = data.map((item) => {<p>{item.type}</p>})

const BoopButton = () => {
  const [play] = useSound(boopSfx);

  return <button onClick={play}>Boop!</button>;
};

function App() {
  return (
    <div className="App">

<h1>CodeFlow.io</h1>

{listOptions}

 
      <Header/>
      <CardMain productName="Code Flow i/o Poster"/>
      <CardMain productName="Code Flow Meditation Podcast"/>


    </div>
  );
}

export default App;
