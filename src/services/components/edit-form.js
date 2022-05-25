import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef} from "react";
import {changeServiceField, loadService, saveService} from "../actions/action-creators";
import LoadingSpinner from "./messages/loading-spinner";
import ErrorMessage from "./messages/error-message";
import Spinner from "react-bootstrap/Spinner";

function EditForm(props) {
    const {item, loading, saving, error} = useSelector(state => state.editForm);
    const {id} = useParams();
    const dispatch = useDispatch();
    const fieldsetRef = useRef();

    const navigate = useNavigate();
    const onSuccess = () => {
        navigate('/', {replace: true});
    }
    const handleCancel = () => {
        navigate('/services');
    }

    const handleChange = event => {
        const {name, value} = event.target;
        dispatch(changeServiceField(name, value)); // thunk based call
    }

    const handleSubmit = event => {
        event.preventDefault();
        fieldsetRef.current.disabled = true;
        dispatch(saveService(parseInt(id, 10), onSuccess)); // thunk based call
    }

    useEffect(() => {
        dispatch(loadService(id)); // thunk based call
    }, [dispatch, id]);

    if (loading) {
        return <LoadingSpinner/>;
    }

    if (error) {
        return <ErrorMessage/>;
    }

    return (
        <Form onSubmit={handleSubmit}>
            <fieldset ref={fieldsetRef}>
                <Form.Group className={'mb-3'}>
                    <Form.Label>Название</Form.Label>
                    <Form.Control type={'text'} value={item.name} name={'name'} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className={'mb-3'}>
                    <Form.Label>Стоимость</Form.Label>
                    <Form.Control type={'number'} value={item.price} name={'price'} onChange={handleChange}/>
                </Form.Group>
                <Form.Group className={'mb-3'}>
                    <Form.Label>Описание</Form.Label>
                    <Form.Control type={'text'} value={item.content} name={'content'} onChange={handleChange}/>
                </Form.Group>
                <Button className={'listed-button'} type={'button'} onClick={handleCancel}>
                    Отмена
                </Button>
                <Button className={'listed-button'} type={'submit'}>
                    {saving ? <Spinner size={'sm'} animation={'border'}/> : 'Сохранить'}
                </Button>
            </fieldset>
        </Form>
    )
}

export default EditForm;
