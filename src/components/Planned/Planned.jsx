import React, {useState} from 'react';
import classes from './Button.module.css'


function Planned() {
    const [isRed, setIsRed] = useState(false)
    return (
        <div>
            <button onClick={() =>setIsRed(!isRed)} style={{backgroundColor: isRed?  'orange' : 'blue'}}>save</button>
            <button className={classes.btn}>Show</button>
        </div>
    )
}

export default Planned
