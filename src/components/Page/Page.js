import { useState, useEffect } from 'react';
import './Page.css';
//import _ from 'lodash'

import axios from 'axios'

// chunk - 依size分成子陣列，ex. chunk([1, 2, 3, 4, 5], 2) -> [[1,2],[3,4],[5]]
// 陣列長度即總共有幾頁，若長度為0代表沒資料(連線失敗等等原因)
// https://stackoverflow.com/questions/8495687/split-array-into-chunks
const chunk = (arr, size) =>
    Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
    )

    function Page() {
    // 第一次記錄伺服器的原始資料用
    const [usersRaw, setUsersRaw] = useState([])
    // 呈現資料用
    const [usersDisplay, setUsersDisplay] = useState([])

    // 載入資料指示狀態
    const [isLoading, setIsLoading] = useState(false)
    // 搜尋用
    const [searchWord, setSearchWord] = useState('')

    // 分頁用
    // pageNow 目前頁號
    // perPage 每頁多少數量
    // pageTotal 目前有多少頁
    const [pageNow, setPageNow] = useState(1) // 預設第一頁
    const [perPage, setPerPage] = useState(5) // 預設一頁5筆資料
    const [pageTotal, setPageTotal] = useState(0) // 等伺服器抓完資料才知道多少(didMount時決定)

    const getUserData = async () => {
        const response = await axios.get(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/users'
        )
        setUsersRaw(response.data);

        const pageArray = chunk(response.data, perPage);

        if (pageArray.length > 0) {
        setPageTotal(pageArray.length);
        setUsersDisplay(pageArray);
        }
    }

    // didMount
    useEffect(() => {
        
        setIsLoading(true)

        getUserData()
    }, [])

    useEffect(() => {
        if (isLoading) {
        setTimeout(() => {
            setIsLoading(false)
        }, 2000)
        }
    }, [isLoading])

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
            {usersDisplay.length > 0 &&
            usersDisplay[pageNow - 1].map((v, i) => {
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

    const paginationBar = (
        <>
            <div className="pagination">
                <a href="#/" onClick={() => { setPageNow(1)}}>
                &laquo;
                </a>
                {/* Array.fill 挖洞然後填入，總共有多少頁然後每一個頁碼為索引值+1依序填入 */}
                {/* setPageNow 的頁碼為索引值+1 */}
                {Array(pageTotal).fill(1).map((v, i) => {
                    return (
                    <a
                        key={i}
                        href="#/"
                        className={i + 1 === pageNow ? 'active' : ''}
                        onClick={() => {setPageNow(i + 1)}}
                    >
                        {i + 1}
                    </a>
                    )
                })}
                <a href="#/" onClick={() => { setPageNow(pageTotal)}}>
                &raquo;
                </a>
            </div>
        </>
    )

    return (
        <>
        <h1>會員資料</h1>
        <input
            type="text"
            placeholder="輸入姓名"
            value={searchWord}
            onChange={(e) => {
            const newSearchWord = e.target.value

            setSearchWord(newSearchWord);

            setIsLoading(true);

            if (newSearchWord) {
                const newUsersDisplay = usersRaw.filter((v, i) =>
                v.name.includes(newSearchWord)
                )

                const pageArray = chunk(newUsersDisplay, perPage);

                if (pageArray.length > 0) {
                setPageTotal(pageArray.length);
                setUsersDisplay(pageArray);
                }
            } else {
                const pageArray = chunk(usersRaw, perPage);
                if (pageArray.length > 0) {
                setPageTotal(pageArray.length)
                setUsersDisplay(pageArray)
                }
            }
            }}
        />
        <hr />
        {isLoading ? spinner : displayTable}
        <br />
        {paginationBar}
        </>
    )
}

export default Page;