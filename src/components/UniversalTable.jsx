import NumericKeypad from './NumericKeypad';

/**
 * UniversalTable Component
 * ตารางยืดหยุ่นพร้อม validation และ input handling
 */

// --- Validation Logic ---

/**
 * Validate value against min/max criteria
 * @param {string} value - The value to validate
 * @param {number|null|undefined} min - Minimum allowed value (inclusive)
 * @param {number|null|undefined} max - Maximum allowed value (inclusive)
 * @returns {boolean} - true if valid, false if invalid
 */
const validateValue = (value, min, max) => {
    // If no value, it's valid (empty input is ok)
    if (value === '' || value === null || value === undefined) return true;

    // Check if min or max is set (not null/undefined)
    const hasMin = min !== null && min !== undefined;
    const hasMax = max !== null && max !== undefined;

    // If no constraints defined, it's valid
    if (!hasMin && !hasMax) return true;

    const numVal = parseFloat(value);

    // If value is not a valid number, can't validate - mark as invalid
    if (isNaN(numVal)) return false;

    // Check min constraint
    if (hasMin && numVal < min) return false;

    // Check max constraint
    if (hasMax && numVal > max) return false;

    return true;
}

// --- Component ---

function UniversalTable({
    headers,
    headerRows,
    rows = [],
    measurements = {},
    onMeasurementChange = () => { },
    approvals = {},
    onApprovalChange = () => { },
    className = ''
}) {

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const inputs = document.querySelectorAll('input:not([type="hidden"]):not([disabled])');
            const inputArray = Array.from(inputs);
            const currentIndex = inputArray.indexOf(e.currentTarget);
            if (currentIndex !== -1 && currentIndex < inputArray.length - 1) {
                const nextInput = inputArray[currentIndex + 1];
                nextInput.focus();
                if (nextInput.type === 'text') {
                    nextInput.select();
                }
            }
        }
    };

    const finalHeaders = headerRows || (headers ? [headers] : []);

    return (
        <table className={`border-collapse border border-black text-center text-[11px] leading-tight table-fixed ${className}`}>
            {finalHeaders.length > 0 && (
                <thead>
                    {finalHeaders.map((row, rIdx) => (
                        <tr key={rIdx} className="bg-gray-300">
                            {row.map((h, cIdx) => (
                                <th
                                    key={cIdx}
                                    className={`border border-black p-1 font-bold ${h.className || ''}`}
                                    colSpan={h.colSpan}
                                    rowSpan={h.rowSpan}
                                    style={{ width: h.width }}
                                >
                                    {h.label}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
            )}

            <tbody>
                {rows.map((row, rIdx) => (
                    <tr key={rIdx} className={row.className}>
                        {row.cells.map((cell, cIdx) => {
                            if (cell.type === 'checkbox' && cell.id) {
                                const isChecked = measurements[cell.id] === 'true';
                                return (
                                    <td
                                        key={cIdx}
                                        className={`border border-black p-0 align-middle ${cell.className || ''}`}
                                        colSpan={cell.colSpan}
                                        rowSpan={cell.rowSpan}
                                    >
                                        <div className="flex w-full h-full items-center justify-center min-h-[32px] py-1">
                                            <div
                                                className="w-5 h-5 border border-black bg-white cursor-pointer flex items-center justify-center select-none"
                                                onClick={() => onMeasurementChange(cell.id, isChecked ? 'false' : 'true')}
                                            >
                                                {isChecked && <span className="font-bold text-black text-sm">✓</span>}
                                            </div>
                                        </div>
                                    </td>
                                );
                            }

                            if (cell.type === 'input' && cell.id) {
                                const val = measurements[cell.id] || '';
                                const approvalVal = approvals[cell.id] || '';
                                const isValid = validateValue(val, cell.min, cell.max);
                                const cellBg = isValid ? 'bg-yellow-300' : 'bg-red-300';

                                return (
                                    <td
                                        key={cIdx}
                                        className={`border border-black p-0 ${cellBg} align-middle relative h-[24px] ${cell.className || ''}`}
                                        colSpan={cell.colSpan}
                                        rowSpan={cell.rowSpan}
                                    >
                                        <div className="flex w-full h-full items-stretch min-h-[24px]">
                                            <div className={`relative flex-1 h-full ${!isValid ? 'border-r border-black border-dashed w-1/2' : 'w-full'}`}>
                                                <NumericKeypad
                                                    value={val}
                                                    onChange={(e) => onMeasurementChange(cell.id, e.target.value)}
                                                    placeholder={cell.placeholder}
                                                    allowNegative={true}
                                                    allowDecimal={true}
                                                    inputClassName={`w-full h-full text-center bg-transparent outline-none px-1 min-w-0 text-[11px] ${!isValid ? 'font-bold' : ''}`}
                                                    width="w-full"
                                                />
                                                {cell.unit && isValid && (
                                                    <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[9px] pointer-events-none text-gray-600">
                                                        {cell.unit}
                                                    </span>
                                                )}
                                            </div>

                                            {!isValid && (
                                                <div className="relative w-1/2 h-full">
                                                    <input
                                                        type="text"
                                                        placeholder="Appr."
                                                        className="w-full h-full text-center bg-transparent outline-none text-[10px] placeholder-gray-600"
                                                        value={approvalVal}
                                                        onChange={(e) => onApprovalChange(cell.id, e.target.value)}
                                                        onKeyDown={handleKeyDown}
                                                    />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                );
                            }

                            return (
                                <td
                                    key={cIdx}
                                    className={`border border-black p-1 align-middle break-words ${cell.className || ''}`}
                                    colSpan={cell.colSpan}
                                    rowSpan={cell.rowSpan}
                                >
                                    {cell.content}
                                </td>
                            );
                        })}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default UniversalTable;
