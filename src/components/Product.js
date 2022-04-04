import ProductItem from './atoms/ProductItem';

function Product({ data }) {
    return (
        <div className="Product">
            <div className="container">
                <div className="row">
                    {data.map((item, key) => {
                        return <ProductItem data={item} key={key} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Product;
