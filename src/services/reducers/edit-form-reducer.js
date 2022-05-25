import {
    CHANGE_SERVICE_FIELD,
    LOAD_SERVICE_FAILURE,
    LOAD_SERVICE_REQUEST,
    LOAD_SERVICE_SUCCESS, SAVE_SERVICE_FAILURE,
    SAVE_SERVICE_REQUEST, SAVE_SERVICE_SUCCESS
} from "../actions/actions";

const initialState = {
    item: {
        name: '',
        price: '',
        content: '',
    },
    loading: false,
    saving: false,
    error: null,
}

export default function editFormReducer(state = initialState, action) {
    switch (action.type) {
        /*Loading service data*/
        case LOAD_SERVICE_REQUEST:
            return {...initialState, loading: true, error: null};
        case LOAD_SERVICE_FAILURE: {
            const {message} = action.payload;
            return {...state, loading: false, error: message};
        }
        case LOAD_SERVICE_SUCCESS:
            const {data} = action.payload;
            return {...state, item: {...data}, loading: false, error: null};

        /*Saving service data*/
        case SAVE_SERVICE_REQUEST:
            return {...state, saving: true, error: null};
        case SAVE_SERVICE_FAILURE: {
            const {message} = action.payload;
            return {...state, saving: false, error: message}
        }
        case SAVE_SERVICE_SUCCESS:
            return {...initialState, saving: false, loading: true}

        /*Changing input form field*/
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            const {item} = state;
            return {
                ...state,
                item: {
                    ...item,
                    [name]: value,
                }
            };
        default:
            return state;
    }
}
