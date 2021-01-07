
const defaultState = {
    isFetching: false,
    notes: null,
    isResponse: false,
    errors: [],
  };
  
  export default function notes(state = defaultState, action) {
    console.log('----------action-----', action.type)
    console.log('----------action-----', action.payload)
    //   console.log('----------action-----', action.payload.notes)
    //   console.log('----------state-----', state)

    switch (action.type) {
      case 'loadNoteStart': {
          console.log('---------case1-------')
        return {
          ...state,
          isFetching: true,
          notes: null,
          errors: [],
          isResponse: false,
        };
      }
  
      case 'loadNoteComp': {
        console.log('---------case2-------')
        console.log('----------loadNoteComp-----', action.payload.notes)
        return {
          ...state,
          isFetching: false,
          notes: action.payload.notes,
        };
      }
  
      case 'loadNoteError': {
        console.log('---------case3------')
        return {
          ...state,
          isFetching: false,
          notes: null,
        };
      }

      default: {
        return state;
      }
    }
  }
  