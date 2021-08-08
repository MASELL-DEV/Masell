import reducer from "../reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { sessionService } from "redux-react-session";

const store = createStore(reducer, applyMiddleware(thunk));

const options = { refreshOnCheckAuth: true, redirectPath: '/home', driver: 'COOKIES'};


sessionService.initSessionService(store, options);

export default store