import React, { useState, useEffect } from 'react'

const Display = () => {
    const [size, setSize] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)
    const checkSize = () => {
        setSize(window.innerWidth)
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        document.title = 'Window Size'
        window.addEventListener('resize', checkSize)
        return () => {
            window.removeEventListener('resize', checkSize)
        }

    }, [])


    return (
        <div>
            <h1>width Size</h1>
            <h2 className='size'>{size} px</h2>

            <h1>Height Size </h1>
            <h2 className='size'>{height} px</h2>
        </div>
    )
}

export default Display
