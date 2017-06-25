/**
 * Created by chotoxautinh on 6/4/17.
 */
import {TOGGLE_SIDEBAR} from '../actions/collapsed';
const DEFAULT_STATE = true;

export default (state = DEFAULT_STATE, action) => {
    if (action.type === TOGGLE_SIDEBAR) {
        return !state;
    }
    return state;
}