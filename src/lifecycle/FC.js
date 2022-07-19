import { useState,useEffect,useRef } from 'react';

// const initState = () => {
//     console.log('函式型元件 - 模擬 constructor')
//     return 0;
// }


function usePrevious(value) {
    const ref = useRef()
    useEffect(() => {ref.current = value})
        return ref.current;
    }


function FC(props) {
    const [total, setTotal] = useState(0)
    // const [total, setTotal] = useState(initState());

    // 模擬didmount，掛載到頁面上只執行一次
    useEffect(() => {
        console.log('函式型元件 - 模擬 componentDidMount')
    }, [])

    // 模擬didmount + didUpdate，total狀態有改變就執行callback裡的程式，只要有重新render就執行，所以會是1+n次
    useEffect(() => {
        console.log('函式型元件 - 模擬 componentDidMount + componentDidUpdate', 'total =', total)
    }, [total]) // 相依陣列裡填入會觸發updating階段的state或props

    // 只模擬didUpdate，略過初始值
    useEffect(() => {
        if( total !== 0){
            console.log('函式型元件 - 模擬 DidUpdate' , 'total =', total )
        }
    }, [total])

    // 模擬WillUnmount，寫在 return 裡
    useEffect(() => {
        return ()=>{
            console.log('函式型元件 - 模擬componentWillUnmount')
        };
    }, [])

    // 成對的訂閱與取消訂閱的模式
    // useEffect(() => {
    //     document.getElementById('test').addEventListener('click', function () {
    //     alert('hello')
    //     })

    //     return () => {
    //     // 模擬willUnmount
    //     document.getElementById('test').removeEventListener('click')
    //     }
    // }, [])



    const prevTotal = usePrevious(total);

    // 模擬 componentDidUpdate(prevProps, prevState)
    useEffect(() => {
        console.log('FC - 模擬didMount+didUpdate','total =',total,'previous total = ',prevTotal)
    }, [total])

    return (
        <>
        {console.log('函式型元件 - render')}
        <h1>函式型元件</h1>
        <h2 onClick={() => { setTotal(total + 1) }}>{total}</h2>
        </>
    )
    }

export default FC;

// 從多台伺服器要資料，可以分別寫在多個 useEffect 裡