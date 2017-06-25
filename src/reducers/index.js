/**
 * Created by chotoxautinh on 6/4/17.
 */
import {combineReducers} from "redux";

import collapsed from './collapsed';
import led from './led';

export default combineReducers({
    collapsed,
    led
});