/**
 * MeasurementInputRow Component
 * Table row for measurement input with label, input field, unit and standard value
 */
function MeasurementInputRow({
    label,
    id,
    unit = '',
    standard = '',
    value = '',
    onChange,
    inputWidth = 'w-12'
}) {
    return (
        <tr>
            <td className="border border-black px-2 py-1">
                <span>{label} =</span>
                <input
                    type="text"
                    className={`border-b border-black ${inputWidth} bg-transparent outline-none text-center mx-1`}
                    value={value}
                    onChange={onChange}
                />
                {unit && <span>{unit}</span>}
            </td>
            <td className="border border-black px-2 py-1 text-center">{standard} {unit}</td>
        </tr>
    );
}

export default MeasurementInputRow;
