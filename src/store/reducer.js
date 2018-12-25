import {INPUT_CHANGE_VALUE, LIST_ADD_ITEM, DELETE_ITEM} from './actionTypes';
const defaultState = {
    inputValue: '',
    list: ['无事可做']
}
export default (state=defaultState, action) => {
    if (action.type=== INPUT_CHANGE_VALUE) {
        const newState={...state};
        newState.inputValue = action.value;
        return newState;
    }
    if (action.type===LIST_ADD_ITEM) {
        const newState={...state};
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;
    }
    if (action.type===DELETE_ITEM) {
        const newState={...state};
        newState.list.splice(action.index, 1);
        return newState;
    }
    return state;
}