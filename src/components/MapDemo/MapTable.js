import './MapDemo.css';
import data from '../MapDemo/data/products.json';

function MapTable() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>圖片</th>
                        <th>庫存</th>
                        <th>產品名稱</th>
                        <th>價格</th>
                        <th>tags</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((v) => {
                        return (
                            <tr key={v.id}>
                                <td>{v.id}</td>
                                <td>{v.picture}</td>
                                <td>{v.stock}</td>
                                <td>{v.name}</td>
                                <td>{v.price}</td>
                                <td>{v.tags}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default MapTable;
