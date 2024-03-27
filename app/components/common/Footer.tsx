import { Fragment } from "react";

export default function Footer() {
    return (<>
        <footer>
            <div className="inner-container footer-content">
                <div>
                    <h5>Company Info</h5>

                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Legel</h5>

                    <ul>
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Carrier</a></li>
                        <li><a href="#">We are hiring</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Features</h5>

                    <ul>
                        <li><a href="#">Business Marketing</a></li>
                        <li><a href="#">User Analytic</a></li>
                        <li><a href="#">Live Chat</a></li>
                        <li><a href="#">Unlimited Support</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Resources</h5>

                    <ul>
                        <li><a href="#">IOS &amp; Android</a></li>
                        <li><a href="#">Watch a Demo</a></li>
                        <li><a href="#">Customers</a></li>
                        <li><a href="#">API</a></li>
                    </ul>
                </div>

                <div>
                    <h5>Get In Touch</h5>

                    <div className="subscriber-section">
                        <div className="email-section">
                            <input type="email" placeholder="Your email" />

                            <span>Subscribe</span>
                        </div>

                        <span>Lore imp sum dolor Amit</span>
                    </div>
                </div>
            </div>
        </footer>

        <div className="footer-bar">
            <div className="footer-bar-content inner-container">
                <p>Made With Love By Finland All Right Reserved</p>
            </div>
        </div>
    </>

    )
}