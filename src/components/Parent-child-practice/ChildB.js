import {useState} from 'react';

function ChildB (props){
    const [childBData,setChildBData] = useState('Child B Data')
    const {setchildBFromData} = props;
    return(
        <>
            <h1>ChildB</h1>
            <button onClick={()=>setchildBFromData(childBData)}>傳給爸爸</button>
        </>
    );
}

export default ChildB;