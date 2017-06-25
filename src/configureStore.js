/**
 * Created by chotoxautinh on 1/3/17.
 */
import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import reducer from "./reducers";

const configureStore = () => {

    const middlewares = [thunk];

    if (process.env.NODE_ENV !== 'production')
        middlewares.push(logger);

    return createStore(
        reducer,
        undefined,
        applyMiddleware(...middlewares)
    );
};

export default configureStore;