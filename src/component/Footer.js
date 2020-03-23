import React, { useState, useEffect } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from "react-router-dom";
const Footer = () => {
    return (
        <footer class="footer">
            <div class="container">
                <span class="text-muted">Place sticky footer content here.</span>

            </div>
        </footer>
    );
}
export default Footer;