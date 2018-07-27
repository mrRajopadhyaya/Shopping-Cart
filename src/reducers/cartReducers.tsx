const initialState:any = [{
    id:1,
    item: "camera"
}]

const cartReducers = (state= initialState, actions:any)=>{
    switch (actions.type) {
        case 'ADD_CART':
            let newState = [...state,actions.types];
            return newState;

        default:
            return state;
    }
    
}

export default cartReducers;


