'use client'

import { useEffect, useState } from "react";
import SceneIndex from "../canvas/SceneIndex";
import { IndexOverlay } from "../dom/IndexOverlay";
import { Loader } from "../dom/Loader";
import LCanvas from "../layout/canvas";

const HomePage = () => {
    const [unmount, setUnmount] = useState(false)
    useEffect(() => {
        setUnmount(true)
    }, [unmount])

    return (
        <>
            {!unmount && <Loader setUnmount={setUnmount} />}
            <div>
                <IndexOverlay />
                <LCanvas>
                    <SceneIndex />
                </LCanvas>
            </div>
        </>
    )
}

export default HomePage