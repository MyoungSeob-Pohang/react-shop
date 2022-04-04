import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Product from './components/Product';
import Data from './components/atoms/data';
import './static/css/App.scss';
import { useState } from 'react';

function App() {
    let [shoes, setShoes] = useState(Data);

    return (
        <div className="App">
            <Navbar />
            <Jumbotron />
            <Product data={shoes} />
        </div>
    );
}

export default App;
