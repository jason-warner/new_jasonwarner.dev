import { useEffect } from "react";
import { useState, useLayoutEffect } from "react";

export const useWindowSize = () => {
    const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect
    const [size, setSize] = useState([0, 0]);
    useIsomorphicLayoutEffect(() => {
        const updateSize = () => {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}