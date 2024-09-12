import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <div className='h-screen container pt-24'>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center text-4xl'>
                    <TypeAnimation
                        className='text-5xl whitespace-pre-line'
                        sequence={[
                            `Hi, My Name Is\nHafizh Muhammad Azhar`,
                            1000,
                            '',
                        ]}
                        repeat={Infinity}
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-justify text-xl'>I am an Informatics Engineering student with a passion for web development. I am dedicated to consistently improving my programming skills and solving complex problems through practical, hands-on projects. My focus is on both frontend and backend development. I am proficient in using React.js and Tailwind CSS for frontend development, and Express.js for backend development. For databases, I have experience working with MySQL and PostgreSQL.</p>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}

export default HeroSection