import { useState, useEffect } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import UniversalTable from '../../components/UniversalTable';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page8 Component
 * หน้าที่ 8: 9. CENTERING CHECK OF BALL SCREW
 *           10. STRAIGHTNESS CHECK OF X,Y AXIS (TOP,SIDE)
 */
function Page8() {
    const [measurements, setMeasurements] = useState({});
    const [approvals, setApprovals] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleApprovalChange = (id, value) => {
        setApprovals(prev => ({ ...prev, [id]: value }));
    };

    // Step/Stork data for X Axis
    const xAxisData = [
        { step: 20, stork: 400 },
        { step: 19, stork: 380 },
        { step: 18, stork: 360 },
        { step: 17, stork: 340 },
        { step: 16, stork: 320 },
        { step: 15, stork: 300 },
        { step: 14, stork: 280 },
        { step: 13, stork: 260 },
        { step: 12, stork: 240 },
        { step: 11, stork: 220 },
        { step: 10, stork: 200 },
        { step: 9, stork: 180 },
        { step: 8, stork: 160 },
        { step: 7, stork: 140 },
        { step: 6, stork: 120 },
        { step: 5, stork: 100 },
        { step: 4, stork: 80 },
        { step: 3, stork: 60 },
        { step: 2, stork: 40 },
        { step: 1, stork: 20 },
        { step: 0, stork: 0 },
    ];

    // Step/Stork data for Y Axis
    const yAxisData = [
        { step: 15, stork: 300 },
        { step: 14, stork: 280 },
        { step: 13, stork: 260 },
        { step: 12, stork: 240 },
        { step: 11, stork: 220 },
        { step: 10, stork: 200 },
        { step: 9, stork: 180 },
        { step: 8, stork: 160 },
        { step: 7, stork: 140 },
        { step: 6, stork: 120 },
        { step: 5, stork: 100 },
        { step: 4, stork: 80 },
        { step: 3, stork: 60 },
        { step: 2, stork: 40 },
        { step: 1, stork: 20 },
        { step: 0, stork: 0 },
    ];

    // Auto Calculate Diff Max-Min for X Axis
    useEffect(() => {
        const calculateDiff = (axisPrefix, dataList, type) => {
            const values = dataList.map(row => parseFloat(measurements[`${axisPrefix}_${type}_${row.step}`])).filter(v => !isNaN(v));
            if (values.length > 0) {
                const max = Math.max(...values);
                const min = Math.min(...values);
                const diff = max - min;
                const key = `${axisPrefix}_diff_${type}`;
                if (measurements[key] !== diff.toString()) {
                    setMeasurements(prev => ({ ...prev, [key]: diff.toString() }));
                }
            }
        };

        calculateDiff('x', xAxisData, 'top');
        calculateDiff('x', xAxisData, 'side');
    }, [measurements, xAxisData]);

    // Auto Calculate Diff Max-Min for Y Axis
    useEffect(() => {
        const calculateDiff = (axisPrefix, dataList, type) => {
            const values = dataList.map(row => parseFloat(measurements[`${axisPrefix}_${type}_${row.step}`])).filter(v => !isNaN(v));
            if (values.length > 0) {
                const max = Math.max(...values);
                const min = Math.min(...values);
                const diff = max - min;
                const key = `${axisPrefix}_diff_${type}`;
                if (measurements[key] !== diff.toString()) {
                    setMeasurements(prev => ({ ...prev, [key]: diff.toString() }));
                }
            }
        };

        calculateDiff('y', yAxisData, 'top');
        calculateDiff('y', yAxisData, 'side');
    }, [measurements, yAxisData]);


    const generateRows = (prefix, data) => {
        return data.map(row => ({
            cells: [
                { content: row.step.toString(), className: 'p-0 !h-4 text-[9px]' },
                { content: row.stork.toString(), className: 'p-0 !h-4 text-[9px]' },
                { type: 'input', id: `${prefix}_top_${row.step}`, className: '!h-4 !min-h-0 text-[9px]' },
                { type: 'input', id: `${prefix}_side_${row.step}`, className: '!h-4 !min-h-0 text-[9px]' }
            ],
            className: 'h-4'
        }));
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
                page="8 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section 9 */}
                <h2 className="font-bold text-sm mb-1">9. CENTERING CHECK OF BALL SCREW</h2>

                <p className="text-[10px] mb-1">
                    เช็คจุดกึ่งกลางของ Ball screw โดยใช้ Dial gauge จับที่ปลายด้านหนึ่งของ Ball screw แล้วหมุนBall screw
                </p>

                <div className="flex gap-4 mb-2">
                    <div className="w-1/3">
                        <img src="/images/page8-image.jpg" alt="Ball Screw Centering" className="w-full h-auto max-h-32 object-contain" />
                    </div>

                    <div className="w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>Centering =</span>
                            <div className="w-24">
                                <input
                                    type="text"
                                    className="border-b border-black w-24 bg-transparent outline-none text-center"
                                    value={measurements['centering'] || ''}
                                    onChange={(e) => handleMeasurementChange('centering', e.target.value)}
                                />
                            </div>
                            <span>μm.</span>
                        </div>
                        <p className="text-[10px]">(Std. ≤ 10 μm.)</p>
                    </div>
                </div>

                {/* Section 10 */}
                <h2 className="font-bold text-sm mb-1">10. STRAIGHTNESS CHECK OF X,Y AXIS ( TOP,SIDE )</h2>
                <p className="text-[10px] mb-1">เช็คความตรงของแกน X,Y ด้าน TOP และ SIDE</p>

                <div className="flex gap-2 items-start">
                    {/* X Axis */}
                    <div className="flex-1">
                        <p className="font-bold text-center text-[10px] mb-0.5">X Axis.</p>
                        <UniversalTable
                            headerRows={[
                                [
                                    { label: '', colSpan: 2 },
                                    { label: 'Top', width: '40px' },
                                    { label: 'Side', width: '40px' }
                                ],
                                [
                                    { label: 'Step', width: '30px' },
                                    { label: 'Stork', width: '30px' },
                                    { label: 'Data', className: 'text-[9px]' },
                                    { label: 'Data', className: 'text-[9px]' }
                                ]
                            ]}
                            rows={generateRows('x', xAxisData)}
                            measurements={measurements}
                            onMeasurementChange={handleMeasurementChange}
                            approvals={approvals}
                            onApprovalChange={handleApprovalChange}
                            className="text-[9px]"
                        />

                        {/* X Axis Diff */}
                        <div className="mt-1 border border-black p-0.5 text-[9px]">
                            <div className="flex flex-wrap gap-x-2 gap-y-1 items-center mb-0.5">
                                <span className="font-bold">Diff Max-Min</span>
                                <div className="flex items-center gap-1">
                                    <span>Top=</span>
                                    <span className={`px-1 border-b border-black min-w-[30px] text-center ${parseFloat(measurements['x_diff_top']) > 2 ? 'bg-red-300' : ''}`}>
                                        {measurements['x_diff_top'] || ''}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>Side=</span>
                                    <span className={`px-1 border-b border-black min-w-[30px] text-center ${parseFloat(measurements['x_diff_side']) > 2 ? 'bg-red-300' : ''}`}>
                                        {measurements['x_diff_side'] || ''}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 text-[9px]">
                                <span>Std. ≤ 2 μm</span>
                                <span>P-Type ≤ 1 μm</span>
                            </div>
                        </div>

                        <div className="mt-1 text-[9px] space-y-0.5">
                            <div className="flex items-center gap-1">
                                <span>Dial gauge No.</span>
                                <input className="border-b border-black w-20 bg-transparent outline-none h-4" value={measurements['dial_gauge_no_x'] || ''} onChange={(e) => handleMeasurementChange('dial_gauge_no_x', e.target.value)} />
                            </div>
                            <div className="flex items-center gap-1">
                                <span>Straight edge No.</span>
                                <input className="border-b border-black w-20 bg-transparent outline-none h-4" value={measurements['straight_edge_no_x'] || ''} onChange={(e) => handleMeasurementChange('straight_edge_no_x', e.target.value)} />
                            </div>
                        </div>
                    </div>

                    {/* Y Axis */}
                    <div className="flex-1">
                        <p className="font-bold text-center text-[10px] mb-0.5">Y Axis.</p>
                        <UniversalTable
                            headerRows={[
                                [
                                    { label: '', colSpan: 2 },
                                    { label: 'Top', width: '40px' },
                                    { label: 'Side', width: '40px' }
                                ],
                                [
                                    { label: 'Step', width: '30px' },
                                    { label: 'Stork', width: '30px' },
                                    { label: 'Data', className: 'text-[9px]' },
                                    { label: 'Data', className: 'text-[9px]' }
                                ]
                            ]}
                            rows={generateRows('y', yAxisData)}
                            measurements={measurements}
                            onMeasurementChange={handleMeasurementChange}
                            approvals={approvals}
                            onApprovalChange={handleApprovalChange}
                            className="text-[9px]"
                        />

                        {/* Y Axis Diff */}
                        <div className="mt-1 border border-black p-0.5 text-[9px]">
                            <div className="flex flex-wrap gap-x-2 gap-y-1 items-center mb-0.5">
                                <span className="font-bold">Diff Max-Min</span>
                                <div className="flex items-center gap-1">
                                    <span>Top=</span>
                                    <span className={`px-1 border-b border-black min-w-[30px] text-center ${parseFloat(measurements['y_diff_top']) > 2 ? 'bg-red-300' : ''}`}>
                                        {measurements['y_diff_top'] || ''}
                                    </span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <span>Side=</span>
                                    <span className={`px-1 border-b border-black min-w-[30px] text-center ${parseFloat(measurements['y_diff_side']) > 2 ? 'bg-red-300' : ''}`}>
                                        {measurements['y_diff_side'] || ''}
                                    </span>
                                </div>
                            </div>
                            <div className="flex gap-2 text-[9px]">
                                <span>Std. ≤ 2 μm</span>
                                <span>P-Type ≤ 1 μm</span>
                            </div>
                        </div>

                        <div className="mt-2">
                            <CheckedByDate
                                name={measurements['checked_by_name'] || ''}
                                date={measurements['checked_by_date'] || ''}
                                onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                                onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page8;
