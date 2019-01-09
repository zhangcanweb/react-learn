import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer} from '../components/header/store';
import { reducer as carouselReducer} from '../components/carousel/store';

const reducer = combineReducers({
    headerReducer,
    carouselReducer
})
export default reducer;

