import useSound from 'use-sound';
import noise_riff from './media/colby - candy gun - this is all just a bunch of fucking noise - combined and stacked for bandcamp restrictions.mp3'
import {useState} from 'react';

function Sounds() {
    const [play] = useSound(noise_riff);
    const [playSound, setPlaySound] = useState(true);

    return (
        <div>
            <input onChange={!playSound ? play : null} />
            <button onClick={()=>setPlaySound(!playSound)}>State:</button>
        </div>
    );
}

  export default Sounds;