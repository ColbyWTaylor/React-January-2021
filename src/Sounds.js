import useSound from 'use-sound';
import noise_riff from './media/electronic-screeching.mp3'
import {useState} from 'react';

function Sounds() {
    const [play] = useSound(noise_riff);
    const [playSound, setPlaySound] = useState(true);
    
    const codeWord = "fuzz"

    return (
        <div>
            <p>Code:</p>
            <input onChange={(e) => e.target.value === codeWord ? play : null} />
            <button onClick={()=>setPlaySound(!playSound)}>State:</button>
            <p>{playSound.valueOf}</p>
        </div>
    );
}

  export default Sounds;