import counterReducer from './counter';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer: counterReducer
})

export default allReducers;