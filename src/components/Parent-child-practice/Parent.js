import ChildA from "./ChildA";
import ChildB from "./ChildB";
import {useState} from 'react';

function Parent (){

    const [parentData,setParentData] = useState('Parent Data')
    const [childBFromData,setchildBFromData] = useState('')

    
    return(
        <>
            <ChildA parentData={parentData} childBFromData={childBFromData}/>
            <ChildB setchildBFromData={setchildBFromData}/>
        </>
    );
}

export default Parent;