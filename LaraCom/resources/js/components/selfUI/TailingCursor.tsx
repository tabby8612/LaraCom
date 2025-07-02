import { motion, useMotionValue } from 'motion/react';
import { useEffect } from 'react';

export default function TailingCursor() {
    const NumberOfCircles = 10;

    const baseX = useMotionValue(0);
    const baseY = useMotionValue(0);

    const circles = Array.from({ length: NumberOfCircles }).map((_, i) => ({
        x: baseX.set(i * 2),
        y: baseY.set(i * 2 * 10),
    }));

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            baseX.set(e.clientX - 12);
            baseY.set(e.clientY - 12);
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [baseX, baseY]);

    return (
        <>
            {circles.map((circle) => (
                <motion.div
                    className="pointer-events-none fixed top-0 left-0 z-9999 h-6 w-6 rounded-full bg-purple-800"
                    style={{ translateX: circle.x, translateY: circle.y }}
                ></motion.div>
            ))}
        </>
    );
}
