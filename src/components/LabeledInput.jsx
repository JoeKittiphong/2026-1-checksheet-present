/**
 * LabeledInput Component
 * Input field with label and optional unit
 */
function LabeledInput({
    label,
    value,
    onChange,
    width = 'w-24',
    unit = '',
    className = '',
    inputClassName = '',
    placeholder = '',
    type = 'text',
    id = ''
}) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            {label && <span>{label}</span>}
            <input
                type={type}
                id={id}
                className={`border-b border-black bg-transparent outline-none ${width} ${inputClassName}`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />
            {unit && <span>{unit}</span>}
        </div>
    );
}

export default LabeledInput;
