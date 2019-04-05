import axios from 'axios';
import { GET_ERRORS } from './types';
// import setAuthToken from '../setAuthToken';
// import jwt_decode from 'jwt-decode';

export const enter = (entry) => dispatch => {
    axios.post('/api/entries/enter', entry)
        .then(console.log(entry))
        .catch(err => {
            dispatch({
                type: GET_ERRORS,
                payload: err.response.data
            })
        })
}