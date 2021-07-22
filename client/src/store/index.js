import {createStore,applyMiddleware} from "redux";
import reducer from "../reducer";
import thunk from "redux-thunk";
const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
);

//const store=createStore(reducer,applyMiddleware(thunk))

export default store;