/**
 * SectionTitle Component
 * Consistent section headings for checksheet pages
 */
function SectionTitle({ children, level = 1, className = '' }) {
    const baseClasses = 'font-bold';

    const levelClasses = {
        1: 'text-sm mb-4',
        2: 'text-xs mb-2',
        3: 'text-[10px] mb-1'
    };

    const combinedClassName = `${baseClasses} ${levelClasses[level] || levelClasses[1]} ${className}`;

    if (level === 1) {
        return <h2 className={combinedClassName}>{children}</h2>;
    } else if (level === 2) {
        return <h3 className={combinedClassName}>{children}</h3>;
    } else {
        return <h4 className={combinedClassName}>{children}</h4>;
    }
}

export default SectionTitle;
