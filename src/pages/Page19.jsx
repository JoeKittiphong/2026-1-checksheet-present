import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page19 Component
 * 21.SPECIFICATION CHECK LIST
 */
function Page19() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (id) => {
        setMeasurements(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const renderRows = (axis, rowCount, prefix) => {
        return Array.from({ length: rowCount }).map((_, index) => (
            <tr key={`${prefix}_${axis}_${index}`} className="h-6">
                {index === 0 && (
                    <td rowSpan={rowCount} className="border border-black text-center align-middle font-bold">
                        {axis}
                    </td>
                )}
                <td className="border border-black text-center align-middle p-0">
                    <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={measurements[`${prefix}_${axis}_check_${index}`] || false}
                        onChange={() => handleCheckboxChange(`${prefix}_${axis}_check_${index}`)}
                    />
                </td>
                <td className="border border-black px-2">
                    {/* Only the first row of the section usually has the Component Name in standard tables, 
                        but here it seems empty for inputs or just lines. 
                        The header says "MAGNET PLATE", rows are empty for S/N recording?
                        Wait, S/N column is separate.
                        Column 3 is "MAGNET PLATE" in header, but blank in rows?
                        Actually, looking at the image, Column 3 is seemingly for Description or just empty lines for notes?
                        Or maybe "MAGNET PLATE" is just the header for that column group.
                        The image shows lines. Let's make them input fields.
                    */}
                    <input
                        type="text"
                        className="w-full h-full border-none outline-none bg-transparent"
                        value={measurements[`${prefix}_${axis}_desc_${index}`] || ''}
                        onChange={(e) => handleMeasurementChange(`${prefix}_${axis}_desc_${index}`, e.target.value)}
                    />
                </td>
                <td className="border border-black px-2">
                    <input
                        type="text"
                        className="w-full h-full border-none outline-none bg-transparent"
                        value={measurements[`${prefix}_${axis}_sn_${index}`] || ''}
                        onChange={(e) => handleMeasurementChange(`${prefix}_${axis}_sn_${index}`, e.target.value)}
                    />
                </td>
            </tr>
        ));
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
                page="19 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                <div className="mb-2">
                    <h3 className="font-bold text-sm">21.SPECIFICATION CHECK LIST ( บันทึก S/N ของ PART แต่ละชิ้น )</h3>
                    <p className="font-bold text-[10px] pl-4">#MAGNET PLATE #LINEAR COIL #LINEAR SCALE #LM GUIDE</p>
                </div>

                <div className="border border-black mb-4">
                    <table className="w-full border-collapse">
                        {/* Table Header Columns Width Configuration */}
                        <colgroup>
                            <col className="w-12" /> {/* AXIS */}
                            <col className="w-8" />  {/* Check */}
                            <col className="w-1/2" /> {/* Name/Desc */}
                            <col className="w-1/2" /> {/* S/N */}
                        </colgroup>

                        {/* SECTION 1: MAGNET PLATE */}
                        <thead>
                            <tr className="bg-gray-100 font-bold text-center h-8">
                                <th className="border border-black">AXIS</th>
                                <th className="border border-black">☑</th>
                                <th className="border border-black">MAGNET PLATE</th>
                                <th className="border border-black">S/N</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows('X', 5, 'mag')}
                            {renderRows('Y', 3, 'mag')}
                        </tbody>

                        {/* SECTION 2: LINEAR COIL */}
                        <thead>
                            <tr className="bg-gray-100 font-bold text-center h-8">
                                <th className="border border-black">AXIS</th>
                                <th className="border border-black">☑</th>
                                <th className="border border-black">LINEAR COIL</th>
                                <th className="border border-black">S/N</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows('X', 2, 'coil')}
                            {renderRows('Y', 2, 'coil')}
                            {renderRows('V', 2, 'coil')}
                        </tbody>

                        {/* SECTION 3: LINEAR SCALE */}
                        <thead>
                            <tr className="bg-gray-100 font-bold text-center h-8">
                                <th className="border border-black">AXIS</th>
                                <th className="border border-black">☑</th>
                                <th className="border border-black">LINEAR SCALE</th>
                                <th className="border border-black">S/N</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderRows('X', 2, 'scale')}
                            {renderRows('Y', 3, 'scale')}
                            {renderRows('V', 2, 'scale')}
                        </tbody>

                        {/* SECTION 4: LM GUIDE */}
                        <thead>
                            <tr className="bg-gray-100 font-bold text-center h-8">
                                <th className="border border-black">AXIS</th>
                                <th colSpan={3} className="border border-black">S/N OF LM GUIDE</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="h-6">
                                <td className="border border-black text-center align-middle font-bold">X</td>
                                <td colSpan={3} className="border border-black px-2">
                                    <input
                                        type="text"
                                        className="w-full h-full border-none outline-none bg-transparent"
                                        value={measurements['lm_guide_x'] || ''}
                                        onChange={(e) => handleMeasurementChange('lm_guide_x', e.target.value)}
                                    />
                                </td>
                            </tr>
                            <tr className="h-6">
                                <td className="border border-black text-center align-middle font-bold">Y</td>
                                <td colSpan={3} className="border border-black px-2">
                                    <input
                                        type="text"
                                        className="w-full h-full border-none outline-none bg-transparent"
                                        value={measurements['lm_guide_y'] || ''}
                                        onChange={(e) => handleMeasurementChange('lm_guide_y', e.target.value)}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Footer Section */}
                <div className="flex border border-black h-20">
                    <div className="flex-1 p-2 text-[10px]">
                        <p>**ถ้ามีการเปลี่ยนแปลง ITEM NO.หรือข้อมูลอื่นๆ ของ PART</p>
                        <p className="pl-2">ให้กรอกข้อมูลของ PART ใหม่ลงในบรรทัดที่ว่างแทน</p>
                    </div>
                    <div className="w-32 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-0.5 font-bold text-[10px] bg-gray-100">
                            CHECK BY / DATE
                        </div>
                        <div className="flex-1 bg-yellow-300 flex flex-col">
                            <div className="flex-[7] border-b border-black border-dashed">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-xs"
                                    value={measurements['checked_by_name'] || ''}
                                    onChange={(e) => handleMeasurementChange('checked_by_name', e.target.value)}
                                />
                            </div>
                            <div className="flex-[3]">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-[10px]"
                                    placeholder="DD/MM/YY"
                                    value={measurements['checked_by_date'] || ''}
                                    onChange={(e) => handleMeasurementChange('checked_by_date', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </A4Paper>
    );
}

export default Page19;
