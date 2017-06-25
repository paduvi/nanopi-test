/**
 * Created by chotoxautinh on 6/4/17.
 */
export const TOGGLE_LED = "TOGGLE_LED";
export const CHANGE_LED_VALUE = "CHANGE_LED_VALUE";

export const toggle = () => dispatch => dispatch({type: TOGGLE_LED});
export const changeLedValue = (value) => dispatch => dispatch({
    type: CHANGE_LED_VALUE,
    value
})