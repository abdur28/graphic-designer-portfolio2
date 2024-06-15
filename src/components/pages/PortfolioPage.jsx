'use client'

import { useEffect, useState } from "react"
import ProjectsShader from "../canvas/ProjectsShader"
import StarsCanvas from "../canvas/Stars"
import LCanvas from "../layout/Canvas"
import Projects from "../projects/Projects"
import { CustomLoader } from "../dom/Loader"


const PortfolioPage = () => {
    const [unmount, setUnmount] = useState(false)
    useEffect(() => {
        setUnmount(true)
    }, [unmount])

    return (
        <>
            {!unmount && <CustomLoader setUnmount={setUnmount} text='Portfolio' />}
            <div>
                <LCanvas>
                    <ProjectsShader />
                </LCanvas>
            </div>
        </>
    )
}

export default PortfolioPage