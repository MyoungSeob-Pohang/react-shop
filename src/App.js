import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Product from './components/Product';
import Data from './components/atoms/data';
import './static/css/App.scss';
import { useState } from 'react';
import { Route } from 'react-router-dom';
import Detail from './components/Detail';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App() {
    let [shoes, setShoes] = useState(Data);

    return (
        <div className="App">
            <Navbar />
            <Switch>
                {/* exact는 딱 맞는 경로만 보여줌 */}
                <Route exact path="/">
                    <Jumbotron />
                    <Product data={shoes} />
                </Route>
                <Route path="/detail">
                    <Detail />
                </Route>
                <Route path="/:id">
                    <div>아무거나 보여주셈</div>
                </Route>

                {/* 이런식으로 컴포넌트 전달 가능 */}
                {/* <Route path={'/패스'} component={modal}></Route> */}
            </Switch>
        </div>
    );
}

export default App;
