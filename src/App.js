import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Product from './components/Product';
import './static/css/App.scss';

function App() {
    return (
        <div className="App">
            <Navbar />
            <Jumbotron />
            <Product />
        </div>
    );
}

export default App;
