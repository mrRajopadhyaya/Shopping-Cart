import {createStore} from 'redux';
import rootReducers from '../reducers/rootReducers';

const store = createStore(rootReducers);
console.log(store,"@@ inside store");
debugger
export default store;