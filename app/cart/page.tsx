'use client'
import { Provider, useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const cartItems = useSelector((store: any) => store.cart.items);
    const isCartMenuOpen = useSelector((store: any) => store.cart.isCartMenuOpen);
    const dispatch = useDispatch();

    return (
        <>
            {
                isCartMenuOpen ?
                    <div>
                        cart
                    </div>
                    : null
            }
        </>
    )
}