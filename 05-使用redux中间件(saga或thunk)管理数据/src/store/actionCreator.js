import {BTN_CLICK, CHANGE_INPUT_VALUE, INIT_LIST_ACTION, LI_CLICK,GET_TODO_LEST_ACTION} from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getBtnClickAction = () => ({
  type: BTN_CLICK
});

export const getLiClickAction = (value) => ({
  type: LI_CLICK,
  value
});

export const initListAction = (data) => ({
  type: INIT_LIST_ACTION,
  data
});

export const getTodolistAction = () => ({
  type: GET_TODO_LEST_ACTION,
});