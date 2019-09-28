import {BTN_CLICK, CHANGE_INPUT_VALUE, LI_CLICK} from './actionTypes';

export const getInputChangeAction=(value)=>({
  type:CHANGE_INPUT_VALUE,
  value
});

export const getBtnClickAction=()=>({
  type:BTN_CLICK
});

export const getLiClickAction=(value)=>({
  type:LI_CLICK,
  value
});