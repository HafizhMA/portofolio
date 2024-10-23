import React from 'react'

const SkillsSection = () => {
    return (
        <div className='h-screen'>
            <p className='text-center font-bold mb-3 text-xl'>Tech Stack</p>
            <div className='grid grid-cols-5 border-2 border-black p-8 rounded gap-5'>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/html-5--v1.png" className='skill-cart-img' alt="html-5--v1" />
                    <p>HTML</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/css3.png" className='skill-cart-img' alt="css3" />
                    <p>CSS</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/tailwind_css.png" className='skill-cart-img' alt="tailwind_css" />
                    <p>Tailwind</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/javascript--v1.png" className='skill-cart-img' alt="javascript--v1" />
                    <p>Javascript</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/react-native.png" className='skill-cart-img' alt="react-native" />
                    <p>React js</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/nodejs.png" className='skill-cart-img' alt="nodejs" />
                    <p>Node js</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/express-js.png" className='skill-cart-img' alt="express-js" />
                    <p>Express js</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/prisma-orm.png" className='skill-cart-img' alt="prisma-orm" />
                    <p>Prisma</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/mysql-logo.png" className='skill-cart-img' alt="mysql-logo" />
                    <p>Mysql</p>
                </div>
                <div className='skill-card'>
                    <img src="https://img.icons8.com/color/480/postgreesql.png" className='skill-cart-img' alt="postgreesql" />
                    <p>Postgresql</p>
                </div>
            </div>
        </div>
    )
}

export default SkillsSection