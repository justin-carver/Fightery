import { useState } from 'react';
import { motion } from 'framer-motion';

const Checkbox = (props:any) => {
    const [checkbox, setCheckbox] = useState(false);

    return(
        <motion.label className="Checkbox flex flex-col mt-4 rounded-lg shadow-md border-4 border-gray-400/30 p-6 min-w-fit">
            <div className="Checkbox__wrapper flex flex-row">
                <input type="checkbox" className="Checkbox__toggle dark:accent-blue-jeans mt-1 w-5" />
                <p className="Checkbox__label ml-3 text-xl">{props.label}</p>
            </div>
            <p className="Checkbox__description mt-2">{props.description}</p>
        </motion.label>
    );
}

export default Checkbox;