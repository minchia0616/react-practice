import { useState, useEffect } from 'react';
import './Users.css';

import axios from 'axios';

// User物件
// {
//     "id": "107001",
//     "name": "張佳蓉",
//     "birth": "990101"
//  },

function Users2() {
    // 第一次記錄伺服器的原始資料用
    const [usersRaw, setUsersRaw] = useState([])
    // 呈現資料用
    const [usersDisplay, setUsersDisplay] = useState([])

    // 載入資料指示狀態
    const [isLoading, setIsLoading] = useState(false)
    // 搜尋用
    const [searchWord, setSearchWord] = useState('')

    const getUserData = async () => {
        const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
        )

        // 設定到state
        setUsersDisplay(response.data);
        setUsersRaw(response.data);
    }

    // 元件掛載到頁面上就開啟 loading 動畫，2秒後把動畫關閉
    useEffect(() => {
        // 開啟載入指示動態
        setIsLoading(true);

        getUserData();

        setTimeout(() => {
        setIsLoading(false)
        }, 2000)
    }, [])

    const spinner = (
        <>
        <div className="spinner-grow text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
        </>
    )

    const displayTable = (
        <table>
        <thead>
            <tr>
            <th>ID</th>
            <th>姓名</th>
            <th>生日</th>
            </tr>
        </thead>
        <tbody>
            {usersDisplay.map((v, i) => {
            return (
                <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.name}</td>
                <td>{v.birth}</td>
                </tr>
            )
            })}
        </tbody>
        </table>
    )

    return (
        <>
        <h1>會員資料</h1>
        <input
            type="text"
            placeholder="輸入姓名"
            value={searchWord}
            onChange={(e) => {

            // 因為setState為非同步，故先把狀態存起來，確保能拿到最新的狀態值
            const newSearchWord = e.target.value;

            setSearchWord(newSearchWord);

            setIsLoading(true);

            if (newSearchWord) {
                const newUsersDisplay = usersRaw.filter((v, i) =>
                v.name.includes(newSearchWord)
                )
                setUsersDisplay(newUsersDisplay);
            } else {
                setUsersDisplay(usersRaw);
            }
            }}
        />
        <hr />
        {isLoading ? spinner : displayTable}
        </>
    )
}

export default Users2;

// 使用 onChange ，不綁定按鈕的搜尋方式