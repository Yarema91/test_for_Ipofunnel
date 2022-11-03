import { initialState } from '../db.js';
import { createStore } from 'redux';

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            const newUser = action.payload;
            return {
                ...state,
                users: state.users.concat(newUser)
            };
        }

        case 'EDIT_USER': {
            const existingUser = state.users.find(user => user.id === action.payload.id);
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

const store = createStore(usersReducer, initialState);

store.subscribe(() => {
    console.log("Listener users called");
});

//Dispatch

store.dispatch({
    type: 'ADD_USER',
    payload: {
        id: 344,
        name: 'Yomema Ost',
        email: 'mlnln@jbjkb',
        password: '13243555',
        orders: [],

    }

});
store.dispatch({
    type: 'EDIT_USER',
    payload: {
        id: '22',
        name: 'Yomema +',
        email: 'yareman@email',
        password: '13643555',
        orders: [],

    }
})

console.log(store.getState());

