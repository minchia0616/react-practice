import { useState } from 'react';
import './StateActive.css';

function StateActive() {
    const menuItems = ['首頁', '關於我們', '產品'];

    // 預設索引值為 -1，讓全部選單都不亮背景色
    const [click, setClick] = useState(-1);

    return (
        <ul>
            {menuItems.map((v, i) => {
                return (
                    <li key={i} onClick={() => {setClick(i)}} >
                        <a href="#/" className={click === i ? 'active' : ''}>
                            {v}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default StateActive;
