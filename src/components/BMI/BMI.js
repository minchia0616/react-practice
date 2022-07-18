import { useState } from 'react';

function BMI (){

    const [ height,setHeight ] = useState(0);
    const [ weight,setWeight ] = useState(0);
    const [myBMI, setMyBMI] = useState(0);


    return(
        <>
            <label>身高：</label>
            <input type="text" name='height' value={height} onChange={(e)=>{setHeight(Number(e.target.value))}}/>

            <label>體重：</label>
            <input type="text" value={weight} onChange={(e)=>{setWeight(Number(e.target.value))}}/>

            <button onClick={()=> {
                const bmi = weight / Math.pow(height / 100, 2)
                setMyBMI(bmi)
            }}>點我計算</button>

            <button
                    onClick={() => {
                        setHeight(0)
                        setWeight(0)
                        setMyBMI(0)
                    }}
                >清除</button>

            {/* toFixed為格式化數字使用，保留一位小數之後四捨五入 */}
            <p>你的BMI值為: {myBMI > 0 ? myBMI.toFixed(1) : ''}</p>
        </>
    )
}

export default BMI;