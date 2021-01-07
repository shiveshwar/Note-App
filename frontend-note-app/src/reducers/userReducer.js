
const defaultState = {
    isFetching: false,
    users: null,
    isResponse: false,
    errors: [],
  };
  
  export default function users(state = defaultState, action) {
    console.log('----------action-----', action.type)
    console.log('----------action-----', action.payload)

    switch (action.type) {
      case 'loadUsersStart': {
          console.log('---------case1-------')
        return {
          ...state,
          isFetching: true,
          users: null,
          errors: [],
          isResponse: false,
        };
      }
  
      case 'loadUsersComp': {
        console.log('---------case2-------')
        console.log('----------loadNoteComp-----', action.payload.users)
        return {
          ...state,
          isFetching: false,
          users: action.payload.users,
        };
      }
  
      case 'loadUsersError': {
        console.log('---------case3------')
        return {
          ...state,
          isFetching: false,
          users: null,
        };
      }
      case 'startSearching': {
          console.log('---------case1-------')
        return {
          ...state,
          isFetching: true,
          users: null,
          errors: [],
          isResponse: false,
        };
      }

      case 'searchingDone': {
        console.log('---------case2-------')
        console.log('----------loadNoteComp-----', action.payload.users)
        return {
          ...state,
          isFetching: false,
          users: action.payload.users,
        };
      }

      case 'errorInSearching': {
        console.log('---------case3------')
        return {
          ...state,
          isFetching: false,
          users: null,
        };
      }
      
      default: {
        return state;
      }
    }
  }
  