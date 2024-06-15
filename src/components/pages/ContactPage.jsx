'use client'

import { useEffect, useState } from "react"
import ObjectClump from "../canvas/ObjectClump"
import ProjectsShader from "../canvas/ProjectsShader"
import StarsCanvas from "../canvas/Stars"
import ContactForm from "../dom/ContactForm"
import LCanvas from "../layout/Canvas"
import Projects from "../projects/Projects"
import { CustomLoader } from "../dom/Loader"


const ContactPage = () => {
    const [unmount, setUnmount] = useState(false)
    useEffect(() => {
        setUnmount(true)
    }, [unmount])

    return (
        <>
            {!unmount && <CustomLoader setUnmount={setUnmount} text='Contact' />}
            <div>
                <ContactForm />
                <LCanvas>
                    <ObjectClump />
                </LCanvas>
            </div>
        </>
    )
}

export default ContactPage
