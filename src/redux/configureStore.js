import {createStore, combineReducers} from 'redux';
import {DishesReducer} from './dishes';
import {CommentsReducer} from './comments';
import {PromotionsReducer} from './promotions';
import {LeadersReducer} from './leaders';


//Now configure your store
export const configureStore = () => {
    const store = createStore(
        combineReducers({
            dishes:DishesReducer,
            leaders : LeadersReducer,
            promotions : PromotionsReducer,
            comments : CommentsReducer
        })
    )
    return store;
}
