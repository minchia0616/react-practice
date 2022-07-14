import { useState } from 'react';

function Controlled(){

    const [inputText, setInputText] = useState('');
    const [textArea, setTextArea] = useState('');

    //radio group
    const [gender, setGender] = useState('');
    const genderOptions = ['男', '女', '不提供']

    //select
    const [car, setCar] = useState('');
    const carOptions = ['Benz', 'BMW', 'Honda']

    return(
        <>
            <section id="inputText">
                <h1>文字輸入框(input-text)</h1>
                <input
                type="text"
                value={inputText}
                onChange={(e) => {
                    setInputText(e.target.value)
                }}
                />
            </section>
            <section id="textArea">
                <h1>文字輸入區域(textarea)</h1>
                <textarea
                value={textArea}
                onChange={(e) => {
                    setTextArea(e.target.value)
                }}
                />
            </section>
            <section id="radio-group">
                <h1>選項按鈕-群組(radio-group)</h1>
                {genderOptions.map((v, i) => {
                return (
                    <div key={i}>
                    <input
                        type="radio"
                        checked={gender === v}
                        value={v}
                        onChange={(e) => {
                        setGender(e.target.value)
                        }}
                    />
                    <label>{v}</label>
                    </div>
            )
            })}
            </section>
            <section>
                <h1>下拉式選單(select)</h1>
                    <select value={car} onChange={(e) => {setCar(e.target.value)}}>
                        <option value="">---請選擇---</option>
                        {carOptions.map((v,i)=>{
                            return (
                                <option key={i} value={v}>{v}</option>
                            );
                        })}
                    </select>
            </section>
        </>
    );
}

export default Controlled;