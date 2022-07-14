// 檔名為index可以省略，OrderList開資料夾，把跟著OrderList的ProductItems放進去表示兩者是一起的
// 並把 OrderList 元件檔名改為index，作為區分這個資料夾的首元件
import OrderList from './components/OrderList';
import Summary from './components/Summary';
import './OrderPage.css';

import { useState } from 'react';

import { products } from './data/products';

//初始化狀態用的函式
// const initState = (productArray) => {
//     const state = []

//     for (let i = 0; i < productArray.length; i++) {
//         state.push(1)
//     }

//     return state;
//     }

// 初始化狀態的時候，擴增 count 屬性
const initState = (productArray) => {
    const state = []

    for (let i = 0; i < productArray.length; i++) {
    state.push({ ...productArray[i], count: 1 })
    }

    return state;
}

    function OrderPage() {

    // 多樣產品用的共同狀態
    const [productsInOrder, setProductsInOrder] = useState(initState(products));

    // reduce寫法
    //const calcTotalNumber = () => counts.reduce((a, b) => a + b, 0)

    const calcTotalNumber = () => {
        let total = 0

        for (let i = 0; i < productsInOrder.length; i++) {
        total += productsInOrder[i].count;
        }

        return total
    }

    const calcTotalPrice = () => {
        let total = 0

        for (let i = 0; i < productsInOrder.length; i++) {
        total += productsInOrder[i].count * productsInOrder[i].price
        }

        return total
    }

    // reduce寫法
    // const calcTotalPrice = () =>
    //   counts.reduce(function (r, a, i) {
    //     return r + a * products[i].price
    //   }, 0)


    return (
        <div className="card">
        <div className="row">
            <OrderList productsInOrder={productsInOrder} setProductsInOrder={setProductsInOrder} />
            <Summary
            totalNumber={calcTotalNumber()}
            totalPrice={calcTotalPrice()}
            />
        </div>
        </div>
    )
}

export default OrderPage;