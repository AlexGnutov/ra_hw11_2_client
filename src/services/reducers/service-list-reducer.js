import {
    ADD_TO_DELETE_QUEUE,
    DELETE_SERVICE_FAILURE,
    DELETE_SERVICE_REQUEST, DELETE_SERVICE_SUCCESS,
    FETCH_SERVICES_FAILURE,
    FETCH_SERVICES_REQUEST,
    FETCH_SERVICES_SUCCESS, REMOVE_FROM_DELETE_QUEUE,
} from "../actions/actions";

const initialState = {
    items: [],
    loading: false,
    deleting: null,
    error: null,
    deleteQue: [],
};

export default function serviceListReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_SERVICES_REQUEST:
            return {...state, loading: true, error: null};
        case (FETCH_SERVICES_FAILURE || DELETE_SERVICE_FAILURE):
            const {message} = action.payload;
            return {...state, loading: false, error: message};
        case FETCH_SERVICES_SUCCESS:
            const {items} = action.payload;
            return {...state, items, loading: false, error: null};

        case DELETE_SERVICE_REQUEST:
            return {...state, deleting: true, error: null};
        case DELETE_SERVICE_FAILURE: {
            const {message} = action.payload;
            return {...state, deleting: null, error: message};
        }
        case DELETE_SERVICE_SUCCESS:
            return {...state, deleting: null, error: null };

        case ADD_TO_DELETE_QUEUE:
            const {id} = action.payload;
            const {deleteQue} = state;
            deleteQue.push(id);
            return {...state, deleteQue };
        case REMOVE_FROM_DELETE_QUEUE: {
            const {id} = action.payload;
            const {deleteQue} = state;
            const idx = deleteQue.findIndex(x => x === id);
            deleteQue.splice(idx, 1);
            return {...state, deleteQue };
        }

        default:
            return state;
    }
}
