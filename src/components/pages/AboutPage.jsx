'use client'


import { useEffect, useState } from "react";
import AboutShader from "../canvas/AboutShader";
import LCanvas from "../layout/canvas";
import { CustomLoader } from "../dom/Loader";

const AboutPage = () => {
    const [unmount, setUnmount] = useState(false)
    useEffect(() => {
        setUnmount(true)
    }, [unmount])

    return (
        <>
        {!unmount && <CustomLoader setUnmount={setUnmount} text='About' />}
        <div >
            <LCanvas>
                <AboutShader/>
            </LCanvas>
        </div>
        </>
    );
};  

export default AboutPage