import { initialState } from '../db.js';
import { createStore } from 'redux';


//Reduser
const shopReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_SHOP': {
            const newItem = action.payload;
            return {
                ...state,
                shop: state.shop.concat(newItem)
            };
        }

        case 'EDIT_SHOP': {
            const existingUser = state.shop.find(item => item.id === action.payload.id);
            if (existingUser) {
                Object.assign(existingUser, action.payload);
                return {
                    ...state
                }
            }
        }
        default:
            return state;
    };
};

const store = createStore(shopReducer, initialState);

store.subscribe(() => {
    console.log("Listener shop called");

});

//Dispatch
store.dispatch({
    type: 'ADD_SHOP',
    payload: {
        id: '622',
        itemName: 'CreateName',
        count: 'Createcount'

    }
});

store.dispatch({
    type: 'EDIT_SHOP',
    payload: {
        id: '62',
        itemName: 'ReplaceName',
        count: 'ReplaceCount'
    }
})

console.log(store.getState());



