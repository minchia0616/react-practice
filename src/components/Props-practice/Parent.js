import Child from "./Child";


function Parent (){
    return(
        <>
            <Child text="HELLOOOOOOOOOOOO" a={111} isA="true" func={()=>{alert('!!!!!!')}} />

            {/* 預設props */}
            <Child/>
        </>
    );
}

export default Parent;