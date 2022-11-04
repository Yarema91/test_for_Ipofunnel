import { initialState } from '../db.js';
import { createStore } from 'redux';

//action
// const addItem = () => {
//     return {
//         type: "ADD_ORDERS"
//     }
// }
// const editItem = () => {
//     return {
//         type: "EDIT_ORDERS"
//     }
// }

//Reduser
const ordersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_ORDERS': {
            const newItem = action.payload;
            return {
                ...state,
                orders: state.orders.concat(newItem)
            };
        }

        case 'EDIT_ORDERS': {
            const existingItems = state.orders.find(item => item.id === action.payload.id);
            if (existingItems) {
                Object.assign(existingItems, action.payload);
                return {
                    ...state
                }
            }
        }
        default:
            return state;
    };
};

const store = createStore(ordersReducer, initialState);

store.subscribe(() => {
    console.log("Listener orders called");

});

//Dispatch
store.dispatch({
    type: 'ADD_ORDERS',
    payload: {
        id: '72',
        items: 'CreateItems',
        user: 'CreateUser'
    }
});

store.dispatch({
    type: 'EDIT_ORDERS',
    payload: {
        id: '62',
        items: 'ReplaceItems',
        user: 'ReplaceUser'
    }
})

console.log(store.getState());



