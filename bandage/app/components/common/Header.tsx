'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import {toggleCartMenu} from '../../utils/redux_toolkit/cartSlice';
import { toggleWishlistMenu } from "@/app/utils/redux_toolkit/wishlistSlice";
import Drawer from "./drawer";

export default function Header() {
    // toggleCartMenu()
    const {isCartMenuOpen , items: cartItems} = useSelector((store: any) => store.cart)
    const {isWishlistMenuOpen, items: wishlistItems} = useSelector((store: any) => store.wishlist)
    const dispatch = useDispatch();

    function  handleCartMenu() {
        dispatch(toggleCartMenu())
    }

    function  handleWhislistMenu() {
        dispatch(toggleWishlistMenu())
    }

    console.log(isCartMenuOpen, isWishlistMenuOpen)

    return <header>
        <div className="header-content">
            <div className="left-section">
                <h3 className="logo">
                    <a href="#">Bandage</a>
                </h3>
                {/* <Drawer menuOpen={isCartMenuOpen} /> */}

                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/shop">Shop</Link></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Pages</a></li>
                    <li><a href="#">cart ( {cartItems?.length})</a></li>
                    <li><a href="#">Wishlist ({wishlistItems?.length})</a></li>
                </ul>
            </div>

            <div className="right-section">
                <p>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_540_798)">
                            <path d="M5.99969 6C6.79534 6 7.55841 5.68393 8.12102 5.12132C8.68362 4.55871 8.99969 3.79565 8.99969 3C8.99969 2.20435 8.68362 1.44129 8.12102 0.87868C7.55841 0.316071 6.79534 0 5.99969 0C5.20405 0 4.44098 0.316071 3.87837 0.87868C3.31577 1.44129 2.99969 2.20435 2.99969 3C2.99969 3.79565 3.31577 4.55871 3.87837 5.12132C4.44098 5.68393 5.20405 6 5.99969 6ZM7.99969 3C7.99969 3.53043 7.78898 4.03914 7.41391 4.41421C7.03884 4.78929 6.53013 5 5.99969 5C5.46926 5 4.96055 4.78929 4.58548 4.41421C4.21041 4.03914 3.99969 3.53043 3.99969 3C3.99969 2.46957 4.21041 1.96086 4.58548 1.58579C4.96055 1.21071 5.46926 1 5.99969 1C6.53013 1 7.03884 1.21071 7.41391 1.58579C7.78898 1.96086 7.99969 2.46957 7.99969 3ZM11.9997 11C11.9997 12 10.9997 12 10.9997 12H0.999695C0.999695 12 -0.000305176 12 -0.000305176 11C-0.000305176 10 0.999695 7 5.99969 7C10.9997 7 11.9997 10 11.9997 11ZM10.9997 10.996C10.9987 10.75 10.8457 10.01 10.1677 9.332C9.51569 8.68 8.28869 8 5.99969 8C3.70969 8 2.48369 8.68 1.83169 9.332C1.15369 10.01 1.00169 10.75 0.999695 10.996H10.9997Z" fill="#23A6F0"></path>
                        </g>
                        <defs>
                            <clipPath id="clip0_540_798">
                                <rect width="12" height="12" fill="white" transform="translate(-0.000305176)"></rect>
                            </clipPath>
                        </defs>
                    </svg>

                    <a href="#">Login</a> / <a href="#">Register</a>
                </p>

                <p className="icon">
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_540_804)">
                                <path d="M11.7426 10.3441C12.7109 9.02279 13.1446 7.38459 12.9569 5.75725C12.7692 4.12991 11.974 2.63344 10.7304 1.56723C9.48671 0.501022 7.88634 -0.0562959 6.24943 0.00677721C4.61252 0.0698504 3.05978 0.748663 1.90186 1.90741C0.743944 3.06615 0.0662432 4.61938 0.00434136 6.25633C-0.0575605 7.89329 0.500902 9.49326 1.568 10.7361C2.6351 11.979 4.13214 12.7732 5.75961 12.9597C7.38709 13.1462 9.02497 12.7113 10.3456 11.7421H10.3446C10.3746 11.7821 10.4066 11.8201 10.4426 11.8571L14.2926 15.7071C14.4801 15.8947 14.7345 16.0002 14.9997 16.0003C15.265 16.0004 15.5195 15.8951 15.7071 15.7076C15.8947 15.5201 16.0002 15.2657 16.0003 15.0005C16.0004 14.7352 15.8951 14.4807 15.7076 14.2931L11.8576 10.4431C11.8218 10.4069 11.7834 10.3735 11.7426 10.3431V10.3441ZM12.0006 6.5001C12.0006 7.22237 11.8583 7.93757 11.5819 8.60486C11.3055 9.27215 10.9004 9.87847 10.3897 10.3892C9.87896 10.8999 9.27264 11.305 8.60535 11.5814C7.93806 11.8578 7.22286 12.0001 6.50059 12.0001C5.77832 12.0001 5.06312 11.8578 4.39583 11.5814C3.72854 11.305 3.12223 10.8999 2.61151 10.3892C2.10078 9.87847 1.69566 9.27215 1.41926 8.60486C1.14285 7.93757 1.00059 7.22237 1.00059 6.5001C1.00059 5.04141 1.58006 3.64246 2.61151 2.61101C3.64296 1.57956 5.0419 1.0001 6.50059 1.0001C7.95928 1.0001 9.35823 1.57956 10.3897 2.61101C11.4211 3.64246 12.0006 5.04141 12.0006 6.5001Z" fill="#23A6F0"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_540_804">
                                    <rect width="16.0006" height="16.0003" fill="white" transform="translate(-0.000305176)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </p>

                <p onClick={handleCartMenu} className="icon">
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_540_809)">
                                <path d="M0.000305176 1.5C0.000305176 1.36739 0.0529836 1.24021 0.146752 1.14645C0.24052 1.05268 0.367697 1 0.500305 1H2.00031C2.11184 1.00003 2.22016 1.03735 2.30804 1.10602C2.39592 1.1747 2.45831 1.27078 2.48531 1.379L2.89031 3H14.5003C14.5737 3.00007 14.6462 3.0163 14.7127 3.04755C14.7791 3.0788 14.8378 3.12429 14.8847 3.1808C14.9316 3.23731 14.9654 3.30345 14.9838 3.37452C15.0023 3.44558 15.0048 3.51984 14.9913 3.592L13.4913 11.592C13.4699 11.7066 13.409 11.8101 13.3194 11.8846C13.2297 11.9591 13.1169 11.9999 13.0003 12H4.00031C3.88374 11.9999 3.77087 11.9591 3.68122 11.8846C3.59156 11.8101 3.53075 11.7066 3.50931 11.592L2.01031 3.607L1.61031 2H0.500305C0.367697 2 0.24052 1.94732 0.146752 1.85355C0.0529836 1.75979 0.000305176 1.63261 0.000305176 1.5ZM3.10231 4L4.41531 11H12.5853L13.8983 4H3.10231ZM5.00031 12C4.46987 12 3.96116 12.2107 3.58609 12.5858C3.21102 12.9609 3.00031 13.4696 3.00031 14C3.00031 14.5304 3.21102 15.0391 3.58609 15.4142C3.96116 15.7893 4.46987 16 5.00031 16C5.53074 16 6.03945 15.7893 6.41452 15.4142C6.78959 15.0391 7.00031 14.5304 7.00031 14C7.00031 13.4696 6.78959 12.9609 6.41452 12.5858C6.03945 12.2107 5.53074 12 5.00031 12ZM12.0003 12C11.4699 12 10.9612 12.2107 10.5861 12.5858C10.211 12.9609 10.0003 13.4696 10.0003 14C10.0003 14.5304 10.211 15.0391 10.5861 15.4142C10.9612 15.7893 11.4699 16 12.0003 16C12.5307 16 13.0394 15.7893 13.4145 15.4142C13.7896 15.0391 14.0003 14.5304 14.0003 14C14.0003 13.4696 13.7896 12.9609 13.4145 12.5858C13.0394 12.2107 12.5307 12 12.0003 12ZM5.00031 13C5.26552 13 5.51988 13.1054 5.70741 13.2929C5.89495 13.4804 6.00031 13.7348 6.00031 14C6.00031 14.2652 5.89495 14.5196 5.70741 14.7071C5.51988 14.8946 5.26552 15 5.00031 15C4.73509 15 4.48073 14.8946 4.2932 14.7071C4.10566 14.5196 4.00031 14.2652 4.00031 14C4.00031 13.7348 4.10566 13.4804 4.2932 13.2929C4.48073 13.1054 4.73509 13 5.00031 13ZM12.0003 13C12.2655 13 12.5199 13.1054 12.7074 13.2929C12.8949 13.4804 13.0003 13.7348 13.0003 14C13.0003 14.2652 12.8949 14.5196 12.7074 14.7071C12.5199 14.8946 12.2655 15 12.0003 15C11.7351 15 11.4807 14.8946 11.2932 14.7071C11.1057 14.5196 11.0003 14.2652 11.0003 14C11.0003 13.7348 11.1057 13.4804 11.2932 13.2929C11.4807 13.1054 11.7351 13 12.0003 13Z" fill="#23A6F0"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_540_809">
                                    <rect width="16" height="16" fill="white" transform="translate(0.000305176)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </p>

                <p onClick={handleWhislistMenu} className="icon">
                    <a href="#">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_540_815)">
                                <path d="M8.0002 2.74805L7.2832 2.01105C5.6002 0.281049 2.5142 0.878049 1.4002 3.05305C0.8772 4.07605 0.7592 5.55305 1.7142 7.43805C2.6342 9.25305 4.5482 11.427 8.0002 13.795C11.4522 11.427 13.3652 9.25305 14.2862 7.43805C15.2412 5.55205 15.1242 4.07605 14.6002 3.05305C13.4862 0.878049 10.4002 0.280049 8.7172 2.01005L8.0002 2.74805ZM8.0002 15C-7.3328 4.86805 3.2792 -3.03995 7.8242 1.14305C7.8842 1.19805 7.9432 1.25505 8.0002 1.31405C8.05662 1.2551 8.11533 1.19839 8.1762 1.14405C12.7202 -3.04195 23.3332 4.86705 8.0002 15Z" fill="#23A6F0"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_540_815">
                                    <rect width="16" height="16" fill="white" transform="translate(0.000305176)"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </p>
            </div>
        </div>
    </header>
}