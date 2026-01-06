import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page13 Component
 * - Data Shim V
 * - 15.5 STRAIGHTNESS U , V CHECK
 * - 15.6 Laser Pitch check of X,Y,U,V, Z axis
 */
function Page13() {
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
                page="13 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                {/* Data Shim V Section */}
                <div className="flex justify-between items-start mb-4 relative">
                    <div className="absolute top-0 left-0">
                        <div className="flex items-center gap-1 mb-8">
                            <span>Data Shim V</span>
                            <input
                                type="text"
                                className="border-b border-black w-16 text-center outline-none"
                                value={measurements['data_shim_v_top'] || ''}
                                onChange={(e) => handleMeasurementChange('data_shim_v_top', e.target.value)}
                            />
                            <span>mm.</span>
                        </div>
                        <div className="flex items-center gap-1 ml-20">
                            <input
                                type="text"
                                className="border-b border-black w-16 text-center outline-none"
                                value={measurements['data_shim_v_bottom'] || ''}
                                onChange={(e) => handleMeasurementChange('data_shim_v_bottom', e.target.value)}
                            />
                            <span>mm.</span>
                        </div>
                    </div>

                    <div className="w-full flex justify-center">
                        <div className="w-48 h-32 flex items-center justify-center">
                            <img
                                src="../public/images/page10-image3.jpg" // Placeholder
                                alt="Data Shim V Diagram"
                                className="max-w-full max-h-full"
                            />
                        </div>
                    </div>

                    <div className="absolute top-10 right-0">
                        <div className="flex items-center gap-2">
                            <span>Column no.</span>
                            <input
                                type="text"
                                className="border-b border-black w-24 outline-none"
                                value={measurements['column_no'] || ''}
                                onChange={(e) => handleMeasurementChange('column_no', e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* 15.5 STRAIGHTNESS U , V CHECK */}
                <div className="mb-4">
                    <h3 className="font-bold mb-2">15.5 STRAIGHTNESS U , V CHECK ( Std max ≤ 3 µm. )</h3>

                    <div className="flex gap-4">
                        {/* Left Side: U Check + Spacer */}
                        <div className="flex-1">
                            {/* Table U */}
                            <div className="mb-2">
                                <p className="mb-1 text-[10px] text-center">DATA STRAIGHTNESS U</p>
                                <table className="w-full border-collapse border border-black text-center text-[10px]">
                                    <tbody>
                                        <tr>
                                            <td className="border border-black bg-gray-100 w-10">Stroke (mm)</td>
                                            <td className="border border-black w-8">140</td>
                                            <td className="border border-black w-8">120</td>
                                            <td className="border border-black w-8">100</td>
                                            <td className="border border-black w-8">80</td>
                                            <td className="border border-black w-8">60</td>
                                            <td className="border border-black w-8">40</td>
                                            <td className="border border-black w-8">20</td>
                                            <td className="border border-black w-8">0</td>
                                        </tr>
                                        <tr>
                                            <td className="border border-black bg-gray-100">DATA</td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_140'] || ''} onChange={(e) => handleMeasurementChange('straight_u_140', e.target.value)} />
                                            </td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_120'] || ''} onChange={(e) => handleMeasurementChange('straight_u_120', e.target.value)} />
                                            </td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_100'] || ''} onChange={(e) => handleMeasurementChange('straight_u_100', e.target.value)} />
                                            </td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_80'] || ''} onChange={(e) => handleMeasurementChange('straight_u_80', e.target.value)} />
                                            </td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_60'] || ''} onChange={(e) => handleMeasurementChange('straight_u_60', e.target.value)} />
                                            </td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_40'] || ''} onChange={(e) => handleMeasurementChange('straight_u_40', e.target.value)} />
                                            </td>
                                            <td className="border border-black">
                                                <input type="text" className="w-full text-center outline-none bg-transparent" value={measurements['straight_u_20'] || ''} onChange={(e) => handleMeasurementChange('straight_u_20', e.target.value)} />
                                            </td>
                                            <td className="border border-black bg-gray-50">0</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className="mb-4">
                                <div className="flex items-center gap-2">
                                    <span>DIAL GAUGE NO.</span>
                                    <input
                                        type="text"
                                        className="border-b border-black w-24 outline-none"
                                        value={measurements['straight_dial_gauge'] || ''}
                                        onChange={(e) => handleMeasurementChange('straight_dial_gauge', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Data Spacer U */}
                            <div>
                                <p className="mb-2">Data spacer - u For slider</p>
                                <div className="relative w-48 h-32 mx-auto">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <img
                                            src="../public/images/page13-image2.jpg" // Placeholder
                                            alt="Data Spacer U"
                                            className="max-h-full max-w-full"
                                        />
                                    </div>
                                    {/* Inputs around image */}
                                    <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12 flex items-center">
                                        <input type="text" className="w-10 border-b border-black text-center text-[10px] bg-white bg-opacity-80" value={measurements['spacer_u_left'] || ''} onChange={(e) => handleMeasurementChange('spacer_u_left', e.target.value)} />
                                        <span className="text-[10px] ml-1">mm.</span>
                                    </div>
                                    <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12 flex items-center">
                                        <span className="text-[10px] mr-1">mm.</span>
                                        <input type="text" className="w-10 border-b border-black text-center text-[10px] bg-white bg-opacity-80" value={measurements['spacer_u_right'] || ''} onChange={(e) => handleMeasurementChange('spacer_u_right', e.target.value)} />
                                    </div>
                                    <div className="absolute bottom-0 left-0 -ml-8 mb-2 flex items-center">
                                        <input type="text" className="w-10 border-b border-black text-center text-[10px] bg-white bg-opacity-80" value={measurements['spacer_u_bottom_left'] || ''} onChange={(e) => handleMeasurementChange('spacer_u_bottom_left', e.target.value)} />
                                        <span className="text-[10px] ml-1">mm.</span>
                                    </div>
                                    <div className="absolute bottom-0 right-0 -mr-8 mb-2 flex items-center">
                                        <span className="text-[10px] mr-1">mm.</span>
                                        <input type="text" className="w-10 border-b border-black text-center text-[10px] bg-white bg-opacity-80" value={measurements['spacer_u_bottom_right'] || ''} onChange={(e) => handleMeasurementChange('spacer_u_bottom_right', e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: V Check Table */}
                        <div className="w-40">
                            <p className="mb-1 text-[10px] text-center">DATA STRAIGHTNESS V</p>
                            <table className="w-full border-collapse border border-black text-center text-[10px]">
                                <thead>
                                    <tr>
                                        <th className="border border-black bg-gray-100 p-1">Stroke (mm)</th>
                                        <th className="border border-black bg-gray-100 p-1">DATA</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="border border-black p-1">0</td>
                                        <td className="border border-black p-1 bg-gray-50">0</td>
                                    </tr>
                                    {[20, 40, 60, 80, 100, 120].map(val => (
                                        <tr key={val}>
                                            <td className="border border-black p-1">{val}</td>
                                            <td className="border border-black p-0">
                                                <input
                                                    type="text"
                                                    className="w-full h-full text-center outline-none bg-transparent"
                                                    value={measurements[`straight_v_${val}`] || ''}
                                                    onChange={(e) => handleMeasurementChange(`straight_v_${val}`, e.target.value)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="border border-black p-1">140</td>
                                        <td className="border border-black p-1 bg-gray-50">0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* 15.6 Laser Pitch check */}
                <div>
                    <h3 className="font-bold mb-1">15.6 Laser Pitch check of X,Y,U,V, Z axis (P-Type Only)</h3>
                    <p className="text-[10px] mb-2">* Model P-Type ให้เช็คแกน X,Y,U,V,Z และอ้างอิงค่า Position max , Backlash จาก Laser โดยไม่ต้องเช็ค Pitch master</p>

                    <div className="flex gap-4">
                        <div className="flex-1">
                            <table className="w-full border-collapse border border-black text-center text-[10px]">
                                <thead>
                                    <tr className="bg-gray-200">
                                        <th className="border border-black p-1">Axis</th>
                                        <th className="border border-black p-1">Position max<br />( µm. )</th>
                                        <th className="border border-black p-1">Backlash<br />( µm. )</th>
                                        <th className="border border-black p-1">Std. Backlash</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {['X', 'Y', 'U', 'V', 'Z'].map(axis => (
                                        <tr key={axis}>
                                            <td className="border border-black p-1 font-bold">{axis}</td>
                                            <td className="border border-black p-0">
                                                <input
                                                    type="text"
                                                    className="w-full h-full text-center outline-none bg-transparent"
                                                    value={measurements[`laser_${axis}_pos`] || ''}
                                                    onChange={(e) => handleMeasurementChange(`laser_${axis}_pos`, e.target.value)}
                                                />
                                            </td>
                                            <td className="border border-black p-0">
                                                <input
                                                    type="text"
                                                    className="w-full h-full text-center outline-none bg-transparent"
                                                    value={measurements[`laser_${axis}_backlash`] || ''}
                                                    onChange={(e) => handleMeasurementChange(`laser_${axis}_backlash`, e.target.value)}
                                                />
                                            </td>
                                            <td className="border border-black p-1">
                                                {axis === 'Z' ? '≤ 1 µm.' : '≤ 0.8 µm.'}
                                            </td>
                                        </tr>
                                    ))}
                                    <tr>
                                        <td className="border border-black p-1 text-left pl-2" colSpan={4}>Std. Position max ≤ 40 µm.</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-black p-1 text-left pl-2" colSpan={4}>
                                            <div className="flex items-center gap-2">
                                                <span>Laser No.</span>
                                                <input
                                                    type="text"
                                                    className="border-b border-black flex-1 outline-none"
                                                    value={measurements['laser_no'] || ''}
                                                    onChange={(e) => handleMeasurementChange('laser_no', e.target.value)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="flex-1 flex flex-col justify-between">
                            {/* Explanation Image Placeholder */}
                            <div className=" p-2 h-32 flex items-center justify-center mb-2 relative">
                                <p className="absolute top-0 left-0 text-[8px] p-1">*จุดสำหรับอ่านค่า Position max และ Backlash จาก กราฟของ Laser</p>
                                <img
                                    src="../public/images/page13-image3.jpg" // Placeholder
                                    alt="Laser Graph Explanation"
                                    className="max-h-full max-w-full"
                                />
                            </div>

                            <div className="border border-black p-2 bg-white mb-2">
                                <p className="text-[10px]">* ค่าที่แสดงจะมีหน่วยเป็น mm.</p>
                                <p className="text-[10px]">ให้แปลงหน่วยจาก mm. เป็น µm.</p>
                                <p className="text-[10px]">ตัวอย่าง 0.005 mm. = 5 µm.</p>
                            </div>

                            <div className="flex justify-end">
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
            </div>
        </A4Paper>
    );
}

export default Page13;
