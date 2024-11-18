import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';

const navLinks = [
    {
        title: "Home",
        link: "/"
    }, {
        title: "About",
        link: "/About"
    }, {
        title: "Projects",
        link: "/Projects"
    }, {
        title: "School",
        link: "/School"
    }, {
        title: "Experiences",
        link: "/Experiences"
    }
]

const Navbar = () => {
    return (
        <nav>
            <div className="flex flex-wrap items-center justify-between mx-auto p-8">
                <Link href={"/"}>
                    <p>Logo</p>
                </Link>
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Navlink href={link.link} title={link.title}/>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
