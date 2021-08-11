import {createStore} from 'redux';
import {Reducer, initialState} from './reducer';


//Now configure your store

export const configureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    )
    return store;
}
