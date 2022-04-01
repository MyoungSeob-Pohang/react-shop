import shoes1 from '../static/image/shoes1.jpg';
import shoes2 from '../static/image/shoes2.jpg';
import shoes3 from '../static/image/shoes3.jpg';

function Product() {
    return (
        <div className="Product">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={shoes1} alt="" />
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                    <div className="col-md-4">
                        <img src={shoes2} alt="" />
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                    <div className="col-md-4">
                        <img src={shoes3} alt="" />
                        <h4>상품명</h4>
                        <p>상품정보</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;
