import { createStore } from 'redux';
import rootReducer from './rootReducer.js';


const Store = createStore(rootReducer);

export default Store;
