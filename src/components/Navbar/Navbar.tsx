import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"}>
                    <p>Logo</p>
                </Link>
                <div className='menu'>
                    <ul className='flex'>
                        <li><Link href="/About">About</Link></li>
                        <li><Link href="/Projects">Projects</Link></li>
                        <li><Link href="/School">School</Link></li>
                        <li><Link href="/Experiences">Experiences</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
