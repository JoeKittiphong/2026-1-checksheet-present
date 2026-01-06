import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page8 Component
 * หน้าที่ 8: 9. CENTERING CHECK OF BALL SCREW
 *           10. STRAIGHTNESS CHECK OF X,Y AXIS (TOP,SIDE)
 */
function Page8() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
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
                <h2 className="font-bold text-sm mb-2">9. CENTERING CHECK OF BALL SCREW</h2>

                <p className="text-[10px] mb-2">
                    เช็คจุดกึ่งกลางของ Ball screw โดยใช้ Dial gauge จับที่ปลายด้านหนึ่งของ Ball screw แล้วหมุนBall screw
                </p>

                <div className="flex gap-4 mb-4">
                    {/* Diagram */}
                    <div className="w-1/3">
                        <img
                            src="/images/page8-image.jpg"
                            alt="Ball Screw Centering"
                            className="w-full h-auto"
                        />
                    </div>

                    {/* Centering input */}
                    <div className="w-2/3 flex flex-col justify-center">
                        <div className="flex items-center gap-2 mb-2">
                            <span>Centering =</span>
                            <input
                                type="text"
                                className="border-b border-black w-24 bg-transparent outline-none text-center"
                                value={measurements['centering'] || ''}
                                onChange={(e) => handleMeasurementChange('centering', e.target.value)}
                            />
                            <span>μm.</span>
                        </div>
                        <p className="text-[10px]">(Std. ≤ 10 μm.)</p>
                    </div>
                </div>

                {/* Section 10 */}
                <h2 className="font-bold text-sm mb-2">10. STRAIGHTNESS CHECK OF X,Y AXIS ( TOP,SIDE )</h2>

                <p className="text-[10px] mb-2">เช็คความตรงของแกน X,Y ด้าน TOP และ SIDE</p>

                {/* Tables */}
                <div className="flex gap-2">
                    {/* X Axis Table */}
                    <div className="flex-1">
                        <p className="font-bold text-center text-[10px] mb-1">X Axis.</p>
                        <table className="border-collapse border border-black text-[9px] w-full">
                            <thead>
                                <tr>
                                    <th className="border border-black px-1 py-0.5" colSpan={2}></th>
                                    <th className="border border-black px-1 py-0.5">Top</th>
                                    <th className="border border-black px-1 py-0.5">Side</th>
                                </tr>
                                <tr>
                                    <th className="border border-black px-1 py-0.5 w-8">Step</th>
                                    <th className="border border-black px-1 py-0.5 w-10">Stork</th>
                                    <th className="border border-black px-1 py-0.5">Data</th>
                                    <th className="border border-black px-1 py-0.5">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {xAxisData.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="border border-black px-1 py-0.5 text-center">{row.step}</td>
                                        <td className="border border-black px-1 py-0.5 text-center">{row.stork}</td>
                                        <td className="border border-black px-1 py-0.5">
                                            <input
                                                type="text"
                                                className="w-full bg-transparent outline-none text-center text-[9px]"
                                                value={measurements[`x_top_${row.step}`] || ''}
                                                onChange={(e) => handleMeasurementChange(`x_top_${row.step}`, e.target.value)}
                                            />
                                        </td>
                                        <td className="border border-black px-1 py-0.5">
                                            <input
                                                type="text"
                                                className="w-full bg-transparent outline-none text-center text-[9px]"
                                                value={measurements[`x_side_${row.step}`] || ''}
                                                onChange={(e) => handleMeasurementChange(`x_side_${row.step}`, e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Diff Max-Min */}
                        <table className="border-collapse border border-black text-[9px] w-full mt-1">
                            <tbody>
                                <tr>
                                    <td className="border border-black px-1 py-0.5">Diff Max-Min</td>
                                    <td className="border border-black px-1 py-0.5">Top =</td>
                                    <td className="border border-black px-1 py-0.5">
                                        <input
                                            type="text"
                                            className="w-8 bg-transparent outline-none text-center"
                                            value={measurements['x_diff_top'] || ''}
                                            onChange={(e) => handleMeasurementChange('x_diff_top', e.target.value)}
                                        />
                                        μm
                                    </td>
                                    <td className="border border-black px-1 py-0.5">Side =</td>
                                    <td className="border border-black px-1 py-0.5">
                                        <input
                                            type="text"
                                            className="w-8 bg-transparent outline-none text-center"
                                            value={measurements['x_diff_side'] || ''}
                                            onChange={(e) => handleMeasurementChange('x_diff_side', e.target.value)}
                                        />
                                        μm
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-1 py-0.5">Std.</td>
                                    <td className="border border-black px-1 py-0.5" colSpan={4}>≤ 2 μm</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-1 py-0.5">P-Type</td>
                                    <td className="border border-black px-1 py-0.5" colSpan={4}>≤ 1 μm</td>
                                </tr>
                            </tbody>
                        </table>

                        <div className="mt-1 text-[9px] space-y-1">
                            <div className="flex items-center gap-1">
                                <span>Dial gauge No.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none"
                                    value={measurements['dial_gauge_no_x'] || ''}
                                    onChange={(e) => handleMeasurementChange('dial_gauge_no_x', e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-1">
                                <span>Straight edge No.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none"
                                    value={measurements['straight_edge_no_x'] || ''}
                                    onChange={(e) => handleMeasurementChange('straight_edge_no_x', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Y Axis Table */}
                    <div className="flex-1">
                        <p className="font-bold text-center text-[10px] mb-1">Y Axis.</p>
                        <table className="border-collapse border border-black text-[9px] w-full">
                            <thead>
                                <tr>
                                    <th className="border border-black px-1 py-0.5" colSpan={2}></th>
                                    <th className="border border-black px-1 py-0.5">Top</th>
                                    <th className="border border-black px-1 py-0.5">Side</th>
                                </tr>
                                <tr>
                                    <th className="border border-black px-1 py-0.5 w-8">Step</th>
                                    <th className="border border-black px-1 py-0.5 w-10">Stork</th>
                                    <th className="border border-black px-1 py-0.5">Data</th>
                                    <th className="border border-black px-1 py-0.5">Data</th>
                                </tr>
                            </thead>
                            <tbody>
                                {yAxisData.map((row, idx) => (
                                    <tr key={idx}>
                                        <td className="border border-black px-1 py-0.5 text-center">{row.step}</td>
                                        <td className="border border-black px-1 py-0.5 text-center">{row.stork}</td>
                                        <td className="border border-black px-1 py-0.5">
                                            <input
                                                type="text"
                                                className="w-full bg-transparent outline-none text-center text-[9px]"
                                                value={measurements[`y_top_${row.step}`] || ''}
                                                onChange={(e) => handleMeasurementChange(`y_top_${row.step}`, e.target.value)}
                                            />
                                        </td>
                                        <td className="border border-black px-1 py-0.5">
                                            <input
                                                type="text"
                                                className="w-full bg-transparent outline-none text-center text-[9px]"
                                                value={measurements[`y_side_${row.step}`] || ''}
                                                onChange={(e) => handleMeasurementChange(`y_side_${row.step}`, e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Diff Max-Min */}
                        <table className="border-collapse border border-black text-[9px] w-full mt-1">
                            <tbody>
                                <tr>
                                    <td className="border border-black px-1 py-0.5">Diff Max-Min</td>
                                    <td className="border border-black px-1 py-0.5">Top =</td>
                                    <td className="border border-black px-1 py-0.5">
                                        <input
                                            type="text"
                                            className="w-8 bg-transparent outline-none text-center"
                                            value={measurements['y_diff_top'] || ''}
                                            onChange={(e) => handleMeasurementChange('y_diff_top', e.target.value)}
                                        />
                                        μm
                                    </td>
                                    <td className="border border-black px-1 py-0.5">Side =</td>
                                    <td className="border border-black px-1 py-0.5">
                                        <input
                                            type="text"
                                            className="w-8 bg-transparent outline-none text-center"
                                            value={measurements['y_diff_side'] || ''}
                                            onChange={(e) => handleMeasurementChange('y_diff_side', e.target.value)}
                                        />
                                        μm
                                    </td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-1 py-0.5">Std.</td>
                                    <td className="border border-black px-1 py-0.5" colSpan={4}>≤ 2 μm</td>
                                </tr>
                                <tr>
                                    <td className="border border-black px-1 py-0.5">P-Type</td>
                                    <td className="border border-black px-1 py-0.5" colSpan={4}>≤ 1 μm</td>
                                </tr>
                            </tbody>
                        </table>

                        {/* Checked By / Date */}
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
