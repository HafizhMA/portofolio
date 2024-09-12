import React from 'react'

const SkillsSection = () => {
    return (
        <div className='h-screen'>
            <p className='text-center font-bold mb-3 text-xl'>My Skills</p>
            <div className='grid grid-cols-5 border-2 border-black p-8 rounded gap-5'>
                <div className='skill-card'>
                    <img src="src\assets\html-removebg-preview.png" className='skill-cart-img' alt="" />
                    <p>HTML</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\css.png" className='skill-cart-img' alt="" />
                    <p>CSS</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\tailwind.png" className='skill-cart-img' alt="" />
                    <p>Tailwind</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\js.webp" className='skill-cart-img' alt="" />
                    <p>Javascript</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\react_js-removebg-preview.png" className='skill-cart-img' alt="" />
                    <p>React js</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\nodejs.webp" className='skill-cart-img' alt="" />
                    <p>Node js</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\expressjs-removebg-preview.png" className='skill-cart-img' alt="" />
                    <p>Express js</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\prisma.webp" className='skill-cart-img' alt="" />
                    <p>Prisma</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\mysql-logo.svg" className='skill-cart-img' alt="" />
                    <p>Mysql</p>
                </div>
                <div className='skill-card'>
                    <img src="src\assets\posgre.png" className='skill-cart-img' alt="" />
                    <p>Postgresql</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection