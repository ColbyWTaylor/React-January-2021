import useSound from 'use-sound';
import noise_riff from './media/colby - candy gun - this is all just a bunch of fucking noise - combined and stacked for bandcamp restrictions.mp3'

const Sounds = () => {
    const [play] = useSound(noise_riff);
  
    return <button onClick={play}>Boop!</button>;
  };

  export default Sounds;