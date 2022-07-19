import CC from "./CC";
import FC from "./FC";

import { useState } from 'react';

function Parent (){

    const [isShow, setIsShow] = useState(true);

    return(
        <>
            {isShow && <FC/>} 
            <button onClick={() => { setIsShow(!isShow)}}> {isShow ? '移除' : '呈現'} </button>

        </>
    );
}

export default Parent;