function ProductItem({ data }) {
    return (
        <div className="col-md-4">
            <img src={'./image/shoes' + (data.id + 1) + '.jpg'} alt="" />
            <h4>{data.title}</h4>
            <p>
                {data.content} & {data.price}
            </p>
        </div>
    );
}

export default ProductItem;
