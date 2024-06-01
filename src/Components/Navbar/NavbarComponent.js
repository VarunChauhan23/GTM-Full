import React, { useRef } from 'react';
import Logo from './Logo';
import styles from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const NavbarComponent = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle(
            styles["responsive_nav"]
        );
    };

    return (
        <>
            <nav className={styles['main-container']}>
                <Logo />
                <div ref={navRef} className={styles['menu-link']}>
                    <ul>
                        <li>
                            <NavLink to='/home' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='/service' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Service</NavLink>
                        </li>
                        <li>
                            <NavLink to='/products' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Products</NavLink>
                        </li>
                        <li>
                            <NavLink to='/team' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Team</NavLink>
                        </li>
                        <li>
                            <NavLink to='/blogs' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Blogs</NavLink>
                        </li>
                        <li>
                            <NavLink to='/carrier' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Carrier</NavLink>
                        </li>
                        <li>
                            <NavLink to='/director' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Director</NavLink>
                        </li>
                        <li>
                            <NavLink to='/aboutus' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>About us</NavLink>
                        </li>
                        <li>
                            <NavLink to='/' className={(e) => { return e.isActive ? styles["gradient"] : styles["navlinks"] }}>Contact Us</NavLink>
                        </li>
                    </ul>
                    <button
                        className={`${styles["nav-btn"]} ${styles["nav-close-btn"]}`}
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </div>
                <button
                    className={styles["nav-btn"]}
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>
        </>
    );
};

export default NavbarComponent
