/**
 * DiagramImage Component
 * Container for diagram images with consistent styling
 */
function DiagramImage({
    src,
    alt,
    height = 'h-60',
    width = 'w-full',
    imgClassName = '',
    containerClassName = '',
    hasBorder = false,
    hasBg = false
}) {
    const borderClass = hasBorder ? 'border border-gray-300' : '';
    const bgClass = hasBg ? 'bg-gray-50' : '';

    return (
        <div className={`${width} ${height} flex items-center justify-center ${borderClass} ${bgClass} ${containerClassName}`}>
            <img
                src={src}
                alt={alt}
                className={`max-h-full max-w-full ${imgClassName}`}
            />
        </div>
    );
}

export default DiagramImage;
