import Apiaccounts from '../api/Apiacconts';
import history from '../History';

export const CreateAccountAction = (formvalues) => {
    return async (dispatch) => {
        const response = await Apiaccounts.post('/accounts', formvalues);
        dispatch({ type: 'CREATE_ACCOUNT', payload: response.data });
        history.push('/');
    }
}

export const FetchAccounts = () => {
    return async (dispatch) => {
        const response = await Apiaccounts.get('./accounts');
        dispatch({ type: 'FETCH_ACCOUNTS', payload:response.data });
    }
}

export const AddMoneyAction = (id,money) => {
    return async (dispatch) => {

        const response = await Apiaccounts.patch(`/accounts/${id}`,  money);
        dispatch({ type: 'ADD_MONEY', payload: response.data });
        
       
    }
}