import { combineReducers } from 'redux';
import { reducer as formreducer } from 'redux-form';
import _ from 'lodash'

const AccountReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_ACCOUNTS':
            return { ...state, ..._.mapKeys(action.payload, 'id') };
       
        default:
            return state;
    }

}

export default combineReducers({
    form: formreducer,
    accounts:AccountReducer
})