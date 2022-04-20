import { useEffect } from "react";
import { motion } from 'framer-motion';
import './FighteryOptions.css';
import Checkbox from "./Checkbox";

const FighteryOptions = (props:any) => {
    const baseStyle = "FighteryOptions w-full xs:max-w-sm sm:max-w-xl max-w-5xl bg-slate-100 dark:bg-dark-mode-second p-6 rounded-md shadow-md";
    return(
        <motion.div animate="visible" className={props.enableComponent ? baseStyle : baseStyle + ' disabledComponent'}>
            <h1 className='FighteryOptions__header uppercase text-4xl tracking-wide'>Customize the fight</h1>
            <p className='FighteryOptions__subtitle'>Who will come out the victor?</p>
            <div className='divider dark:bg-white mt-2 h-0.5 w-full opacity-30' />
            <motion.div className="FighteryOptions__settings flex xs:flex-col">
                <motion.div className="FighteryOptions__settings-left xs:pr-0 pr-5 xs:w-full w-1/2">
                    <Checkbox label={"Enable Teams"} description={"If enabled, allows players to come together and form groups during play."}/>
                    <Checkbox label={"Last One Alive"} description={"Only one person may leave the arena alive."}/>
                </motion.div>
                <motion.div className="FighteryOptions__settings-right xs:w-full w-1/2">
                    <Checkbox label={"Fisticuffs"} description={"Players will not receive nor pick up weapons. Players only use hands and feet."}/>
                    <Checkbox label={"Last One Alive"} description={"Only one person may leave the arena alive."}/>
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default FighteryOptions;