import React from 'react';

const HomePageAbout = () => {
    return (
        <div>
            <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold bg">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Hi! I'm Ivy!{" "}
                </span>
                Welcome to my Website!
            </h1>
            <p className="text-[#f5ecd5] text-lg lg:text-xl">
                I'm a freshman at the Massachusetts Institute of Technology studying CS and Math.
            </p>
        </div>
    )
}

export default HomePageAbout;
