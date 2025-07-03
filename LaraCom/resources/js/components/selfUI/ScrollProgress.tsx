'use client';

import { motion, useScroll } from 'motion/react';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

export default function ScrollProgress({ children }: Props) {
    const { scrollYProgress } = useScroll();

    return (
        <>
            <motion.div
                id="scroll-indicator"
                style={{
                    scaleX: scrollYProgress,
                    position: 'fixed',
                    top: 88,
                    left: 0,
                    right: 0,
                    height: 5,
                    originX: 0,
                    zIndex: 999,
                    backgroundColor: 'purple',
                }}
            />
            {children}
        </>
    );
}
