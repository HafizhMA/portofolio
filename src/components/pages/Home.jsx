import React from 'react'
import HeroSection from '../home-components/HeroSection';
import SkillsSection from '../home-components/SkillsSection';

const Home = () => {
    return (
        <div className='px-6 bg-slate-50'>
            <HeroSection />
            <SkillsSection />
        </div>
    )
}

export default Home