import { initialState } from '../db.js';
import { createStore } from 'redux';

//action
const addItem = () => {
    return {
        type: "ADD_SHOP"
    }
}
const editItem = () => {
    return {
        type: "EDIT_SHOP"
    }
}

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
            const existingShop = state.shop.find(item => item.id === action.payload.id);
            if (existingShop) {
                Object.assign(existingShop, action.payload);
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
        count: 'CreateСount'

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



