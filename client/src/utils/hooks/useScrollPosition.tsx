import { useEffect, useState } from "react";

const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0,
      });

    useEffect(() => {
        const updateScrollPosition = () => {
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY,
            });
        };

        if(typeof window !== 'undefined'){
            updateScrollPosition();
        }

        window.addEventListener('scroll', updateScrollPosition);

        return () => {
            window.removeEventListener('scroll', updateScrollPosition);
        };
    }, []);
    return scrollPosition;
}

export default useScrollPosition