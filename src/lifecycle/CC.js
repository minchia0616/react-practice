import { Component } from 'react'

class CC extends Component {
    constructor() {
        super()
        this.state = { total: 0 };
        console.log('類式元件 - constructor')
    }

    // 從多台伺服器要資料都全部寫在一 componentDidMount 裡
    componentDidMount() {
        console.log('類式元件 - componentDidMount')
        // get date from server A
        // get date from server B
        // get date from server C
    }

    componentDidUpdate() {
        console.log('類式元件 - componentDidUpdate', 'total =', this.state.total)
    }

    // componentDidUpdate(prevProps, prevState) {
    //         console.log('CC - componentDidUpdate','total =', this.state.total,'previous total = ',prevState.total)
    //     }

    componentWillUnmount() {
        console.log('類式元件 - componentWillUnmount')
    }

    render() {
        console.log('類式元件 - render')
        return (
        <>
            <h1>類式元件</h1>
            <h2 onClick={() => {
                this.setState({ total: this.state.total + 1 })
            }}
            >
            {this.state.total}
            </h2>
        </>
        )
    }
}

export default CC;

// 執行順序和寫的順序無關，constructor -> render -> componentDidMount(元件掛載完成到頁面上)