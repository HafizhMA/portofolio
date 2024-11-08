import React from 'react'
import { Link } from 'react-scroll';

const ProjectsSection = () => {
    const projects = [
        {
            name: 'UsedUp',
            description: 'A website for buying and selling used items that already has a wide range of buying and selling features.',
            imgSrc: '/usedup.png',
            stack: ['React js', 'Tailwind CSS', 'Express js', 'Prisma', 'PostgreSQL'],
            link: 'https://usedup.vercel.app/'
        },
        {
            name: 'Electronic',
            description: 'A website for selling electronic goods that is integrated with the Raja Ongkir API and the Midtrans payment gateway.',
            imgSrc: '/electronic.png',
            stack: ['React js', 'Tailwind CSS', 'Express js', 'Prisma', 'PostgreSQL'],
            link: 'https://electronic-orpin-alpha.vercel.app/'
        },
        {
            name: 'Weather',
            description: 'A website providing the latest weather forecast information integrated with the OpenWeatherMap API.',
            imgSrc: '/weather.png',
            stack: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://weather-simple.up.railway.app/'
        },
        {
            name: 'Task List',
            description: 'A simple website for recording your activities. You can update, delete, input, and cross off tasks that have been completed.',
            imgSrc: '/task.png',
            stack: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://task-list-one-phi.vercel.app/'
        },
        {
            name: 'Calculator BMI',
            description: 'A calculator designed to determine body proportions.',
            imgSrc: '/calculatorbmi.png',
            stack: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://calculator-bmi-brown.vercel.app/'
        },
        {
            name: 'Calculator',
            description: 'A calculator, in general, is a device or tool used for performing mathematical calculations.',
            imgSrc: '/calculator.png',
            stack: ['HTML', 'CSS', 'JavaScript'],
            link: 'https://calculator-eight-delta-17.vercel.app/'
        }
    ];

    return (
        <div className='min-h-screen'>
            <p className='font-bold text-2xl mb-3'>Projects</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                {projects.map((project, index) => (
                    <a href={project.link} key={index} className='cursor-pointer border-4 border-slate-500 rounded p-1 flex flex-col pb-8'>
                        <div className=''>
                            <img className='object-cover' src={project.imgSrc} alt={`${project.name} Image`} />
                        </div>
                        <div className='h-[50%] mt-3'>
                            <div className='px-1 h-[68%]'>
                                <p className='font-bold text-xl'>{project.name}</p>
                                <p>{project.description}</p>
                            </div>
                            <div className='flex flex-wrap space-x-3 p-1 text-sm mt-2'>
                                {project.stack.map((tech, i) => (
                                    <p key={i} className='stack'>{tech}</p>
                                ))}
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}

export default ProjectsSection