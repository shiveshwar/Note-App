
import axios from 'axios';

export function viewNote() {
    return async (dispatch, getState) => {
        dispatch({
            type: 'loadNoteStart',
        });
        axios.get(`http://localhost:3000/notes`)
        .then(res => {
            console.log('-----------------res.data------------------', res.data)
            if (res.data) {
                console.log('-----------------if---------------', res.data)
                return dispatch({
                    type: 'loadNoteComp',
                    payload: {
                        notes: res.data,
                    }
                });
            }
        }).catch((error) => {
            dispatch({
            type: 'loadNoteError',
            error,
            });
        });
    }
}
export function searchUserByIdByNote( url ) {
    return async (dispatch, getState) => {
        dispatch({
            type: 'startSearching',
        });
        axios.get(url)
        .then(res => {
            console.log('-----------------res.data------------------', res.data)
            if (res.data) {
                console.log('-----------------if---------------', res.data)
                return dispatch({
                    type: 'searchingDone',
                    payload: {
                        users: res.data,
                    }
                });
            }
        }).catch((error) => {
            dispatch({
            type: 'errorInSearching',
            error,
            });
        });
    }
}