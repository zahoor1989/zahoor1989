import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';

//define initial state

export const initialState = {
    dishes : DISHES,
    comments : COMMENTS,
    promotions : PROMOTIONS,
    leaders : LEADERS
}


// defind reducer
export const Reducer = (state = initialState, action) => {
    return state;
}