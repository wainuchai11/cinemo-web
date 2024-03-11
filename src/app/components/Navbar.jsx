import React from "react";
import { useRouter } from 'next/navigation';

export const Navbar = () => {
    const router = useRouter();

    const handleLogout = () => {
        sessionStorage.removeItem('username');
        router.push('/login');
    }
    return (
        <nav className="navbar-container">
            <ul>
                <li>
                    <div onClick={()=> router.push('/')} >Movie Finder</div>
                </li>
                <li>
                    <div>My Favorite</div>
                </li>
                <li style={{ float: 'right' }}>
                    <div onClick={()=> handleLogout()}>Logout</div>
                </li>
            </ul>
        </nav>
    );
}