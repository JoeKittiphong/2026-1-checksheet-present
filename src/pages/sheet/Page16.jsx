import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page16 Component
 * 18. WORK STAND PARALLEL CHECK
 * 19. WORK STAND SQUARE AND PARALLEL CHECK
 */
function Page16() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
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
                page="16 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                {/* 18. WORK STAND PARALLEL CHECK */}
                <div className="mb-6">
                    <h3 className="font-bold mb-2 text-sm">18. WORK STAND PARALLEL CHECK</h3>

                    <div className="flex gap-4">
                        {/* Visual Diagram */}
                        <div className="w-[65%]">
                            {/* Top Plate (D) */}
                            <div className="border border-black p-2 mb-1">
                                <div className="flex justify-between mb-2 px-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <input key={`d_out_${i}`} type="text" className="w-8 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`d_out_${i}`] || ''} onChange={(e) => handleMeasurementChange(`d_out_${i}`, e.target.value)} />
                                    ))}
                                </div>
                                {/* D Inner Row */}
                                <div className="grid grid-cols-7 gap-2 px-2">
                                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                        <div key={`d_in_${i}`} className="flex justify-center">
                                            <input type="text" className="w-8 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`d_in_${i}`] || ''} onChange={(e) => handleMeasurementChange(`d_in_${i}`, e.target.value)} />
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center font-bold text-xl mt-[-20px] pointer-events-none">D</div>
                            </div>

                            {/* Middle Section: Left Plate (A) - Space - Right Plate (C) */}
                            <div className="flex justify-between h-48 mb-1">
                                {/* Left Plate (A) */}
                                <div className="border border-black p-2 w-24 flex justify-between">
                                    <div className="flex flex-col justify-between py-2">
                                        {[1, 2, 3].map(i => (
                                            <input key={`a_out_${i}`} type="text" className="w-6 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`a_out_${i}`] || ''} onChange={(e) => handleMeasurementChange(`a_out_${i}`, e.target.value)} />
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-between py-2">
                                        {[1, 2, 3].map(i => (
                                            <input key={`a_in_${i}`} type="text" className="w-6 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`a_in_${i}`] || ''} onChange={(e) => handleMeasurementChange(`a_in_${i}`, e.target.value)} />
                                        ))}
                                    </div>
                                </div>

                                {/* Center Labels */}
                                <div className="flex-1 relative">
                                    <span className="absolute top-1 left-1/2 -translate-x-1/2 font-bold text-2xl">D</span>
                                    <span className="absolute left-2 top-1/2 -translate-y-1/2 font-bold text-2xl">A</span>
                                    <span className="absolute right-2 top-1/2 -translate-y-1/2 font-bold text-2xl">C</span>
                                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 font-bold text-2xl">B</span>
                                </div>

                                {/* Right Plate (C) */}
                                <div className="border border-black p-2 w-24 flex justify-between">
                                    <div className="flex flex-col justify-between py-2">
                                        {[1, 2, 3].map(i => (
                                            <input key={`c_in_${i}`} type="text" className="w-6 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`c_in_${i}`] || ''} onChange={(e) => handleMeasurementChange(`c_in_${i}`, e.target.value)} />
                                        ))}
                                    </div>
                                    <div className="flex flex-col justify-between py-2">
                                        {[1, 2, 3].map(i => (
                                            <input key={`c_out_${i}`} type="text" className="w-6 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`c_out_${i}`] || ''} onChange={(e) => handleMeasurementChange(`c_out_${i}`, e.target.value)} />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Plate (B) */}
                            <div className="border border-black p-2 relative">
                                <div className="text-center font-bold text-xl mb-[-20px] pointer-events-none">B</div>
                                {/* B Inner Row */}
                                <div className="grid grid-cols-7 gap-2 mb-4 px-2 pt-2">
                                    {[1, 2, 3, 4, 5, 6, 7].map(i => (
                                        <div key={`b_in_${i}`} className="flex justify-center">
                                            <input type="text" className="w-8 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`b_in_${i}`] || ''} onChange={(e) => handleMeasurementChange(`b_in_${i}`, e.target.value)} />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-between px-4">
                                    {[1, 2, 3, 4, 5].map(i => (
                                        <input key={`b_out_${i}`} type="text" className="w-8 border-b border-gray-400 text-center outline-none text-[10px]" value={measurements[`b_out_${i}`] || ''} onChange={(e) => handleMeasurementChange(`b_out_${i}`, e.target.value)} />
                                    ))}
                                </div>
                                <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 mt-3">
                                    <span className="text-xs">⌀</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Info Panel */}
                        <div className="flex-1 text-[10px] flex flex-col justify-center space-y-2">
                            <p>ค่า DIF แผ่นเดียวกัน (STD MAX 8 µm ,P-Spec 6 µm)</p>
                            <p>ค่า DIF แผ่นติดกัน (STD MAX 5 µm ,<span className="text-red-600">P-Spec 4 µm</span>)</p>
                            <p>ค่า DIF จุดติดกัน (STD MAX 5 µm ,<span className="text-red-600">P-Spec 4 µm</span>)</p>
                            <p>ค่า DIF รวมทั้ง 4 แผ่น (STD MAX 8 µm ,<span className="text-red-600">P-Spec 6 µm</span>)</p>

                            <div className="mt-4 space-y-2">
                                <div className="flex items-center gap-2">
                                    <span className="w-20">MAX =</span>
                                    <input className="border-b border-black w-24 outline-none text-center" value={measurements['ws_max'] || ''} onChange={(e) => handleMeasurementChange('ws_max', e.target.value)} />
                                    <span>µm</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-20">MIN =</span>
                                    <input className="border-b border-black w-24 outline-none text-center" value={measurements['ws_min'] || ''} onChange={(e) => handleMeasurementChange('ws_min', e.target.value)} />
                                    <span>µm</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-20">Diff A,B,C,D =</span>
                                    <input className="border-b border-black w-24 outline-none text-center" value={measurements['ws_diff'] || ''} onChange={(e) => handleMeasurementChange('ws_diff', e.target.value)} />
                                    <span>µm</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-center gap-2">
                        <span>Work Stand No.</span>
                        <input
                            type="text"
                            className="border-b border-black w-48 outline-none"
                            value={measurements['work_stand_no'] || ''}
                            onChange={(e) => handleMeasurementChange('work_stand_no', e.target.value)}
                        />
                    </div>
                </div>
                {/* 19. WORK STAND SQUARE AND PARALLEL CHECK */}
                <div className="mb-2">
                    <h3 className="font-bold mb-1 text-sm">19. WORK STAND SQUARE AND PARALLEL CHECK</h3>
                    <p className="mb-2 text-[10px]">( เช็คขอบ Work stand แต่ละแผ่น ) Std. ≤ 20 µm</p>

                    <div className="w-64 h-36 flex items-center justify-center mb-2">
                        <img
                            src="/images/page16-image1.jpg" // Placeholder
                            alt="Work Stand Square Check Diagram"
                            className="max-w-full max-h-full"
                        />
                    </div>

                    <div className="space-y-1">
                        {[
                            { label: 'A. PARALLEL CHECK REFER Y - AXIS', id: 'sq_a' },
                            { label: 'B. PARALLEL CHECK REFER X - AXIS', id: 'sq_b' },
                            { label: 'C. PARALLEL CHECK REFER Y - AXIS', id: 'sq_c' },
                            { label: 'D. PARALLEL CHECK REFER X - AXIS', id: 'sq_d' },
                        ].map((item) => (
                            <div key={item.id} className="flex items-center gap-2">
                                <span className="w-64">{item.label}</span>
                                <span>DATA CHECK = </span>
                                <input
                                    type="text"
                                    className="border-b border-black w-32 outline-none text-center"
                                    value={measurements[item.id] || ''}
                                    onChange={(e) => handleMeasurementChange(item.id, e.target.value)}
                                />
                                <span>µm</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-2">
                    <CheckedByDate
                        title="CHECK BY / DATE"
                        width="w-32"
                        height="h-18"
                        name={measurements['checked_by_name'] || ''}
                        date={measurements['checked_by_date'] || ''}
                        onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                        onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                        compact={true}
                    />
                </div>

            </div>
        </A4Paper>
    );
}

export default Page16;
