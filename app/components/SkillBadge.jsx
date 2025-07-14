'use client'

const SkillBadge = ({ skill }) => (
    <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-${skill.color}/20 to-${skill.color}/30 border border-${skill.color}/30 text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${skill.color}/30`}>
        {skill.name}
    </span>
);

export default SkillBadge;