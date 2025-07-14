'use client'

const GlassCard = ({ children, className = "", hover = true, onMouseEnter, onMouseLeave, ...props }) => (
    <div
        className={`backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 transition-all duration-500 ${hover ? 'hover:bg-white/10 hover:border-white/20 hover:scale-105' : ''} ${className}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
    >
        {children}
    </div>
);

export default GlassCard;