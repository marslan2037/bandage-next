
"use client"
import { useState } from "react";
// import {toggleCartMenu} from '../../utils/redux_toolkit/cartSlice';
import { useDispatch, useSelector } from "react-redux";

export default function Drawer({ children, slice, addItem, removeItem, toggleMenu, menuOpen, count }: any) {
    const { isCartMenuOpen, items: cartItems, itemsCount } = useSelector((store: any) => store[slice])

    const dispatch = useDispatch()
    function handleClose() {
        dispatch(toggleMenu())
    }

    function addItemtoCart(item: any) {
        dispatch(addItem(item))
    }

    function removeItemfromCart(item: any) {
        dispatch(removeItem(item))
    }

    function countCartItem(item: any) {
        return count[item.id];
    }

    return (
        !(cartItems == '') ?
            <div id="drawer" className={`drawer-container ${menuOpen ? 'show' : ''}`}>
                <img onClick={handleClose} width={30} height={30} src="assets/images/cross-icon.jpg" alt="" />
                <div className="inner-container">
                    {console.log(cartItems)}
                    {cartItems.map((item: any) => (
                        <div key={item.id} className="single-item">
                            <div className="img"> <img src={item.thumbnail} alt="" /></div>
                            <div className="info">
                                <h3>{item.title}</h3>
                                <h4>$ {item.price}</h4>
                                {
                                    slice == 'cart' ?
                                        <div className="action">
                                            <button onClick={() => removeItemfromCart(item)}>-</button>
                                            <span>{countCartItem(item)}</span>
                                            <button onClick={() => addItemtoCart(item)}>+</button>
                                        </div>
                                    : null
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            : null
    )
}