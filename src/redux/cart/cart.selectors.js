import { createSelector } from 'reselect';


const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    cart => cart.hidden
);

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
        cartItems.reduce(
            (accumalatedQuantity, cartItem) => 
                accumalatedQuantity + cartItem.quantity,
            0
        )
<<<<<<< HEAD
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumalatedQuantity, cartItem) => 
            accumalatedQuantity + cartItem.quantity * cartItem.price,
        0
    )
)
=======

        );
>>>>>>> c49221df169d101da0e1736ffc868c5c10f91572
