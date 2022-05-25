import Alert from "react-bootstrap/Alert";

function ErrorMessage() {
    return (
        <Alert className={'services-alert'} variant={'danger'}>
            Произошла ошибка!
        </Alert>
    )
}

export default ErrorMessage;
