import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page14 Component
 * 15.7 PITCH MASTER CHECK X,Y
 * 15.8 PITCH MASTER CHECK U,V
 */
function Page14() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const renderPitchTable = (axis, range, start, step, end, columns, showBottomLabels = true) => {
        const rows = [];
        for (let i = start; i >= end; i -= step) {
            rows.push(i);
        }

        return (
            <div className="w-full">
                {/* Header */}
                <div className={`border border-black border-b-0 bg-gray-200 text-center font-bold py-1 text-[10px]`}>
                    {axis === 'X' || axis === 'Y' ? `${axis} AXIS` : `${axis} axis`}
                </div>

                <table className="w-full border-collapse border border-black text-center text-[9px]">
                    <thead>
                        <tr>
                            <th className="border border-black w-8 bg-gray-100">mm</th>
                            {columns.map((col, idx) => (
                                <th key={idx} className="border border-black"></th> // Empty headers as they are labeled at bottom
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {rows.map(val => (
                            <tr key={val}>
                                <td className="border border-black bg-gray-50">{val}</td>
                                {columns.map((col, idx) => (
                                    <td key={idx} className="border border-black p-0 h-4">
                                        <input
                                            type="text"
                                            className="w-full h-full text-center outline-none bg-transparent"
                                            value={measurements[`pitch_${axis.toLowerCase()}_${val}_${idx}`] || ''}
                                            onChange={(e) => handleMeasurementChange(`pitch_${axis.toLowerCase()}_${val}_${idx}`, e.target.value)}
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        {/* RETURN ROW */}
                        <tr>
                            <td className="border border-black font-bold bg-gray-100">RETURN</td>
                            {columns.map((col, idx) => (
                                <td key={idx} className="border border-black relative h-4">
                                </td>
                            ))}
                        </tr>
                        {/* BOTTOM LABELS */}
                        {showBottomLabels && (
                            <tr>
                                <td className="border border-black bg-gray-100"></td>
                                {columns.map((col, idx) => (
                                    <td key={idx} className="border border-black font-bold bg-gray-100">{col}</td>
                                ))}
                            </tr>
                        )}
                    </tbody>
                </table>
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
                            {renderPitchTable('X', [], 400, 20, 0, ['A', 'B', 'AB'])}
                        </div>
                        <div className="w-1/3 flex flex-col justify-end gap-1 pb-1">
                            {['POSITION MAX', 'BACKLASH', 'ERROR', 'PITCH MASTER NO.', 'DIAL GAUGE No.'].map(label => (
                                <div key={label} className="flex flex-col">
                                    <span className="text-[8px] whitespace-nowrap">{label}</span>
                                    <input
                                        type="text"
                                        className="border-b border-black outline-none w-full text-[9px] h-4"
                                        value={measurements[`pitch_x_${label.toLowerCase().replace(/[\s.]/g, '_')}`] || ''}
                                        onChange={(e) => handleMeasurementChange(`pitch_x_${label.toLowerCase().replace(/[\s.]/g, '_')}`, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Y AXIS */}
                    <div className="flex-1 flex gap-1">
                        <div className="w-2/3">
                            {renderPitchTable('Y', [], 300, 20, 0, ['A', 'B', 'AB'])}
                        </div>
                        <div className="w-1/3 flex flex-col justify-end gap-1 pb-1">
                            {['POSITION MAX', 'BACKLASH', 'ERROR', 'PITCH MASTER NO.', 'DIAL GAUGE No.'].map(label => (
                                <div key={label} className="flex flex-col">
                                    <span className="text-[8px] whitespace-nowrap">{label}</span>
                                    <input
                                        type="text"
                                        className="border-b border-black outline-none w-full text-[9px] h-4"
                                        value={measurements[`pitch_y_${label.toLowerCase().replace(/[\s.]/g, '_')}`] || ''}
                                        onChange={(e) => handleMeasurementChange(`pitch_y_${label.toLowerCase().replace(/[\s.]/g, '_')}`, e.target.value)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <h3 className="font-bold mb-1 text-[10px]">15.8 PITCH MASTER CHECK U,V</h3>

                <div className="flex gap-4 mb-2">
                    {/* U AXIS */}
                    <div className="w-64">
                        {renderPitchTable('U', [], 140, 20, 0, ['A', 'B', 'A - B'])}
                        <div className="mt-1 space-y-1">
                            <div className="flex items-center gap-1">
                                <span className="w-20 text-[9px]">POSITION MAX :</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_u_pos_max'] || ''} onChange={(e) => handleMeasurementChange('pitch_u_pos_max', e.target.value)} />
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-20 text-[9px]">BACKLASH :</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_u_backlash'] || ''} onChange={(e) => handleMeasurementChange('pitch_u_backlash', e.target.value)} />
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-20 text-[9px]">ERROR :</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_u_error'] || ''} onChange={(e) => handleMeasurementChange('pitch_u_error', e.target.value)} />
                            </div>
                        </div>
                    </div>

                    {/* V AXIS */}
                    <div className="w-64">
                        {renderPitchTable('V', [], 140, 20, 0, ['A', 'B', 'A - B'])}
                        <div className="mt-1 space-y-1">
                            <div className="flex items-center gap-1">
                                <span className="w-20 text-[9px]">POSITION MAX :</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_v_pos_max'] || ''} onChange={(e) => handleMeasurementChange('pitch_v_pos_max', e.target.value)} />
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-20 text-[9px]">BACKLASH :</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_v_backlash'] || ''} onChange={(e) => handleMeasurementChange('pitch_v_backlash', e.target.value)} />
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="w-20 text-[9px]">ERROR :</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_v_error'] || ''} onChange={(e) => handleMeasurementChange('pitch_v_error', e.target.value)} />
                            </div>
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
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_uv_dial'] || ''} onChange={(e) => handleMeasurementChange('pitch_uv_dial', e.target.value)} />
                            </div>
                            <div className="flex items-center gap-1 flex-1">
                                <span className="text-[9px]">PITCH NO.</span>
                                <input className="border-b border-black flex-1 outline-none text-[9px] h-4" value={measurements['pitch_uv_pitch_no'] || ''} onChange={(e) => handleMeasurementChange('pitch_uv_pitch_no', e.target.value)} />
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
