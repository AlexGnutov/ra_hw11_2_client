import Spinner from "react-bootstrap/Spinner";

function LoadingSpinner() {
    return (
        <div className={'services-spinner'}>
            <Spinner animation={'border'}/>
        </div>
    )
}

export default LoadingSpinner;
