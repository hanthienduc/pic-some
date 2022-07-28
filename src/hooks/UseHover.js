import { useEffect, useRef, useState } from "react"

function UseHover() {

    const [hovered, setHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setHovered(true)
    }
    function leave() {
        setHovered(false)
    }

    useEffect(() => {
        const refCurrent = ref.current
        refCurrent.addEventListener("mouseenter", enter)
        refCurrent.addEventListener("mouseleave", leave)

        return () => {
            refCurrent.removeEventListener("mouseenter", enter)
            refCurrent.removeEventListener("mouseleave", leave)
        }
    }, [])

    return {
        hovered,
        ref
    }
}

export default UseHover