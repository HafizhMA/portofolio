// PageTransition.js
import React from 'react';
import { motion } from 'framer-motion';

const PageTransition = () => {
    return (
        <motion.div
            initial={{ height: '100%', opacity: 1 }}
            animate={{ height: '0%', opacity: 0 }}
            exit={{ height: '100%', opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full bg-black z-50"
        />
    );
};

export default PageTransition;
