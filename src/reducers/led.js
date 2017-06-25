/**
 * Created by chotoxautinh on 6/4/17.
 */
import {TOGGLE_LED, CHANGE_LED_VALUE} from '../actions/led';
import {value as STATUS} from '../nano-spec';

export default (state = STATUS.HIGH, action) => {
    switch (action.type) {
        case TOGGLE_LED:
            return state === STATUS.LOW ? STATUS.HIGH : STATUS.LOW;
        case CHANGE_LED_VALUE:
            return action.value;
        default:
            return state;
    }
}