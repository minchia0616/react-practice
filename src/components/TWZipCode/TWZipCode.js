    import { useState } from 'react';
    import { cities, postcodes, townships } from './data/townships';

    function TWZipCode() {
    // 代表目前被選中的縣市的索引值
    // 注意資料類型都是數字(索引值是數字)
    // -1 代表目前沒有選中任何的陣列中的值
    const [cityIndex, setCountryIndex] = useState(-1);
    const [townshipIndex, setTownshipIndex] = useState(-1);

    return (
        <>
        <h1>台灣縣市區域連動下拉選單</h1>
        <select
            value={cityIndex} onChange={(e) => {
            // value=選中的值，onChange重新設定state狀態
            // 注意e.target.value為字串類型(由網頁上傳入都是字串值)
            // 為了保持countryIndex(state狀態)的資料類型都一致相同，所以要轉為數字
            setCountryIndex(Number(e.target.value))

            // 重置townshipIndex的值為-1
            setTownshipIndex(-1)
            }}
        >
            <option value="-1">請選擇縣市</option>
            {cities.map((v, i) => {
            return (
                <option key={i} value={i}>{v}</option>
            );
            })}
        </select>
        <select
            value={townshipIndex} onChange={(e) => {
            // 注意e.target.value為字串類型(由網頁上傳入都是字串值)
            // 為了保持setTownshipIndex(state狀態)的資料類型都一致相同，所以要轉為數字
            setTownshipIndex(Number(e.target.value))
            }}
        >
            <option value="-1">請選擇區域</option>
            {/* 當有選擇縣市(countryIndex > -1)時才要作map，呈現其它的區域選項 */}
            {cityIndex > -1 && townships[cityIndex].map((v, i) => {
                return (<option key={i} value={i}>{v}</option>
                )
            })}
        </select>

        <p>
            郵遞區號:
            {cityIndex > -1 && townshipIndex > -1 && postcodes[cityIndex][townshipIndex]}
        </p>
        </>
    )
    }

export default TWZipCode;