/* eslint-disable react/prop-types */

import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const CursorMotionContainer = ({ children }) => {
    const comp = useRef(null);

    useLayoutEffect(() => {
        let context = gsap.context(() => {
            const t1 = gsap.timeline();
            t1.from("#intro-slider", {
                xPercent: "-100",
                duration: 1.3,
                delay: 0.1,
            }).from(
                ["#title-1", "#title-2", "#title-3", "#title-4", "#title-5"],
                {
                    opacity: 0,
                    y: "+=30",
                    stagger: 0.5,
                }
            );
        }, comp);
        return () => context.revert();
    }, []);

    return <div ref={comp}>{children}</div>;
};
