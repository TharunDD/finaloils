import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../features/cartSlice';
import { clearFromcart } from '../features/cartSlice';
import { Link } from "react-router-dom";
import { Dropdown } from 'react-bootstrap'; // Importing Dropdown from react-bootstrap
import { AiOutlineUser } from 'react-icons/ai'; // Importing user icon
import { BiSolidLogOut } from 'react-icons/bi'; // Importing logout icon
import { BsInfoCircleFill } from 'react-icons/bs'; // Importing info circle icon
import { MdSell } from 'react-icons/md'; // Importing sell icon
import { toast } from 'react-toastify'; // Importing toast notification
import 'react-toastify/dist/ReactToastify.css'; // Importing toast notification styles
import "./spage.css";

function Navbar() {
    const navRef = useRef();
    const islog = useSelector((state) => state.cart.isAuthenticated);
    const us = useSelector((state) => state.cart.user);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    const handleLogout = () => {
        console.log("exiting");
        dispatch(clearFromcart());
        dispatch(logout());
    };

    const handleDetails = () => {
        toast.success(`Name:${us.name} email:${us.email} Uid:${us.uid}`);
    };

    return (
        <header>
            <h3>LOGO</h3>
            <div>
                <nav ref={navRef}>
                    <a href="/">HOME</a>
                    <a href="/n">ABOUT US</a>
                    <a href="/cc">CONTACT</a>
                    <a href="/cop">CART</a>
                    {islog ? (
                        <li className="o">
                            <Dropdown className="op">
                                <Dropdown.Toggle variant="light" id="user-dropdown">
                                    <AiOutlineUser /> &nbsp;{us.name}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleLogout}>
                                        <BiSolidLogOut /> &nbsp;Logout
                                    </Dropdown.Item>
                                    <Dropdown.Item onClick={handleDetails}>
                                        <BsInfoCircleFill /> &nbsp;Details
                                    </Dropdown.Item>
                                    <Dropdown.Item href="/orders">
                                        <MdSell /> &nbsp;Your order
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </li>
                    ) : (
                        <a href="/log">LOGIN</a>
                    )}
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={() => navRef.current.classList.toggle("responsive_nav")}>
                        <FaTimes />
                    </button>
                </nav>
                <button
                    className="nav-btn"
                    onClick={() => navRef.current.classList.toggle("responsive_nav")}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
}

export default Navbar;
