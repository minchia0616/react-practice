import ProductItems from "./ProductItems";
// import { products } from '../../data/products';

function OrderList(props){

    const { productsInOrder, setProductsInOrder } = props;

    return(
    <>
    <div className="col-md-8 cart">
        <div className="title">
            <div className="row">
            <div className="col">
                <h4>
                <b>訂購單</b>
                </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
                3種商品項目
            </div>
            </div>
        </div>

        {productsInOrder.map((v,i)=>{
            {/* const { id, name, category, image, price } = v */}

            return(
                <ProductItems 
                key={v.id} 
                // // count={counts[i]}
                // setCount={(newCount) => {

                // // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
                // const newCounts = [...counts];

                // // 2. 在新的變數值(陣列/物件)上作處理
                // // 限制最少買一件
                // newCounts[i] = newCount < 1 ? 1 : newCount;

                // // 3. 設定回原本的狀態中
                // setCounts(newCounts)
                // }}

                removeItem={() => {
                    const newProductsInOrder = productsInOrder.filter((v2, i2) => {
                        return v.id !== v2.id;
                })
                    setProductsInOrder(newProductsInOrder);
                }}
                

                setCount = {(newCount)=>{
                    const newProductsInOrder = productsInOrder.map((v2, i2) => {

                        if (i2 === i) {
                            return { ...v2, count: newCount < 1 ? 1 : newCount }
                        }
                        return v2
                    })
                    setProductsInOrder(newProductsInOrder);
                }}
                {...v}

                // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)，深拷貝多一層
                // const newProductsInOrder = productsInOrder.map((v2) => {
                //   return { ...v2 }
                // })
                // // 2. 在新的變數值(陣列/物件)上作處理
                // newProductsInOrder[i].count = newCount < 1 ? 1 : newCount
            />
            )
        })}
        
        <div className="back-to-shop">
            <a href="#/">←</a>
            <span className="text-muted">回到商品頁</span>
        </div>
    </div>
    </>
    )
}
export default OrderList;