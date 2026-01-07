import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';
import UniversalTable from '../../components/UniversalTable';
import NumericKeypad from '../../components/NumericKeypad';

/**
 * Page14 Component
 * 15.7 PITCH MASTER CHECK X,Y
 * 15.8 PITCH MASTER CHECK U,V
 */
function Page14() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => {
            const newMeasurements = { ...prev, [id]: value };

            // Auto-calculate Diff (Col 2) for Pitch Tables
            // ID format: pitch_{axis}_{row}_{col} (col 0=A, 1=B)
            const match = id.match(/^pitch_([a-z]+)_(\d+)_([01])$/);
            if (match) {
                const axis = match[1];
                const row = match[2];
                const col = parseInt(match[3]); // 0 for A, 1 for B

                const otherCol = col === 0 ? 1 : 0; // The other input column
                const otherId = `pitch_${axis}_${row}_${otherCol}`;

                // Get the values for A and B from the newMeasurements object
                // The current 'value' is already in newMeasurements[id]
                const valA = col === 0 ? newMeasurements[id] : newMeasurements[otherId];
                const valB = col === 1 ? newMeasurements[id] : newMeasurements[otherId];

                // Check if both A and B have valid numeric values
                const parsedValA = parseFloat(valA);
                const parsedValB = parseFloat(valB);

                if (!isNaN(parsedValA) && !isNaN(parsedValB) && valA !== '' && valB !== '') {
                    const diff = Math.abs(parsedValA - parsedValB);
                    const diffId = `pitch_${axis}_${row}_2`; // Col 2 is the Diff column

                    // Format to 4 decimal places and convert to string
                    newMeasurements[diffId] = parseFloat(diff.toFixed(4)).toString();
                } else {
                    // If either A or B is not a valid number or is empty, clear the diff
                    const diffId = `pitch_${axis}_${row}_2`;
                    newMeasurements[diffId] = '';
                }
            }

            return newMeasurements;
        });
    };

    const renderUniversalPitchTable = (axis, start, step, end, columns) => {
        const rows = [];
        for (let i = start; i >= end; i -= step) {
            rows.push({
                cells: [
                    { content: i, className: 'bg-gray-50 !h-4 p-0' },
                    ...columns.map((_, idx) => ({
                        type: idx === 2 ? 'display' : 'input',
                        id: `pitch_${axis.toLowerCase()}_${i}_${idx}`,
                        className: idx === 2 ? 'bg-gray-200 !h-4 p-0 font-bold' : '!h-4 p-0'
                    }))
                ]
            });
        }

        // Return Row
        rows.push({
            cells: [
                { content: 'RETURN', className: 'bg-gray-100 font-bold !h-4 p-0' },
                ...columns.map(() => ({ content: '', className: '!h-4 p-0' }))
            ]
        });

        return (
            <UniversalTable
                headerRows={[
                    [
                        {
                            label: axis === 'X' || axis === 'Y' ? `${axis} AXIS` : `${axis} axis`,
                            colSpan: columns.length + 1,
                            className: 'bg-gray-200 font-bold'
                        }
                    ],
                    [
                        { label: 'mm', className: 'bg-gray-100 w-10' },
                        ...columns.map(col => ({ label: col, className: 'bg-gray-100', width: '30%' }))
                    ]
                ]}
                rows={rows}
                measurements={measurements}
                onMeasurementChange={handleMeasurementChange}
            />
        );
    };

    const renderSideInputs = (axis) => {
        const fields = [
            { label: 'POSITION MAX', id: `pitch_${axis.toLowerCase()}_position_max`, max: 40 },
            { label: 'BACKLASH', id: `pitch_${axis.toLowerCase()}_backlash`, max: 1 },
            { label: 'ERROR', id: `pitch_${axis.toLowerCase()}_error` },
            { label: 'PITCH MASTER NO.', id: `pitch_${axis.toLowerCase()}_pitch_master_no` },
            { label: 'DIAL GAUGE No.', id: `pitch_${axis.toLowerCase()}_dial_gauge_no` }
        ];

        return (
            <div className="flex flex-col justify-end gap-1 pb-1">
                {fields.map(field => (
                    <div key={field.label} className="flex flex-col">
                        <span className="text-[8px] whitespace-nowrap">{field.label}</span>
                        <NumericKeypad
                            value={measurements[field.id] || ''}
                            onChange={(e) => handleMeasurementChange(field.id, e.target.value)}
                            inputClassName="border-b border-black outline-none w-full text-[9px] h-4"
                            max={field.max}
                        />
                    </div>
                ))}
            </div>
        );
    };

    const renderSideInputsUV = (axis) => {
        const fields = [
            { label: 'POSITION MAX', id: `pitch_${axis.toLowerCase()}_pos_max`, max: 40 },
            { label: 'BACKLASH', id: `pitch_${axis.toLowerCase()}_backlash`, max: 1 },
            { label: 'ERROR', id: `pitch_${axis.toLowerCase()}_error` }
        ];

        return (
            <div className="flex flex-col justify-end gap-1 pb-1">
                {fields.map(field => (
                    <div key={field.label} className="flex flex-col">
                        <span className="text-[8px] whitespace-nowrap">{field.label}</span>
                        <NumericKeypad
                            value={measurements[field.id] || ''}
                            onChange={(e) => handleMeasurementChange(field.id, e.target.value)}
                            inputClassName="border-b border-black outline-none w-full text-[9px] h-4"
                            max={field.max}
                        />
                    </div>
                ))}
            </div>
        );
    };

    return (
        <A4Paper>
            <PageHeader
                documentNo="FAWB0005"
                releaseNo="7"
                controlBy="Assembly Division"
                title="CHECK SHEET"
                subtitle="ASSEMBLY"
                company="Sodick (Thailand) Co.,Ltd"
                page="14 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-[10px]">
                <h3 className="font-bold mb-1 text-[10px]">15.7 PITCH MASTER CHECK X,Y ( Std. Max ≤ 40 µm , Backlash ≤ 1 µm )</h3>

                <div className="flex gap-2 mb-2">
                    {/* X AXIS */}
                    <div className="flex-1 flex gap-1">
                        <div className="w-2/3">
                            {renderUniversalPitchTable('X', 400, 20, 0, ['A', 'B', 'AB'])}
                        </div>
                        <div className="w-1/3">
                            {renderSideInputs('X')}
                        </div>
                    </div>

                    {/* Y AXIS */}
                    <div className="flex-1 flex gap-1">
                        <div className="w-2/3">
                            {renderUniversalPitchTable('Y', 300, 20, 0, ['A', 'B', 'AB'])}
                        </div>
                        <div className="w-1/3">
                            {renderSideInputs('Y')}
                        </div>
                    </div>
                </div>

                <h3 className="font-bold mb-1 text-[10px]">15.8 PITCH MASTER CHECK U,V</h3>

                <div className="flex gap-4 mb-2">
                    {/* U AXIS */}
                    <div className="flex-1 flex gap-1">
                        <div className="w-2/3">
                            {renderUniversalPitchTable('U', 140, 20, 0, ['A', 'B', 'A - B'])}
                        </div>
                        <div className="w-1/3">
                            {renderSideInputsUV('U')}
                        </div>
                    </div>

                    {/* V AXIS */}
                    <div className="flex-1 flex gap-1">
                        <div className="w-2/3">
                            {renderUniversalPitchTable('V', 140, 20, 0, ['A', 'B', 'A - B'])}
                        </div>
                        <div className="w-1/3">
                            {renderSideInputsUV('V')}
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className="border-t border-black pt-1 flex justify-between items-end">
                    <div className="flex-1">
                        <p className="text-center font-bold mb-1 text-[10px]">STD MAX ≤ 40 µm  BACKLASH ≤ 1 µm</p>
                        <div className="flex gap-1">
                            <div className="flex items-center gap-1 flex-1">
                                <span className="text-[9px]">DIAL GAUGE NO.</span>
                                <NumericKeypad
                                    value={measurements['pitch_uv_dial'] || ''}
                                    onChange={(e) => handleMeasurementChange('pitch_uv_dial', e.target.value)}
                                    inputClassName="border-b border-black flex-1 outline-none text-[9px] h-4"
                                />
                            </div>
                            <div className="flex items-center gap-1 flex-1">
                                <span className="text-[9px]">PITCH NO.</span>
                                <NumericKeypad
                                    value={measurements['pitch_uv_pitch_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('pitch_uv_pitch_no', e.target.value)}
                                    inputClassName="border-b border-black flex-1 outline-none text-[9px] h-4"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="ml-4 w-48">
                        <CheckedByDate
                            name={measurements['checked_by_name'] || ''}
                            date={measurements['checked_by_date'] || ''}
                            onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                            onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                        />
                    </div>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page14;
