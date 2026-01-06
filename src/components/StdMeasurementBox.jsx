/**
 * StdMeasurementBox Component
 * Box showing standard value with measurement input
 */
function StdMeasurementBox({
    standardLabel,
    id,
    unit = '',
    value = '',
    onChange,
    width = 'w-40',
    inputWidth = 'w-16'
}) {
    return (
        <div className={`border border-black p-2 text-center ${width} bg-white`}>
            <div className="mb-2">{standardLabel}</div>
            <div className="flex items-center justify-center gap-1">
                <span>=</span>
                <input
                    className={`border-b border-black ${inputWidth} text-center outline-none`}
                    value={value}
                    onChange={(e) => onChange(id, e.target.value)}
                />
                {unit && <span>{unit}</span>}
            </div>
        </div>
    );
}

export default StdMeasurementBox;
