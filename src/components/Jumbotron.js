import { Button } from 'react-bootstrap';
import '../static/css/Jumbotron.scss';

function Jumbotron() {
    return (
        <div className="Jumbotron">
            <h1>20% Season Off</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or
                information.
            </p>
            <p>
                <Button bsStyle="primary">Learn more</Button>
            </p>
        </div>
    );
}

export default Jumbotron;
