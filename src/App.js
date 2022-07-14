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
import Controlled from "./components/Controlled/Controlled";


function App() {
    // useState(0) => [getter, setter]
    // const [total, setTotal] = useState(0);

    return (
        <>
            {/* <h1 onClick={() => setTotal(total + 1)}> {total} </h1> */}
            {/* <JsxDemo /> */}
            {/* <MapDemo /> */}
            {/* <MapTable /> */}
            {/* <StateActive /> */}
            {/* <StateObjArr /> */}
            {/* <Parent/> */}
            {/* <OrderPage/> */}
            <Controlled/>
            
        </>
    );
}

export default App;
