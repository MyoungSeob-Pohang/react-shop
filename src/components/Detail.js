import { useParams } from 'react-router-dom';

function Detail(props) {
    const { id } = useParams();

    let findItem = props.data.find((it) => {
        return it.id === parseInt(id);
    });

    return (
        <div className="Detail">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src="https://codingapple1.github.io/shop/shoes1.jpg" alt="" width="100%" />
                    </div>
                    <div className="col-md-6 mt-4">
                        <h4 className="pt-5">{findItem.title}</h4>
                        <p>{findItem.content}</p>
                        <p>{findItem.price}원</p>
                        <button className="btn btn-danger">주문하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Detail;
