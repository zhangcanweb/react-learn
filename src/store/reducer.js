import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../components/header/store';

const reducer = combineReducers({
    headerReducer
})
export default reducer;

