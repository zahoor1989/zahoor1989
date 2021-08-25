import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';


export const CommentsReducer = (state = COMMENTS, action) => {
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            //defin the how new state will be returned
            let comment = action.payload;
                comment.id = state.length;
                comment.date = new Date().toISOString();
                return state.concat(comment);; 
        default:
        return state
    }
}