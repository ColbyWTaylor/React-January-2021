import './App.css';
import CardMain from './CardMain';
import Header from './Header';
import useSound from 'use-sound';
import boopSfx from './media/colby - candy gun - this is all just a bunch of fucking noise - combined and stacked for bandcamp restrictions.mp3'

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
<BoopButton/>

{listOptions}

 
      <Header/>
      <CardMain productName="Code Flow i/o Poster"/>
      <CardMain productName="Code Flow Meditation Podcast"/>
      <CardMain productName="Apparel"/>
      <CardMain productName="Health Test"/>


    </div>
  );
}

export default App;
