import { FETCH_POSTS } from '../actions'; //don't need to specify index file. Video 126
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
  case FETCH_POSTS:
    return _.mapKeys(action.payload.data, 'id');  
  default:
    return state;
  }
}
