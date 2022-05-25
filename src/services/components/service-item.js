import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {deleteService} from "../actions/action-creators";

const div = document.createElement('div');
div.innerHTML = '&#128465;';
const wasteBin = div.innerHTML;
div.remove();

function ServiceItem(props) {
    const {item} = props;
    const [deleting, setDeleting] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const editHandler = (id) => {
        navigate(`/services/${id}`);
    }

    const deleteHandler = (id) => {
        setDeleting(true);
        dispatch(deleteService(id));
    }

    return (
        <>
            <div className={'services-list-item-text'}>
                {item.name}: {item.price} руб.
            </div>
            {deleting ?
                <>
                    <Button className={'listed-button'} disabled={true}>
                        <Spinner size={'sm'} animation={'border'}/>
                    </Button>
                </> :
                <>
                    <Button className={'listed-button'} onClick={() => editHandler(item.id)}>
                        {'\u270E'}
                    </Button>
                    <Button className={'listed-button'} onClick={() => deleteHandler(item.id)}>
                        {wasteBin}
                    </Button>
                </>
            }
        </>
    )
}

export default ServiceItem;

