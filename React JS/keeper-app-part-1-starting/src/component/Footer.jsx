import React from "react";

function Footer () {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <p>R.K.Rana © {currentYear}</p>
        </footer>
    )
}

export default Footer;