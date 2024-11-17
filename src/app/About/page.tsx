'use client'
import React from 'react';
import { IconArrowRight } from '@tabler/icons-react';

export default function About() {
    return (
        <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto px-12 py-4">
            <h1 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                About Me!
            </h1>
            <ul className="text-lg lg:text-xl py-8">
                <li className="flex"><IconArrowRight/><strong>Name: </strong>Ivy Yip</li>
                <li>School Year: College Freshman</li>
                <li>School: Massachusetts Institute of Technology {"(MIT)"}</li>
                <li>Major: 6-3 {"(Computer Science)"} and 18 {"(Applied Mathematics)"}</li>
                <li>Hometown: Austin, TX and Hong Kong</li>
                <li>Hobbies: Traveling, trying new Asian restaurants, watching Formula 1</li>
                <li>Favorite Food: Sushi and Boba!</li>
                <li>Languages: English & Chinese {"(Cantonese and Mandarin)"}</li>
                <li>Instruments: Piano & Liuqin {"(Chinese Instrument)"}</li>
            </ul>
        </div>
    )
}
