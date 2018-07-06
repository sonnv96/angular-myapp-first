
import { ListUsers } from './list.model';

export const GET_USER_LIST_SUCCESS = 'GET_USER_LIST_SUCCESS';

export function listReducer(state: ListUsers[] = [], action) {
  switch (action.type) {
    case GET_USER_LIST_SUCCESS:
      return [...state, action.payload];
    default:
      return state;
  }
}
