import React from 'react'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <div className='min-h-screen hero container'>
            <div className='grid grid-cols-1 md:grid-cols-2 space-y-5 justify-between'>
                <div className='flex flex-col justify-center text-center md:text-left'>
                    <TypeAnimation
                        className='whitespace-pre-line text-2xl md:text-3xl lg:text-5xl'
                        sequence={[
                            `Hi, My Name Is\nHafizh Muhammad Azhar`,
                            1000,
                            '',
                        ]}
                        repeat={Infinity}
                    />
                </div>
                <div className='flex flex-col justify-center'>
                    <p className='text-justify text-base md:text-lg lg:text-xl'>
                        I am an Informatics Engineering student with a passion for web development. I am dedicated to consistently improving my programming skills and solving complex problems through practical, hands-on projects. My focus is on both frontend and backend development. I am proficient in using React.js and Tailwind CSS for frontend development, and Express.js for backend development. For databases, I have experience working with MySQL and PostgreSQL.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection