/**
 * Created by chotoxautinh on 6/4/17.
 */
import {TOGGLE_LED, CHANGE_LED_VALUE} from '../actions/led';
export const STATUS = {
    LOW: 0,
    HIGH: 1024
};

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