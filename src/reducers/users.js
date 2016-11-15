import { FETCH_USERS }  from '../actions/types'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_USERS:
    return [ ...state, ...action.payload.data];
  }

  return state;
}



// spead operator
// return [ ...state, ...action.payload];
// Take the exisiting state and concatinate on it with this payload
