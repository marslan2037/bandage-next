'use client'
// import '/assets/css/flickity.css'
import Flickity from 'react-flickity-component';

export default function ProductCard() {
    const isFoucused = true;
    const flickityOptions = {
        initialIndex: 2
    }
    return (
        <div className="product-card">
            <div className="inner-container product-card-content">
                <div className="left-section">
                    {/* <div className="product-slider-container flickity-enabled is-draggable" tabIndex={0}>
                        <div className="flickity-viewport" style={{ height: '450px', touchAction: 'pan-y' }}>
                            <div className="flickity-slider" style={{ left: '0px', transform: 'translateX(0%)' }}>
                                <div className="single-slider is-selected" style={{ position: 'absolute', left: '0px', transform: 'translateX(0%)' }}>
                                    <img src="assets/images/product-img.png" alt="" />
                                </div><div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(100%)' }}>
                                    <img src="assets/images/product-img.png" alt="" />
                                </div><div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(200%)' }}>
                                    <img src="assets/images/product-img.png" alt="" />
                                </div><div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(300%)' }}>
                                    <img src="assets/images/product-img.png" alt="" />
                                </div><div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(400%)' }}>
                                    <img src="assets/images/product-img.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <button className="flickity-button flickity-prev-next-button previous" type="button" aria-label="Previous">
                            <svg className="flickity-button-icon" viewBox="0 0 100 100">
                                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow">
                                </path>
                            </svg>
                        </button>
                        <button className="flickity-button flickity-prev-next-button next" type="button" aria-label="Next">
                            <svg className="flickity-button-icon" viewBox="0 0 100 100">
                                <path d="M 10,50 L 60,100 L 70,90 L 30,50  L 70,10 L 60,0 Z" className="arrow" transform="translate(100, 100) rotate(180) ">
                                </path>
                            </svg>
                        </button>
                        <ol className="flickity-page-dots">
                            <li className="dot is-selected" aria-label="Page dot 1" aria-current="step">
                            </li>
                            <li className="dot" aria-label="Page dot 2">
                            </li>
                            <li className="dot" aria-label="Page dot 3">
                            </li>
                            <li className="dot" aria-label="Page dot 4">
                            </li>
                            <li className="dot" aria-label="Page dot 5">
                            </li>
                        </ol>
                    </div> */}
                    <Flickity className={'carousel'} // default ''
                        elementType={'div'} // default 'div'
                        options={flickityOptions} // takes flickity options {}
                        disableImagesLoaded={false} // default false
                        reloadOnUpdate // default false
                        static // default false
                    >
                        {/* <div className="product-slider-container"> */}
                            <div className="single-slider">
                                <img src="assets/images/product-img.png" alt="" />
                            </div>
                            <div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(100%)' }}>
                                <img src="assets/images/product-img.png" alt="" />
                            </div>
                            <div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(200%)' }}>
                                <img src="assets/images/product-img.png" alt="" />
                            </div>
                            <div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(300%)' }}>
                                <img src="assets/images/product-img.png" alt="" />
                            </div>
                            <div className="single-slider" aria-hidden="true" style={{ position: 'absolute', left: '0px', transform: 'translateX(400%)' }}>
                                <img src="assets/images/product-img.png" alt="" />
                            </div>
                        {/* </div> */}
                    </Flickity>
                </div>

                <div className="right-section">
                    <div className="p-review-price">
                        <h4>Floating Phone</h4>

                        <div className="reviews">
                            <ul>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path d="M20.1308 8.41915C20.0732 8.24934 19.967 8.10013 19.8256 7.98994C19.6841 7.87975 19.5134 7.81341 19.3347 7.7991L14.1055 7.38359L11.8427 2.37458C11.7706 2.21324 11.6534 2.07622 11.5052 1.98003C11.357 1.88385 11.1841 1.83262 11.0074 1.83252C10.8307 1.83242 10.6577 1.88347 10.5094 1.97949C10.3611 2.07551 10.2437 2.21241 10.1715 2.37366L7.90867 7.38359L2.67951 7.7991C2.50382 7.81302 2.33586 7.87726 2.19572 7.98413C2.05559 8.09101 1.94921 8.236 1.88931 8.40175C1.82941 8.5675 1.81854 8.747 1.85799 8.91877C1.89744 9.09054 1.98553 9.24731 2.11175 9.37032L5.97605 13.1374L4.60937 19.0554C4.56788 19.2345 4.58118 19.422 4.64755 19.5935C4.71392 19.765 4.8303 19.9125 4.98159 20.0171C5.13288 20.1216 5.31208 20.1782 5.49596 20.1796C5.67983 20.181 5.85988 20.1271 6.01274 20.0249L11.0071 16.6954L16.0014 20.0249C16.1577 20.1286 16.3419 20.182 16.5294 20.1779C16.7169 20.1738 16.8986 20.1124 17.0502 20.0019C17.2017 19.8914 17.3158 19.7372 17.3771 19.5599C17.4383 19.3827 17.4438 19.1909 17.3929 19.0105L15.7152 13.1402L19.8758 9.396C20.1482 9.15018 20.2482 8.76678 20.1308 8.41915Z" fill="#F3CD03"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path d="M20.1308 8.41915C20.0732 8.24934 19.967 8.10013 19.8256 7.98994C19.6841 7.87975 19.5134 7.81341 19.3347 7.7991L14.1055 7.38359L11.8427 2.37458C11.7706 2.21324 11.6534 2.07622 11.5052 1.98003C11.357 1.88385 11.1841 1.83262 11.0074 1.83252C10.8307 1.83242 10.6577 1.88347 10.5094 1.97949C10.3611 2.07551 10.2437 2.21241 10.1715 2.37366L7.90867 7.38359L2.67951 7.7991C2.50382 7.81302 2.33586 7.87726 2.19572 7.98413C2.05559 8.09101 1.94921 8.236 1.88931 8.40175C1.82941 8.5675 1.81854 8.747 1.85799 8.91877C1.89744 9.09054 1.98553 9.24731 2.11175 9.37032L5.97605 13.1374L4.60937 19.0554C4.56788 19.2345 4.58118 19.422 4.64755 19.5935C4.71392 19.765 4.8303 19.9125 4.98159 20.0171C5.13288 20.1216 5.31208 20.1782 5.49596 20.1796C5.67983 20.181 5.85988 20.1271 6.01274 20.0249L11.0071 16.6954L16.0014 20.0249C16.1577 20.1286 16.3419 20.182 16.5294 20.1779C16.7169 20.1738 16.8986 20.1124 17.0502 20.0019C17.2017 19.8914 17.3158 19.7372 17.3771 19.5599C17.4383 19.3827 17.4438 19.1909 17.3929 19.0105L15.7152 13.1402L19.8758 9.396C20.1482 9.15018 20.2482 8.76678 20.1308 8.41915Z" fill="#F3CD03"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path d="M20.1308 8.41915C20.0732 8.24934 19.967 8.10013 19.8256 7.98994C19.6841 7.87975 19.5134 7.81341 19.3347 7.7991L14.1055 7.38359L11.8427 2.37458C11.7706 2.21324 11.6534 2.07622 11.5052 1.98003C11.357 1.88385 11.1841 1.83262 11.0074 1.83252C10.8307 1.83242 10.6577 1.88347 10.5094 1.97949C10.3611 2.07551 10.2437 2.21241 10.1715 2.37366L7.90867 7.38359L2.67951 7.7991C2.50382 7.81302 2.33586 7.87726 2.19572 7.98413C2.05559 8.09101 1.94921 8.236 1.88931 8.40175C1.82941 8.5675 1.81854 8.747 1.85799 8.91877C1.89744 9.09054 1.98553 9.24731 2.11175 9.37032L5.97605 13.1374L4.60937 19.0554C4.56788 19.2345 4.58118 19.422 4.64755 19.5935C4.71392 19.765 4.8303 19.9125 4.98159 20.0171C5.13288 20.1216 5.31208 20.1782 5.49596 20.1796C5.67983 20.181 5.85988 20.1271 6.01274 20.0249L11.0071 16.6954L16.0014 20.0249C16.1577 20.1286 16.3419 20.182 16.5294 20.1779C16.7169 20.1738 16.8986 20.1124 17.0502 20.0019C17.2017 19.8914 17.3158 19.7372 17.3771 19.5599C17.4383 19.3827 17.4438 19.1909 17.3929 19.0105L15.7152 13.1402L19.8758 9.396C20.1482 9.15018 20.2482 8.76678 20.1308 8.41915Z" fill="#F3CD03"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path d="M20.1308 8.41915C20.0732 8.24934 19.967 8.10013 19.8256 7.98994C19.6841 7.87975 19.5134 7.81341 19.3347 7.7991L14.1055 7.38359L11.8427 2.37458C11.7706 2.21324 11.6534 2.07622 11.5052 1.98003C11.357 1.88385 11.1841 1.83262 11.0074 1.83252C10.8307 1.83242 10.6577 1.88347 10.5094 1.97949C10.3611 2.07551 10.2437 2.21241 10.1715 2.37366L7.90867 7.38359L2.67951 7.7991C2.50382 7.81302 2.33586 7.87726 2.19572 7.98413C2.05559 8.09101 1.94921 8.236 1.88931 8.40175C1.82941 8.5675 1.81854 8.747 1.85799 8.91877C1.89744 9.09054 1.98553 9.24731 2.11175 9.37032L5.97605 13.1374L4.60937 19.0554C4.56788 19.2345 4.58118 19.422 4.64755 19.5935C4.71392 19.765 4.8303 19.9125 4.98159 20.0171C5.13288 20.1216 5.31208 20.1782 5.49596 20.1796C5.67983 20.181 5.85988 20.1271 6.01274 20.0249L11.0071 16.6954L16.0014 20.0249C16.1577 20.1286 16.3419 20.182 16.5294 20.1779C16.7169 20.1738 16.8986 20.1124 17.0502 20.0019C17.2017 19.8914 17.3158 19.7372 17.3771 19.5599C17.4383 19.3827 17.4438 19.1909 17.3929 19.0105L15.7152 13.1402L19.8758 9.396C20.1482 9.15018 20.2482 8.76678 20.1308 8.41915Z" fill="#F3CD03"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 23 23" fill="none">
                                            <path d="M6.03166 13.1374L4.66498 19.0554C4.62266 19.2346 4.63536 19.4224 4.70143 19.5943C4.7675 19.7662 4.88387 19.9141 5.03533 20.0188C5.18679 20.1235 5.36631 20.1801 5.55043 20.1812C5.73456 20.1823 5.91474 20.1278 6.06743 20.0249L11.0618 16.6954L16.0561 20.0249C16.2123 20.1287 16.3966 20.1821 16.5841 20.178C16.7716 20.1739 16.9533 20.1124 17.1049 20.0019C17.2564 19.8915 17.3705 19.7372 17.4317 19.56C17.493 19.3827 17.4985 19.191 17.4476 19.0105L15.7699 13.1402L19.9305 9.39603C20.0638 9.27605 20.1589 9.11963 20.2042 8.94614C20.2495 8.77264 20.243 8.58967 20.1854 8.41986C20.1278 8.25004 20.0217 8.10083 19.8802 7.99067C19.7388 7.88051 19.5681 7.81423 19.3893 7.80004L14.1602 7.38362L11.8974 2.3746C11.8252 2.21331 11.7079 2.07635 11.5597 1.98025C11.4114 1.88415 11.2385 1.83301 11.0618 1.83301C10.8851 1.83301 10.7122 1.88415 10.5639 1.98025C10.4156 2.07635 10.2983 2.21331 10.2262 2.3746L7.96335 7.38362L2.7342 7.79913C2.55851 7.81305 2.39055 7.87729 2.25041 7.98416C2.11027 8.09104 2.00389 8.23602 1.944 8.40178C1.8841 8.56753 1.87323 8.74703 1.91268 8.9188C1.95212 9.09057 2.04022 9.24734 2.16643 9.37035L6.03166 13.1374ZM8.64853 9.16947C8.81225 9.15658 8.96948 9.09987 9.10375 9.0053C9.23802 8.91073 9.34438 8.78179 9.41167 8.63198L11.0618 4.98047L12.7119 8.63198C12.7792 8.78179 12.8855 8.91073 13.0198 9.0053C13.1541 9.09987 13.3113 9.15658 13.475 9.16947L17.1183 9.4584L14.118 12.1587C13.8575 12.3936 13.7539 12.7549 13.8492 13.0925L14.9985 17.1146L11.5718 14.8297C11.4213 14.7288 11.2443 14.6749 11.0631 14.6749C10.882 14.6749 10.7049 14.7288 10.5545 14.8297L6.97366 17.2173L7.93675 13.0475C7.97207 12.8942 7.96733 12.7343 7.92299 12.5833C7.87866 12.4323 7.79621 12.2953 7.6836 12.1853L4.89704 9.46849L8.64853 9.16947Z" fill="#F3CD03"></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>

                            <a href="#">10 Reviews</a>
                        </div>

                        <h3 className="price">$1,139.33</h3>

                        <p className="availability">Availability: <span>In Stock </span></p>
                    </div>

                    <ul className="variants">
                        <li><a href="#" className="blue"></a></li>
                        <li><a href="#" className="green"></a></li>
                        <li><a href="#" className="orange"></a></li>
                        <li><a href="#" className="black"></a></li>
                    </ul>

                    <div className="right-section-footer">
                        <button className="button">
                            Select Options
                        </button>

                        <ul>
                            <li>
                                <a href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M10.0009 5.95324L8.63651 4.55662L8.63594 4.55605C8.28804 4.20177 7.87304 3.92037 7.41517 3.72827C6.95731 3.53617 6.46575 3.43723 5.96922 3.43723C5.47269 3.43723 4.98113 3.53617 4.52326 3.72827C4.06544 3.92035 3.65047 4.20172 3.3026 4.55595C2.58865 5.28087 2.18846 6.25752 2.18846 7.275C2.18846 8.29259 2.58874 9.26935 3.30284 9.9943L3.30313 9.99459L9.77812 16.5508L10.0005 16.776L10.2228 16.5508L16.6978 9.99459L16.6981 9.9943C17.4122 9.26935 17.8125 8.29259 17.8125 7.275C17.8125 6.25753 17.4123 5.28088 16.6983 4.55595C16.3506 4.20148 15.9357 3.91997 15.4778 3.72791C15.02 3.53591 14.5286 3.43718 14.0322 3.4375C14.0319 3.4375 14.0317 3.4375 14.0315 3.4375L14.0317 3.75M10.0009 5.95324L11.3578 4.56949L11.3586 4.5687L11.5817 4.7875M10.0009 5.95324L11.357 4.57036M10.0009 5.95324L11.357 4.57036M14.0317 3.75C13.5746 3.74935 13.122 3.84089 12.701 4.01915C12.2801 4.19741 11.8994 4.45874 11.5817 4.7875M14.0317 3.75C14.4868 3.74962 14.9373 3.84008 15.3569 4.01609C15.7766 4.1921 16.1569 4.45011 16.4755 4.775L14.0317 3.75ZM11.5817 4.7875L11.357 4.57036M11.5817 4.7875L11.357 4.57036M14.0316 2.8125L14.0315 2.8125C13.4516 2.81201 12.8774 2.9273 12.3427 3.15161C11.8079 3.37593 11.3233 3.70475 10.9173 4.11879L10.9162 4.11998L10.2224 4.81998L10.0005 5.04394L9.77851 4.81998L9.08476 4.11998L9.08392 4.11913C8.67735 3.70575 8.19255 3.37744 7.6578 3.15333C7.12305 2.92923 6.54903 2.81381 5.96922 2.81381C5.38941 2.81381 4.81539 2.92923 4.28064 3.15333C3.7459 3.37744 3.26111 3.70574 2.85454 4.1191L14.0316 2.8125ZM14.0316 2.8125C14.6115 2.81266 15.1856 2.92827 15.7204 3.15259C16.2551 3.37691 16.7399 3.70544 17.1463 4.11904C17.9752 4.96287 18.4397 6.09841 18.4397 7.28125C18.4397 8.46391 17.9754 9.59929 17.1467 10.4431C17.1466 10.4432 17.1464 10.4434 17.1463 10.4435L10.0005 17.6802M14.0316 2.8125L10.0005 17.6802M10.0005 17.6802L2.85465 10.4435C2.85454 10.4434 2.85444 10.4433 2.85433 10.4432C2.02561 9.59939 1.56128 8.46396 1.56128 7.28125C1.56128 6.09846 2.02568 4.96295 2.85452 4.11913L10.0005 17.6802Z" fill="#BDBDBD" stroke="#252B42" stroke-width="0.625"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1.63333C0 1.46536 0.0667281 1.30427 0.185505 1.1855C0.304281 1.06673 0.465377 1 0.633353 1H2.53341C2.67469 1.00004 2.8119 1.04731 2.92322 1.1343C3.03454 1.22129 3.11357 1.34299 3.14776 1.48007L3.66078 3.53333H18.3672C18.4602 3.53342 18.5521 3.55398 18.6362 3.59356C18.7204 3.63315 18.7948 3.69077 18.8541 3.76235C18.9135 3.83393 18.9564 3.9177 18.9797 4.00772C19.0031 4.09774 19.0063 4.19179 18.9892 4.2832L17.0891 14.4165C17.062 14.5617 16.9849 14.6927 16.8714 14.7871C16.7578 14.8815 16.6148 14.9332 16.4672 14.9333H5.06682C4.91917 14.9332 4.7762 14.8815 4.66263 14.7871C4.54906 14.6927 4.47204 14.5617 4.44487 14.4165L2.54608 4.3022L2.0394 2.26667H0.633353C0.465377 2.26667 0.304281 2.19994 0.185505 2.08117C0.0667281 1.96239 0 1.8013 0 1.63333ZM3.92932 4.8L5.59251 13.6667H15.9415L17.6047 4.8H3.92932ZM6.33353 14.9333C5.66163 14.9333 5.01724 15.2002 4.54214 15.6753C4.06703 16.1504 3.80012 16.7948 3.80012 17.4667C3.80012 18.1385 4.06703 18.7829 4.54214 19.258C5.01724 19.7331 5.66163 20 6.33353 20C7.00543 20 7.64981 19.7331 8.12492 19.258C8.60003 18.7829 8.86694 18.1385 8.86694 17.4667C8.86694 16.7948 8.60003 16.1504 8.12492 15.6753C7.64981 15.2002 7.00543 14.9333 6.33353 14.9333ZM15.2005 14.9333C14.5286 14.9333 13.8842 15.2002 13.4091 15.6753C12.934 16.1504 12.6671 16.7948 12.6671 17.4667C12.6671 18.1385 12.934 18.7829 13.4091 19.258C13.8842 19.7331 14.5286 20 15.2005 20C15.8724 20 16.5168 19.7331 16.9919 19.258C17.467 18.7829 17.7339 18.1385 17.7339 17.4667C17.7339 16.7948 17.467 16.1504 16.9919 15.6753C16.5168 15.2002 15.8724 14.9333 15.2005 14.9333ZM6.33353 16.2C6.66948 16.2 6.99167 16.3335 7.22922 16.571C7.46678 16.8085 7.60023 17.1307 7.60023 17.4667C7.60023 17.8026 7.46678 18.1248 7.22922 18.3623C6.99167 18.5999 6.66948 18.7333 6.33353 18.7333C5.99758 18.7333 5.67539 18.5999 5.43783 18.3623C5.20028 18.1248 5.06682 17.8026 5.06682 17.4667C5.06682 17.1307 5.20028 16.8085 5.43783 16.571C5.67539 16.3335 5.99758 16.2 6.33353 16.2ZM15.2005 16.2C15.5364 16.2 15.8586 16.3335 16.0962 16.571C16.3337 16.8085 16.4672 17.1307 16.4672 17.4667C16.4672 17.8026 16.3337 18.1248 16.0962 18.3623C15.8586 18.5999 15.5364 18.7333 15.2005 18.7333C14.8645 18.7333 14.5423 18.5999 14.3048 18.3623C14.0672 18.1248 13.9338 17.8026 13.9338 17.4667C13.9338 17.1307 14.0672 16.8085 14.3048 16.571C14.5423 16.3335 14.8645 16.2 15.2005 16.2Z" fill="#252B42"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12.5 10C12.5 10.663 12.2366 11.2989 11.7678 11.7678C11.2989 12.2366 10.663 12.5 10 12.5C9.33696 12.5 8.70107 12.2366 8.23223 11.7678C7.76339 11.2989 7.5 10.663 7.5 10C7.5 9.33696 7.76339 8.70107 8.23223 8.23223C8.70107 7.76339 9.33696 7.5 10 7.5C10.663 7.5 11.2989 7.76339 11.7678 8.23223C12.2366 8.70107 12.5 9.33696 12.5 10Z" fill="black"></path>
                                        <path d="M2 10C2 10 5 4.5 10 4.5C15 4.5 18 10 18 10C18 10 15 15.5 10 15.5C5 15.5 2 10 2 10ZM10 13.5C10.9283 13.5 11.8185 13.1313 12.4749 12.4749C13.1313 11.8185 13.5 10.9283 13.5 10C13.5 9.07174 13.1313 8.1815 12.4749 7.52513C11.8185 6.86875 10.9283 6.5 10 6.5C9.07174 6.5 8.1815 6.86875 7.52513 7.52513C6.86875 8.1815 6.5 9.07174 6.5 10C6.5 10.9283 6.86875 11.8185 7.52513 12.4749C8.1815 13.1313 9.07174 13.5 10 13.5Z" fill="black"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}