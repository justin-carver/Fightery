import { useEffect } from "react";
import { motion } from 'framer-motion';
import './FighteryOptions.css';

const FighteryOptions = (props:any) => {
    const baseStyle = "FighteryOptions sm:max-w-xl md:max-w-6xl w-full bg-slate-100 dark:bg-dark-mode-second p-6 mt-10 rounded-md shadow-xl";
    return(
        <motion.div animate="visible" className={props.enableComponent ? baseStyle : baseStyle + ' disabledComponent'}>
            <h1 className='FighteryOptions__header uppercase text-4xl tracking-wide'>Customize the fight</h1>
            <p className='FighteryOptions__subtitle'>Who will come out the victor?</p>
            <div className='divider dark:bg-white h-0.5 w-full opacity-30' />
            {/* { <Checkboxes /> } */}
        </motion.div>
    );
}

export default FighteryOptions;