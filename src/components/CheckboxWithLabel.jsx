/**
 * CheckboxWithLabel Component
 * Checkbox with optional label text
 */
function CheckboxWithLabel({
    id,
    label = '',
    checked = false,
    onChange,
    className = '',
    labelClassName = '',
    size = 'w-4 h-4'
}) {
    const handleChange = (e) => {
        if (onChange) {
            onChange(id, e.target.checked);
        }
    };

    return (
        <label className={`flex items-center gap-2 cursor-pointer ${className}`}>
            <input
                type="checkbox"
                className={size}
                checked={checked}
                onChange={handleChange}
            />
            {label && <span className={labelClassName}>{label}</span>}
        </label>
    );
}

export default CheckboxWithLabel;
