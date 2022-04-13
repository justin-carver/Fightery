import React, { useEffect, useState } from "react";
import './StyledDropzone.css';
import ImageUploading, { ImageListType } from "react-images-uploading";
import { motion } from 'framer-motion';

const StyledDropzone = (props:any) => {
    const [images, setImages] = useState([]);
    const maxNumber = 16;

    const onChange = (
        imageList: ImageListType,
        addUpdateIndex: number[] | undefined
    ) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList as never[]);
    };

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    useEffect(() => {
        if (images.length > 0) {
            props.enableFighteryOptions(true);
        } else {
            props.enableFighteryOptions(false);
        }
    })

    return (
    <motion.div className="StyledDropzone" >
        <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}>
        {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps
        }) => (
            // write your building UI
            <div className="StyledDropzone__dropzone" {...dragProps}>
                <div className="StyledDropzone__dropzone--info border-dashed border-2 dark:border-gray-400 hover:border-green-400 rounded-sm"  onClick={onImageUpload}>
                    <div className="StyledDropzone__dropzone--droptext">
                        <p className="tracking-wider opacity-60 rounded-sm p-1"><span className="hover:font-bold hover:opacity-100">Click</span> or Drop New Contestants</p>
                        <p className="tracking-wide text-lg">or</p>
                        <button className="tracking-wider opacity-60 hover:bg-error rounded-sm p-1" onClick={onImageRemoveAll}>Reset All Contestants</button>
                    </div>
                </div>
                <div className="image-wrapper">
                    {imageList.map((image, index) => (
                        <motion.div initial="hidden" animate="visible" variants={variants} key={index} className="image-item__wrapper">
                            <motion.img src={image.dataURL} className="image-item--image shadow-2xl" alt="" width="256" />
                            <div className="image-item__info">
                                { /* Should this be form wrapped? */}
                                <input className="image-item__info--name dark:text-white dark:bg-[#4f5275] p-2 tracking-wider text-center" required={true} type="text" placeholder="Player Name" />
                                <button className="image-item__info--remove tracking-wider hover:text-red-400 hover:opacity-100" tabIndex={-1} onClick={() => onImageRemove(index)}>Remove</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            )}
        </ImageUploading>
        </motion.div>
    );
}

export default StyledDropzone;