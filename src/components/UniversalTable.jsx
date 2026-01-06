/**
 * UniversalTable Component
 * ตารางยืดหยุ่นพร้อม validation และ input handling
 */

// --- Validation Logic ---

const parseStandard = (std) => {
    if (!std) return null;
    const s = std.trim();
    if (s === '∞') return { isInfinity: true };

    // Handle Tolerance ± e.g. "10.0 ± 2.0"
    if (s.includes('±')) {
        const parts = s.split('±');
        const target = parseFloat(parts[0]);
        const tol = parseFloat(parts[1]);
        if (!isNaN(target) && !isNaN(tol)) return { min: target - tol, max: target + tol };
    }

    // Handle Range ~ e.g. "2000~3000" or "0.6 - 0.7" (if space-dash-space)
    if (s.includes('~')) {
        const parts = s.split('~');
        const min = parseFloat(parts[0]);
        const max = parseFloat(parts[1]);
        if (!isNaN(min) && !isNaN(max)) return { min, max };
    }
    // Handle Range - only if it looks like "num - num" to avoid negative numbers confusion
    if (s.includes(' - ')) {
        const parts = s.split(' - ');
        const min = parseFloat(parts[0]);
        const max = parseFloat(parts[1]);
        if (!isNaN(min) && !isNaN(max)) return { min, max };
    }

    // Handle Inequality
    if (s.startsWith('<=')) return { max: parseFloat(s.substring(2)) };
    if (s.startsWith('>=')) return { min: parseFloat(s.substring(2)) };
    if (s.startsWith('<')) return { max: parseFloat(s.substring(1)) };
    if (s.startsWith('>')) return { min: parseFloat(s.substring(1)) };

    // Exact Number (Settings)
    const num = parseFloat(s);
    if (!isNaN(num)) return { exact: num };

    // Exact Text (e.g. "ON", "OFF")
    return { exactText: s };
}

const validateValue = (value, std) => {
    if (!value || !std) return true;

    // Clean standard string for parsing
    // Handle inequality strings explicitly
    let isMinExclusive = false;
    let isMaxExclusive = false;

    if (std.startsWith('<') && !std.startsWith('<=')) isMaxExclusive = true;
    if (std.startsWith('>') && !std.startsWith('>=')) isMinExclusive = true;

    const criteria = parseStandard(std);
    if (!criteria) return true;
    if (criteria.isInfinity) return true;

    // Text Validation
    if (criteria.exactText !== undefined) {
        return value.trim().toUpperCase() === criteria.exactText.toUpperCase();
    }

    // Numeric Validation
    const numVal = parseFloat(value);
    if (isNaN(numVal)) return true; // Can't validate non-number against numeric standard

    if (criteria.exact !== undefined && !isMinExclusive && !isMaxExclusive) {
        // Exact match with small epsilon
        return Math.abs(numVal - criteria.exact) < 0.0001;
    }

    if (criteria.min !== undefined) {
        if (isMinExclusive) {
            if (numVal <= criteria.min) return false;
        } else {
            if (numVal < criteria.min) return false;
        }
    }

    if (criteria.max !== undefined) {
        if (isMaxExclusive) {
            if (numVal >= criteria.max) return false;
        } else {
            if (numVal > criteria.max) return false;
        }
    }

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
                                const isValid = validateValue(val, cell.standard);
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
                                                <input
                                                    type="text"
                                                    className={`w-full h-full text-center bg-transparent outline-none px-1 min-w-0 text-[11px] ${!isValid ? 'font-bold' : ''}`}
                                                    value={val}
                                                    placeholder={cell.placeholder}
                                                    onChange={(e) => onMeasurementChange(cell.id, e.target.value)}
                                                    onKeyDown={handleKeyDown}
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
