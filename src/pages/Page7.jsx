import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import UniversalTable from '../components/UniversalTable';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page7 Component
 * หน้าที่ 7: 8. LEVELING CHECK
 */
function Page7() {
    const [measurements, setMeasurements] = useState({});
    const [approvals, setApprovals] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleApprovalChange = (id, value) => {
        setApprovals(prev => ({ ...prev, [id]: value }));
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
                page="7 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section Title */}
                <h2 className="font-bold text-sm mb-2">8. LEVELING CHECK</h2>

                {/* 8.1 PITCHING - X */}
                <div className="flex gap-2 mb-3 border-b border-gray-300 pb-2">
                    <div className="flex w-1/3">
                        <p className="font-bold text-[10px] mb-1">8.1 PITCHING - X</p>
                        <img
                            src="/images/page7-image1.jpg"
                            alt="Pitching X Diagram"
                            className="w-40 h-auto"
                        />
                        <div className="text-center text-[10px] mt-1">MAX<br />20 μm</div>

                        <div className="w-2/3">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '35px' },
                                        { label: 'X +', width: '45px' },
                                        { label: 'X0', width: '45px' },
                                        { label: 'X -', width: '45px' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: 'B', className: 'font-bold' },
                                            { type: 'input', id: 'p81_b_xp', standard: '∞' },
                                            { content: '← 0' },
                                            { type: 'input', id: 'p81_b_xm', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: 'T', className: 'font-bold' },
                                            { type: 'input', id: 'p81_t_xp', standard: '∞' },
                                            { content: '→ 0' },
                                            { type: 'input', id: 'p81_t_xm', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: 'DIFF', className: 'font-bold' },
                                            { type: 'input', id: 'p81_diff_xp', standard: '∞' },
                                            { content: '' },
                                            { type: 'input', id: 'p81_diff_xm', standard: '∞' }
                                        ]
                                    }
                                ]}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px]">DATA PITCHING</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none text-center"
                                    value={measurements['data_pitching_x'] || ''}
                                    onChange={(e) => handleMeasurementChange('data_pitching_x', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8.2 ROLLING - X */}
                <div className="flex gap-2 mb-3 border-b border-gray-300 pb-2">
                    <div className="flex w-1/3">
                        <p className="font-bold text-[10px] mb-1">8.2 ROLLING - X</p>
                        <img
                            src="/images/page7-image2.jpg"
                            alt="Rolling X Diagram"
                            className="w-full h-auto"
                        />
                        <div className="text-center text-[10px] mt-1">MAX<br />15 μm</div>

                        <div className="w-2/3">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '35px' },
                                        { label: 'X +', width: '45px' },
                                        { label: 'X0', width: '45px' },
                                        { label: 'X -', width: '45px' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: 'B', className: 'font-bold' },
                                            { type: 'input', id: 'p82_b_xp', standard: '∞' },
                                            { content: '0 ↕' },
                                            { type: 'input', id: 'p82_b_xm', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: 'T', className: 'font-bold' },
                                            { type: 'input', id: 'p82_t_xp', standard: '∞' },
                                            { content: '0 ↕' },
                                            { type: 'input', id: 'p82_t_xm', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: 'DIFF', className: 'font-bold' },
                                            { type: 'input', id: 'p82_diff_xp', standard: '∞' },
                                            { content: '' },
                                            { type: 'input', id: 'p82_diff_xm', standard: '∞' }
                                        ]
                                    }
                                ]}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px]">DATA ROLLING - X =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none text-center"
                                    value={measurements['data_rolling_x'] || ''}
                                    onChange={(e) => handleMeasurementChange('data_rolling_x', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8.3 PITCHING - Y */}
                <div className="flex gap-2 mb-3 border-b border-gray-300 pb-2">
                    <div className="flex w-1/3">
                        <p className="font-bold text-[10px] mb-1">8.3 PITCHING - Y</p>
                        <img
                            src="/images/page7-image3.jpg"
                            alt="Pitching Y Diagram"
                            className="w-full h-auto"
                        />
                        <div className="text-center text-[10px] mt-1">MAX<br />15 μm</div>

                        <div className="w-2/3">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '35px' },
                                        { label: 'B', width: '45px' },
                                        { label: 'C', width: '45px' },
                                        { label: 'DIFF', width: '45px' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: 'Y+', className: 'font-bold' },
                                            { content: '0 ↕' },
                                            { content: '0 ↕' },
                                            { type: 'input', id: 'p83_diff_yp', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '0', className: 'font-bold' },
                                            { content: '0' },
                                            { content: '0' },
                                            { content: '' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: 'Y-', className: 'font-bold' },
                                            { type: 'input', id: 'p83_b_ym', standard: '∞' },
                                            { type: 'input', id: 'p83_c_ym', standard: '∞' },
                                            { type: 'input', id: 'p83_diff_ym', standard: '∞' }
                                        ]
                                    }
                                ]}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px]">DATA PITCHING - Y =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none text-center"
                                    value={measurements['data_pitching_y'] || ''}
                                    onChange={(e) => handleMeasurementChange('data_pitching_y', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 8.4 ROLLING - Y */}
                <div className="flex gap-2 mb-3">
                    <div className="flex w-1/3">
                        <p className="font-bold text-[10px] mb-1">8.4 ROLLING - Y</p>
                        <img
                            src="/images/page7-image4.jpg"
                            alt="Rolling Y Diagram"
                            className="w-full h-auto"
                        />
                        <div className="text-center text-[10px] mt-1">MAX<br />10μm</div>

                        <div className="w-2/3">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '35px' },
                                        { label: 'B', width: '45px' },
                                        { label: 'C', width: '45px' },
                                        { label: 'DIFF', width: '45px' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: 'Y+', className: 'font-bold' },
                                            { type: 'input', id: 'p84_b_yp', standard: '∞' },
                                            { type: 'input', id: 'p84_c_yp', standard: '∞' },
                                            { type: 'input', id: 'p84_diff_yp', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '0', className: 'font-bold' },
                                            { content: '0' },
                                            { content: '0' },
                                            { content: '' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: 'Y-', className: 'font-bold' },
                                            { type: 'input', id: 'p84_b_ym', standard: '∞' },
                                            { type: 'input', id: 'p84_c_ym', standard: '∞' },
                                            { type: 'input', id: 'p84_diff_ym', standard: '∞' }
                                        ]
                                    }
                                ]}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                            />
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-[10px]">DATA ROLLING - Y =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none text-center"
                                    value={measurements['data_rolling_y'] || ''}
                                    onChange={(e) => handleMeasurementChange('data_rolling_y', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-2 pt-2 border-t border-gray-300">
                    {/* Left: Jig and Level NO. */}
                    <div className="flex gap-4">
                        <div>
                            <p className="text-[9px] mb-1">* ข้อ 8.3,8.4 กำหนดให้ใช้ ระดับน้ำดิจิตอลและใช้ Jig ยึดColumn สำหรับวางระดับน้ำ</p>
                            <div className="flex gap-4">
                                <img
                                    src="/images/page7-image5.jpg"
                                    alt="Jig"
                                    className="w-30 h-auto"
                                />
                                <div className="text-[10px] space-y-1">
                                    <div className="flex items-center gap-1">
                                        <span>1. LEVEL NO.</span>
                                        <input
                                            type="text"
                                            className="border-b border-black w-16 bg-transparent outline-none"
                                            value={measurements['level_no_1'] || ''}
                                            onChange={(e) => handleMeasurementChange('level_no_1', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>2. LEVEL NO.</span>
                                        <input
                                            type="text"
                                            className="border-b border-black w-16 bg-transparent outline-none"
                                            value={measurements['level_no_2'] || ''}
                                            onChange={(e) => handleMeasurementChange('level_no_2', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>3. LEVEL DIGITAL NO.</span>
                                        <input
                                            type="text"
                                            className="border-b border-black w-16 bg-transparent outline-none"
                                            value={measurements['level_digital_no_3'] || ''}
                                            onChange={(e) => handleMeasurementChange('level_digital_no_3', e.target.value)}
                                        />
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span>4. LEVEL DIGITAL NO.</span>
                                        <input
                                            type="text"
                                            className="border-b border-black w-16 bg-transparent outline-none"
                                            value={measurements['level_digital_no_4'] || ''}
                                            onChange={(e) => handleMeasurementChange('level_digital_no_4', e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Checked By / Date */}
                    <CheckedByDate
                        name={measurements['checked_by_name'] || ''}
                        date={measurements['checked_by_date'] || ''}
                        onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                        onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                    />
                </div>
            </div>
        </A4Paper>
    );
}

export default Page7;
