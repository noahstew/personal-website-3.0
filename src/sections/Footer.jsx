import React from "react";

export default function Footer() {
    const firstYear = 2024;
    const year = new Date().getFullYear();
    return (
        <footer>
            <h3>
            © {firstYear === year ? year : `${firstYear} - ${year}`} 
            </h3>
            <h4>Designed & Developmented by Noah Stewart</h4>
        </footer>
    );
}