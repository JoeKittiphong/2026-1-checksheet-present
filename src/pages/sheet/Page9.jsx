import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import UniversalTable from '../../components/UniversalTable';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page9 Component
 * หน้าที่ 9: 11. CHECK POSITION OF LINEAR SCALE X,Y,V AXIS
 *           12. CERAMIC BASE CHECK
 *           13. SET SIDE CERAMIC BASE
 */
function Page9() {
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
                page="9 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section 11 */}
                <h2 className="font-bold text-sm mb-2">11. CHECK POSITION OF LINEAR SCALE X,Y,V AXIS</h2>

                <p className="text-[10px] mb-2">
                    * กำหนดให้ทิศทางการประกอบ Linear scale ต้องดัน Scale base และ Scale headไปยังทิศทางเดียวกันกับสายของ Linear scale
                </p>

                {/* Diagram */}
                <div className="flex justify-center mb-2">
                    <img
                        src="/images/page9-image1.jpg"
                        alt="Linear Scale Diagram"
                        className="w-140 h-auto"
                    />
                </div>

                <p className="text-[10px] mb-2">
                    เมื่อทำการดัน Scale base และ Scale head ไปยังทิศทางเดียวกันกับหางไฟของ Linear scale แล้วให้ ✓ ลงใน ☐ ให้เรียบร้อย
                </p>

                {/* Axis check table */}
                <table className="border-collapse border border-black text-[10px] mb-4 w-full">
                    <thead>
                        <tr>
                            <th className="border border-black px-2 py-1 w-12">Axis</th>
                            <th className="border border-black px-2 py-1 w-8"></th>
                            <th className="border border-black px-2 py-1">Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-black px-2 py-1 text-center">X</td>
                            <td className="border border-black px-2 py-1 text-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={measurements['scale_x_check'] || false}
                                    onChange={(e) => handleMeasurementChange('scale_x_check', e.target.checked)}
                                />
                            </td>
                            <td className="border border-black px-2 py-1">
                                ดัน Scale base และ Scale head ไปยังทิศทางเดียวกันกับสายไฟของ Linear scale แล้ว
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black px-2 py-1 text-center">Y</td>
                            <td className="border border-black px-2 py-1 text-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={measurements['scale_y_check'] || false}
                                    onChange={(e) => handleMeasurementChange('scale_y_check', e.target.checked)}
                                />
                            </td>
                            <td className="border border-black px-2 py-1">
                                ดัน Scale base และ Scale head ไปยังทิศทางเดียวกันกับสายไฟของ Linear scale แล้ว
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black px-2 py-1 text-center">V</td>
                            <td className="border border-black px-2 py-1 text-center">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={measurements['scale_v_check'] || false}
                                    onChange={(e) => handleMeasurementChange('scale_v_check', e.target.checked)}
                                />
                            </td>
                            <td className="border border-black px-2 py-1">
                                ดัน Scale base และ Scale head ไปยังทิศทางเดียวกันกับสายไฟของ Linear scale แล้ว
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* Section 12 */}
                <h2 className="font-bold text-sm mb-2">12. CERAMIC BASE CHECK</h2>

                <div className="flex gap-4 mb-4">
                    {/* 3x3 Table using UniversalTable */}
                    <div className="flex-shrink-0">
                        <UniversalTable
                            headerRows={[
                                [
                                    { label: '', width: '50px' },
                                    { label: '', width: '50px' },
                                    { label: '', width: '50px' }
                                ]
                            ]}
                            rows={[
                                {
                                    cells: [
                                        { type: 'input', id: 'ceramic_1_1', standard: '∞' },
                                        { type: 'input', id: 'ceramic_1_2', standard: '∞' },
                                        { type: 'input', id: 'ceramic_1_3', standard: '∞' }
                                    ]
                                },
                                {
                                    cells: [
                                        { type: 'input', id: 'ceramic_2_1', standard: '∞' },
                                        { type: 'input', id: 'ceramic_2_2', standard: '∞' },
                                        { type: 'input', id: 'ceramic_2_3', standard: '∞' }
                                    ]
                                },
                                {
                                    cells: [
                                        { type: 'input', id: 'ceramic_3_1', standard: '∞' },
                                        { content: '⌀' },
                                        { type: 'input', id: 'ceramic_3_3', standard: '∞' }
                                    ]
                                }
                            ]}
                            measurements={measurements}
                            onMeasurementChange={handleMeasurementChange}
                        />
                        <p className="text-center text-[10px] mt-1">FRONT</p>
                        <p className="text-[10px] mt-1">MAX ≤ 5 μm</p>
                    </div>

                    {/* DIAL GAUGE NO. */}
                    <div className="flex-1">
                        <div className="flex items-center gap-2">
                            <span className="text-[10px]">DIAL GAUGE NO.</span>
                            <input
                                type="text"
                                className="border-b border-black w-32 bg-transparent outline-none"
                                value={measurements['dial_gauge_no'] || ''}
                                onChange={(e) => handleMeasurementChange('dial_gauge_no', e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Section 13 */}
                <h2 className="font-bold text-sm mb-2">13 SET SIDE CERAMIC BASE</h2>

                <div className="flex gap-4">
                    {/* Diagram */}
                    <div className="flex-shrink-0">
                        <img
                            src="/images/page9-image2.jpg"
                            alt="Side Ceramic Base"
                            className="w-80 h-auto"
                        />
                        <div className="mt-2 space-y-1 text-[10px]">
                            <div className="flex items-center gap-2">
                                <span>Data =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-16 bg-transparent outline-none text-center"
                                    value={measurements['side_ceramic_data'] || ''}
                                    onChange={(e) => handleMeasurementChange('side_ceramic_data', e.target.value)}
                                />
                                <span>μm</span>
                            </div>
                            <p>MAX ≤ 10 μm</p>
                        </div>
                    </div>

                    {/* Checked By / Date */}
                    <div className="flex-1 flex justify-end items-end">
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

export default Page9;
