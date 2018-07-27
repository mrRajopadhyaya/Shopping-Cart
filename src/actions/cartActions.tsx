

export const addToCart = ()=>{
    return {
        type:'ADD_CART',
        payload:[{
            id:2,
            item:'book'
        }]
    }
}