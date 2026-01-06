/**
 * InspectionPoint Component
 * Inspection checkpoint overlay with dual checkboxes (Leader and Chief)
 */
function InspectionPoint({
    top,
    left,
    right,
    bottom,
    text,
    id,
    width = 'w-48',
    measurements = {},
    onCheckboxChange
}) {
    return (
        <div
            className={`absolute p-1 border border-black bg-white flex gap-2 items-start text-[9px] ${width}`}
            style={{ top, left, right, bottom }}
        >
            <div className="flex flex-col gap-1 mt-1">
                {/* Circle Checkbox (Leader) */}
                <div
                    className="relative w-4 h-4 rounded-full border border-black flex items-center justify-center cursor-pointer"
                    onClick={() => onCheckboxChange(`${id}_leader`)}
                >
                    {measurements[`${id}_leader`] && <div className="w-2 h-2 rounded-full bg-black"></div>}
                </div>
                {/* Square Checkbox (Ass't chief) */}
                <div
                    className="relative w-4 h-4 border border-black flex items-center justify-center cursor-pointer"
                    onClick={() => onCheckboxChange(`${id}_chief`)}
                >
                    {measurements[`${id}_chief`] && <div className="w-2 h-2 bg-black"></div>}
                </div>
            </div>
            <div className="flex-1 leading-tight">{text}</div>
        </div>
    );
}

export default InspectionPoint;
