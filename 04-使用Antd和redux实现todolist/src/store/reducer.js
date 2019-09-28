import {BTN_CLICK, CHANGE_INPUT_VALUE, LI_CLICK} from './actionTypes';

const defaultState = {
  inputValue: '123',
  list: ['123', '456'],

};

export default (state = defaultState, action) => {

  if (action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.inputValue = action.value;
    return newState;
  }

  if (action.type === BTN_CLICK) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list = [...newState.list, newState.inputValue];
    newState.inputValue = '';
    return newState;
  }

  if (action.type === LI_CLICK) {
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.value, 1);
    return newState;
  }

  return state;
}