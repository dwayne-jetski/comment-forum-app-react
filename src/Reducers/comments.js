import { SAVE_COMMENT } from 'actions/types';

const ininialState = []

export default function(state = ininialState, action){
    switch(action.type){
        case SAVE_COMMENT:
            return [...state, action.payload];
        default:
            return state;
    }
}