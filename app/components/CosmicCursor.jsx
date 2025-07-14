'use client'

import { useEffect } from 'react';

const CosmicCursor = ({ cursorPos, setCursorPos, isHovering }) => {
    useEffect(() => {
        const handleMouseMove = (e) => {
            setCursorPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [setCursorPos]);

    return (
        <div
            className={`fixed pointer-events-none z-50 transition-all duration-200 ${isHovering ? 'scale-150' : 'scale-100'}`}
            style={{
                left: cursorPos.x - 10,
                top: cursorPos.y - 10,
                background: 'radial-gradient(circle, rgba(147, 51, 234, 0.8) 0%, rgba(59, 130, 246, 0.6) 50%, transparent 70%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                filter: 'blur(2px)'
            }}
        />
    );
};

export default CosmicCursor;