import { data } from '../MapDemo/data/student';

function MapDemo() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>學號</th>
                        <th>姓名</th>
                        <th>生日</th>
                    </tr>
                </thead>
                <tbody>
                    {/* key 的選擇 */}
                    {/* 資料有 id 就用 id，沒 id 用 uuid或nanoid */}
                    {/* 確定資料為靜態，完全不會再變動才用索引值 */}

                    {data.map((value, index) => {
                        return (
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.birth}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}

export default MapDemo;
