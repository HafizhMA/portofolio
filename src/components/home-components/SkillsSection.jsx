import React from 'react'

const SkillsSection = () => {
    return (
        <div className='min-h-screen'>
            <p className='text-center font-bold mb-3 text-2xl'>Tech Stack</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 border-2 border-black p-8 rounded gap-5'>
                <a href='https://www.w3schools.com/html/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/html-5--v1.png" className='skill-cart-img' alt="html-5--v1" />
                    <p>HTML</p>
                </a>
                <a href='https://www.w3schools.com/css' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/css3.png" className='skill-cart-img' alt="css3" />
                    <p>CSS</p>
                </a>
                <a href='https://tailwindcss.com/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/tailwind_css.png" className='skill-cart-img' alt="tailwind_css" />
                    <p>Tailwind</p>
                </a>
                <a href='https://www.javascript.com/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/javascript--v1.png" className='skill-cart-img' alt="javascript--v1" />
                    <p>Javascript</p>
                </a>
                <a href='https://reactjs.org/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/react-native.png" className='skill-cart-img' alt="react-native" />
                    <p>React js</p>
                </a>
                <a href='https://nodejs.org/en/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/nodejs.png" className='skill-cart-img' alt="nodejs" />
                    <p>Node js</p>
                </a>
                <a href='https://expressjs.com/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/express-js.png" className='skill-cart-img' alt="express-js" />
                    <p>Express js</p>
                </a>
                <a href='https://www.prisma.io/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/prisma-orm.png" className='skill-cart-img' alt="prisma-orm" />
                    <p>Prisma</p>
                </a>
                <a href='https://www.mysql.com/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/mysql-logo.png" className='skill-cart-img' alt="mysql-logo" />
                    <p>Mysql</p>
                </a>
                <a href='https://www.postgresql.org/' className='skill-card'>
                    <img src="https://img.icons8.com/color/480/postgreesql.png" className='skill-cart-img' alt="postgreesql" />
                    <p>Postgresql</p>
                </a>
            </div>
        </div>
    )
}

export default SkillsSection