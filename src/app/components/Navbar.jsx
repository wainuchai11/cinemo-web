'use client';
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import Dropdown from "./DropDown";

export const Navbar = () => {
    const router = useRouter();
    const [showDropdown, setShowDropdown] = useState(false);

    const handleLogout = () => {
        sessionStorage.removeItem('username');
        router.push('/login');
    }

    const handleDropdown = () => {
        console.log('dropdown');
        if(localStorage.getItem('favorite') === null) {
            alert('No favorite movie');
            return;
        }
        setShowDropdown(!showDropdown);
    }

    return (
        <nav className="navbar-container">
            <ul>
                <li>
                    <div onClick={() => router.push('/')} >Movie Finder</div>
                </li>
                <li>
                    <div onClick={() => handleDropdown()}>My Favorite</div>
                    {showDropdown && (
                        <Dropdown />
                    )}
                </li>
                <li style={{ float: 'right' }}>
                    <div onClick={() => handleLogout()}>Logout</div>
                </li>
            </ul>
        </nav>
    );
}