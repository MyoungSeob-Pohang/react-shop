import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../static/css/Detail.scss';

function Detail(props) {
    const { id } = useParams();

    let findItem = props.data.find((it) => {
        return it.id === parseInt(id);
    });

    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 2000);
    });

    const [alert, setAlert] = useState(true);

    return (
        <div className="Detail">
            <div className="container">
                <div className="row">
                    {alert === true ? (
                        <div className="my-alert2">
                            <p>재고가 얼마 남지 않았습니다.</p>
                        </div>
                    ) : null}

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
