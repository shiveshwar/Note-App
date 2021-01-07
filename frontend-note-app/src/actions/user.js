
import axios from 'axios';

export function getUsers() {
    return async (dispatch, getState) => {
        dispatch({
            type: 'loadUsersStart',
        });
        axios.get(`http://localhost:3000/users`)
        .then(res => {
            console.log('-----------------res.data------------------', res.data)
            if (res.data) {
                console.log('-----------------if---------------', res.data)
                return dispatch({
                    type: 'loadUsersComp',
                    payload: {
                        users: res.data,
                    }
                });
            }
        }).catch((error) => {
            dispatch({
            type: 'loadUsersError',
            error,
            });
        });
    }
}