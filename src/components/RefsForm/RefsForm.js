import { useRef } from 'react';

function RefsForm (){

    // 建議 useRef 的預設值設定為 null
    // useRef 要加 current屬性 才能得到真實 DOM 實體的參照物件
    const inputRef = useRef(null);

    return(
        <>
            <h1>RefsForm</h1>
            <input type="text" ref={inputRef} />

            <button onClick={() => {inputRef.current.focus()}}>Focus</button>

            <button onClick={() => {inputRef.current.blur()}}>Blur</button>

            <button onClick={() => {alert(inputRef.current.value)}}>Show value</button>
        </>
    );
}

export default RefsForm;

// https://ithelp.ithome.com.tw/articles/10246939