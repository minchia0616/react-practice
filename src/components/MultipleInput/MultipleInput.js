import { Fragment, useState } from 'react';


// 多欄位共用狀態，useState若是陣列可用[]，若是物件要先定義好每個欄位的key:value


function MultipleInput() {
    const [userData, setUserData] = useState({
        fullName: '',
        phone: '',
        email: '',
        gender: '',
        car: '',
        likeList: [],
    })

    const genderOptions = ['男', '女', '不提供'];

    const carOptions = ['Benz', 'BMW', 'Toyota'];

    //const [likeList, setLikeList] = useState([])
    const fruitOptions = ['西瓜', '芒果', '蘋果'];

    const handleChange = (e) => {
        console.log(e.target.type, e.target.name, e.target.value)
        // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Object_initializer#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E5%90%8D
        // [e.target.name]: e.target.value 為 物件的中括號表示法
        // 展開原物件，將屬性名稱對應的 value 設定回去

        setUserData({ ...userData, [e.target.name]: e.target.value })
    }

    return (
        <>
        <label>姓名</label>
        <input
            name="fullName"
            type="text"
            value={userData.fullName}
            onChange={handleChange}
        />
        <br />

        <label>電話</label>
        <input
            name="phone"
            type="text"
            value={userData.phone}
            onChange={handleChange}
        />
        <br />

        <label>Email</label>
        <input
            name="email"
            type="text"
            value={userData.email}
            onChange={handleChange}
        />
        <br />

        <label>性別</label>
        {genderOptions.map((v, i) => {
            return (
            <Fragment key={i}>
                <input
                name="gender"
                type="radio"
                checked={userData.gender === v}
                value={v}
                onChange={handleChange}
                />
                <label>{v}</label>
            </Fragment>
            )
        })}
        <br />
        
        <label>喜好車子品牌</label>
        <select value={userData.car} name="car" onChange={handleChange}>
            <option value="">請選擇</option>
            {carOptions.map((v, i) => {
                return (
                    <option key={i} value={v}>
                    {v}
                    </option>
                )
            })}
        </select>
        <br />


        <label>喜好的水果</label>
        {fruitOptions.map((v, i) => {
            return (
            <div key={i}>
                <input
                type="checkbox"
                checked={userData.likeList.includes(v)}
                value={v}
                onChange={(e) => {
                    //先判斷是否有在likeList狀態陣列中
                    if (userData.likeList.includes(e.target.value)) {
                    // if有 -> 移出陣列
                    const newLikeList = userData.likeList.filter((v, i) => {
                        return v !== e.target.value;
                    })
                    setUserData({ ...userData, likeList: newLikeList })
                    } else {
                    // else -> 加入陣列
                    const newLikeList = [...userData.likeList, e.target.value]

                    setUserData({ ...userData, likeList: newLikeList })
                    }
                }}
                />
                <label>{v}</label>
            </div>
            )
        })}
        </>
    )
}

export default MultipleInput;