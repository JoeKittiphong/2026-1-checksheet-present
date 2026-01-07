import NumericKeypad from './NumericKeypad';

/**
 * MeasurementInputRow Component
 * Table row for measurement input with label, input field, unit and standard value
 * รองรับ NumericKeypad และ validation
 */
function MeasurementInputRow({
    label,
    id,
    unit = '',
    standard = '',
    value = '',
    onChange,
    inputWidth = 'w-12',
    min = null,
    max = null
}) {
    // Validation function
    const validateValue = (val) => {
        if (val === '' || val === null || val === undefined) return true;
        const numVal = parseFloat(val);
        if (isNaN(numVal)) return false;
        if (min !== null && numVal < min) return false;
        if (max !== null && numVal > max) return false;
        return true;
    };

    const isValid = validateValue(value);
    const bgColor = isValid ? 'bg-yellow-300' : 'bg-red-300';

    const handleChange = (newValue) => {
        // Create synthetic event for compatibility
        const syntheticEvent = { target: { value: newValue } };
        onChange(syntheticEvent);
    };

    return (
        <tr>
            <td className="border border-black px-2 py-1">
                <span>{label} =</span>
                <NumericKeypad
                    value={value}
                    onChange={handleChange}
                    className={`${inputWidth} ${bgColor}`}
                    inputClassName="text-center"
                />
                {unit && <span>{unit}</span>}
            </td>
            <td className="border border-black px-2 py-1 text-center">{standard} {unit}</td>
        </tr>
    );
}

export default MeasurementInputRow;
