import React from 'react'

const ProjectsSection = () => {
    return (
        <div className='min-h-screen'>
            <p className='font-bold text-2xl mb-3'>Projects</p>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
                <div className='border-4 border-slate-500 rounded p-1 space-y-2 flex flex-col'>
                    <div className='h-[50%]'>
                        <img className='object-cover' src="/usedup.png" alt="Image Description" />
                    </div>
                    <div className='px-1 h-[30%]'>
                        <p className='font-bold text-xl'>UsedUp</p>
                        <p>A website for buying and selling used items that already has a wide range of buying and selling features.</p>
                    </div>
                    <div className='self-end p-2 h-[20%]'>
                        <a href='https://usedup.up.railway.app/' className='border-2 border-slate-400 px-2 py-1 rounded font-semibold text-slate-500'>Visit</a>
                    </div>
                </div>

                <div className='border-4 border-slate-500 rounded p-1 space-y-2 flex flex-col'>
                    <div className='h-[50%]'>
                        <img className='object-cover' src="/electronic.png" alt="Image Description" />
                    </div>
                    <div className='px-1 h-[30%]'>
                        <p className='font-bold text-xl'>Electronic</p>
                        <p>A website for selling electronic goods that is integrated with the Raja Ongkir API and the Midtrans payment gateway.</p>
                    </div>
                    <div className='self-end p-2 h-[20%]'>
                        <a href='https://electronic-orpin-alpha.vercel.app/' className='border-2 border-slate-400 px-2 py-1 rounded font-semibold text-slate-500'>Visit</a>
                    </div>
                </div>

                <div className='border-4 border-slate-500 rounded p-1 space-y-2 flex flex-col'>
                    <div className='h-[50%]'>
                        <img className='object-cover' src="/weather.png" alt="Image Description" />
                    </div>
                    <div className='px-1 h-[30%]'>
                        <p className='font-bold text-xl'>Weather</p>
                        <p>A website providing the latest weather forecast information integrated with the OpenWeatherMap API.</p>
                    </div>
                    <div className='self-end p-2 h-[20%]'>
                        <a href='https://weather-simple.up.railway.app/' className='border-2 border-slate-400 px-2 py-1 rounded font-semibold text-slate-500'>Visit</a>
                    </div>
                </div>

                <div className='border-4 border-slate-500 rounded p-1 space-y-2 flex flex-col'>
                    <div className='h-[50%]'>
                        <img className='object-cover' src="/task.png" alt="Image Description" />
                    </div>
                    <div className='px-1 h-[30%]'>
                        <p className='font-bold text-xl'>Task List</p>
                        <p>A simple website for recording your activities. You can update, delete, input, and cross off tasks that have been completed.</p>
                    </div>
                    <div className='self-end p-2 h-[20%]'>
                        <a href='https://task-list-one-phi.vercel.app/' className='border-2 border-slate-400 px-2 py-1 rounded font-semibold text-slate-500'>Visit</a>
                    </div>
                </div>

                <div className='border-4 border-slate-500 rounded p-1 space-y-2 flex flex-col'>
                    <div className='h-[50%]'>
                        <img className='object-cover' src="/calculatorbmi.png" alt="Image Description" />
                    </div>
                    <div className='px-1 h-[30%]'>
                        <p className='font-bold text-xl'>Calculator BMI</p>
                        <p>A calculator designed to determine body proportions</p>
                    </div>
                    <div className='self-end p-2 h-[20%]'>
                        <a href='https://calculator-bmi-brown.vercel.app/' className='border-2 border-slate-400 px-2 py-1 rounded font-semibold text-slate-500'>Visit</a>
                    </div>
                </div>

                <div className='border-4 border-slate-500 rounded p-1 space-y-2 flex flex-col'>
                    <div className='h-[50%]'>
                        <img className='object-cover' src="/usedup.png" alt="Image Description" />
                    </div>
                    <div className='px-1 h-[30%]'>
                        <p className='font-bold text-xl'>Calculator</p>
                        <p>A calculator, in general, is a device or tool used for performing mathematical calculations</p>
                    </div>
                    <div className='self-end p-2 h-[20%]'>
                        <a href='https://calculator-eight-delta-17.vercel.app/' className='border-2 border-slate-400 px-2 py-1 rounded font-semibold text-slate-500'>Visit</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection