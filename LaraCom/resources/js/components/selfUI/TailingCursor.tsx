import { motion } from 'motion/react';
import { createRef, useEffect, useRef } from 'react';

const NUM_CIRCLES = 10;

export default function TailingCursor() {
    const coords = useRef({ x: 0, y: 0 });

    const circles = useRef(
        Array.from({ length: NUM_CIRCLES }, () => ({
            x: 0,
            y: 0,
            ref: createRef<HTMLDivElement>(),
        })),
    );

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            coords.current.x = clientX;
            coords.current.y = clientY;
        };

        document.addEventListener('mousemove', handleMouseMove);

        const animate = () => {
            const { x, y } = coords.current;

            circles.current.forEach((circle, index) => {
                const next = circles.current[index - 1] || { x, y };

                circle.x += (next.x - circle.x) * 0.5;
                circle.y += (next.y - circle.y) * 0.5;

                const el = circle.ref.current;

                if (el) {
                    const scale = 1 - index * 0.05;
                    el.style.transform = `translate(${circle.x}px, ${circle.y}px) scale(${scale})`;
                }
            });

            requestAnimationFrame(animate);
        };

        animate();

        return () => document.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <>
            {circles.current.map((circle, i) => {
                const opacity = 1 - i * 0.08;

                return (
                    <motion.div
                        key={i}
                        ref={circle.ref}
                        className="pointer"
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: 24,
                            height: 24,
                            borderRadius: '50%',
                            backgroundColor: 'purple',
                            pointerEvents: 'none',
                            zIndex: 99999,
                            opacity: opacity,
                        }}
                    ></motion.div>
                );
            })}
        </>
    );
}
