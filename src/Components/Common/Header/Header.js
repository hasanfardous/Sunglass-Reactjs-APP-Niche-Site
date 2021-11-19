import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
} from "react-router-dom";
import './Header.css';
import logo from '../../../assets/logo.png';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
    const { user, doTheSignOut, signInPopupUsingGoogle } = useAuth();
    return (
        <header>
            <div className="header-area ">
                <div id="sticky-header" className="main-header-area">
                    <div className="container-fluid p-0">
                        <div className="row align-items-center no-gutters">
                            <div className="col-xl-2 col-lg-2">
                                <div className="logo-img">
                                    <NavLink to="/home">
                                        <img src={logo} alt="Sunglass logo" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            {
                                                user.displayName ?
                                                    <li><NavLink activeClassName="active" to="/pay">Pay</NavLink></li>
                                                    :
                                                    <li><NavLink activeClassName="active" to="/home">Home</NavLink></li>
                                            }
                                            {
                                                user.displayName ?
                                                    <li><NavLink activeClassName="active" to="/orders">My Orders</NavLink></li>
                                                    : ''
                                            }
                                            {
                                                user.displayName ?
                                                    <li><NavLink activeClassName="active" to="/review">Review</NavLink></li> : ''

                                            }
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 d-none d-lg-block">
                                <div className="book_room">
                                    <div className="book_btn d-none d-xl-block">
                                        {
                                            user.photoURL ? <img src={user.photoURL} alt={user.displayName} /> : ''
                                        }

                                        {
                                            user.displayName ? <span>Welcome, {user.displayName}! &nbsp;</span> : ''
                                        }
                                        {
                                            user.displayName ? <NavLink className="header-username" title="Dashboard" to="/orders">Dashboard</NavLink> : ''
                                        }

                                        {
                                            user.displayName ?
                                                <NavLink onClick={doTheSignOut} to="/">Logout</NavLink> :
                                                <NavLink to="/login">Login</NavLink>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;