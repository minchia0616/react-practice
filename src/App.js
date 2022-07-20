import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import { useState } from 'react';

import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Login from './pages/Login';

// import { useState } from 'react';
// import './App.css';
// import JsxDemo from './components/JsxDemo/JsxDemo';
// import MapDemo from './components/MapDemo/MapDemo';
// import MapTable from './components/MapDemo/MapTable';
// import StateActive from './components/StateActive/StateActive';
// import StateObjArr from './components/StateObjArr/StateObjArr';
// import Parent from "./components/Props-practice/Parent";
// import Parent from "./components/Parent-child-practice/Parent";
// import OrderPage from "./components/OrderPage/OrderPage";
// import Controlled from "./components/Controlled/Controlled";
// import BirthSelect from "./components/BirthSelect/BirthSelect";
// import TWZipCode from "./components/TWZipCode/TWZipCode";
// import BMI from "./components/BMI/BMI";
// import MultipleInput from "./components/MultipleInput/MultipleInput";
// import HTML5Form from "./components/HTML5Form/HTML5Form";
// import RefsForm from "./components/RefsForm/RefsForm";
// import Parent from "./lifecycle/Parent";
// import Users from "./components/Users/Users";
// import Page from "./components/Page/Page";


function App() {
    // useState(0) => [getter, setter]
    // const [total, setTotal] = useState(0);

    // return (
    //     <>
    //         {/* <h1 onClick={() => setTotal(total + 1)}> {total} </h1> */}
    //         {/* <JsxDemo /> */}
    //         {/* <MapDemo /> */}
    //         {/* <MapTable /> */}
    //         {/* <StateActive /> */}
    //         {/* <StateObjArr /> */}
    //         {/* <Parent/> */}
    //         {/* <OrderPage/> */}
    //         {/* <Controlled/> */}
    //         {/* <BirthSelect/> */}
    //         {/* <TWZipCode/> */}
    //         {/* <BMI/> */}
    //         {/* <MultipleInput/> */}
    //         {/* <HTML5Form/> */}
    //         {/* <RefsForm/> */}
    //         {/* <Parent/> */}
    //         {/* <Users/> */}
    //         {/* <Page/> */}
    //     </>
    // );

    const [auth, setAuth] = useState(false);

    return (
        <BrowserRouter>

            {/* 連結到各頁面連結 */}
            <h3>Link元件</h3>
            <Link to="/">Home</Link>
            <br />
            <Link to="about">About</Link>
            <br />
            <Link to="product">Product</Link>
            <br />
            <Link to="login">Login</Link>

            {/* 路由表 */}
            <Routes>
                <Route path="/" element={<Home auth={auth} />} />
                <Route path="about" element={<About auth={auth} />} />
                <Route path="product" element={<Product auth={auth} />} />
                <Route path="login" element={<Login auth={auth} setAuth={setAuth} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
