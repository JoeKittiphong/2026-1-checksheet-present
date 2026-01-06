import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';
import SectionTitle from '../components/SectionTitle';
import LabeledInput from '../components/LabeledInput';
import DiagramImage from '../components/DiagramImage';
import MeasurementInputRow from '../components/MeasurementInputRow';
import CheckboxWithLabel from '../components/CheckboxWithLabel';

/**
 * Page6 Component
 * หน้าที่ 6: 6. DISTANCE OF LINEAR MOTOR Y & MAGNET PLATE Y
 *           7. MAGNET CHECK OF X,Y AXIS
 */
function Page6() {
    const [measurements, setMeasurements] = useState({});
    const [approvals, setApprovals] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (id, checked) => {
        setMeasurements(prev => ({ ...prev, [id]: checked }));
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
                page="6 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section 6 Title */}
                <SectionTitle level={1}>6.DISTANCE OF LINEAR MOTOR Y &amp; MAGNET PLATE Y</SectionTitle>

                {/* Spacer measurements */}
                <div className="flex gap-8 mb-2">
                    <div className="flex-1">
                        <LabeledInput
                            label="ความหนาของ spacer Y ="
                            value={measurements['spacer_y'] || ''}
                            onChange={(e) => handleMeasurementChange('spacer_y', e.target.value)}
                            width="w-16"
                            unit="mm"
                            inputClassName="text-center"
                            className="mb-1"
                        />
                        <LabeledInput
                            label="ความหนาของ spacer ="
                            value={measurements['spacer'] || ''}
                            onChange={(e) => handleMeasurementChange('spacer', e.target.value)}
                            width="w-16"
                            unit="mm"
                            inputClassName="text-center"
                        />
                    </div>
                    {/* Linear coil diagram */}
                    <DiagramImage
                        src="/images/page6-image1.jpg"
                        alt="Linear coil"
                        imgClassName="w-[200px] h-auto"
                        height="h-auto"
                        containerClassName="flex-1"
                    />
                </div>

                {/* Section 7 Title */}
                <SectionTitle level={1}>7. MAGNET CHECK OF X,Y AXIS.</SectionTitle>

                {/* 7.1 */}
                <div className="mb-2">
                    <SectionTitle level={2}>7.1 CHECK POSITION OF MAGNET PLATE OF X,Y AXIS. ( เช็คทิศทางการประกอบ Magnet plate )</SectionTitle>
                    <p className="text-[10px] mt-1">* กำหนดให้ทิศทางการประกอบ Magnet plate ต้องดันไปด้านที่มีจุดมาร์ค หรือ ทิศทางเดียวกันกับหางไฟของ Linear coil</p>
                </div>

                {/* Push diagram */}
                <DiagramImage
                    src="/images/page6-image2.jpg"
                    alt="Push direction"
                    imgClassName="w-[480px] h-auto"
                    height="h-auto"
                    containerClassName="mb-2"
                />

                <p className="text-[10px] mb-2">เมื่อทำการดัน Magnet plate ไปยังด้านที่มีจุดมาร์ค ทิศทางเดียวกันกับหางไฟของ Linear coil แล้ว ✓ ลงไป ☐ ให้นิยมร้อย</p>

                {/* Magnet check table - Custom table with images */}
                <table className="border-collapse border border-black text-xs mb-4">
                    <thead>
                        <tr>
                            <th className="border border-black px-2 py-1 w-12">Axis</th>
                            <th className="border border-black px-2 py-1 w-8"></th>
                            <th className="border border-black px-2 py-1 w-40">Detail</th>
                            <th className="border border-black px-2 py-1" colSpan={2}>Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Row Y */}
                        <tr>
                            <td className="border border-black px-2 py-2 text-center align-middle" rowSpan={1}>Y</td>
                            <td className="border border-black px-2 py-2 text-center align-middle">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={measurements['magnet_y_check'] || false}
                                    onChange={(e) => handleCheckboxChange('magnet_y_check', e.target.checked)}
                                />
                            </td>
                            <td className="border border-black px-2 py-2 text-left align-middle text-[10px]">
                                ทำการดันMagnet plate ไปยัง<br />ด้านที่มีจุดมาร์คแล้ว
                            </td>
                            <td className="border border-black p-1 text-center">
                                <img
                                    src="/images/page6-image3.jpg"
                                    alt="Push Y"
                                    className="w-16 h-auto mx-auto"
                                />
                            </td>
                            <td className="border border-black p-1 text-center">
                                <div className="text-[10px] mb-1">Y Axis</div>
                                <img
                                    src="/images/page6-image5.jpg"
                                    alt="Y Axis"
                                    className="w-20 h-auto mx-auto"
                                />
                            </td>
                        </tr>
                        {/* Row X */}
                        <tr>
                            <td className="border border-black px-2 py-2 text-center align-middle" rowSpan={1}>X</td>
                            <td className="border border-black px-2 py-2 text-center align-middle">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4"
                                    checked={measurements['magnet_x_check'] || false}
                                    onChange={(e) => handleCheckboxChange('magnet_x_check', e.target.checked)}
                                />
                            </td>
                            <td className="border border-black px-2 py-2 text-left align-middle text-[10px]">
                                ทำการดันMagnet plate ไปยัง<br />ด้านที่มีจุดมาร์คแล้ว
                            </td>
                            <td className="border border-black p-1 text-center">
                                <img
                                    src="/images/page6-image4.jpg"
                                    alt="Push X"
                                    className="w-16 h-auto mx-auto"
                                />
                            </td>
                            <td className="border border-black p-1 text-center">
                                <div className="text-[10px] mb-1">X Axis</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* 7.2 */}
                <div className="mb-2">
                    <SectionTitle level={2}>7.2 CHECK THE GAP BETWEEN " COIL OF LINEAR COIL AND MAGNET " IS WHITHIN</SectionTitle>
                    <p className="text-[10px]">(เช็คระยะห่างระหว่าง Magnet Plate กับ Linear coil )</p>
                </div>

                {/* Gap measurements */}
                <div className="flex gap-4 mb-4">
                    {/* Left: Diagram */}
                    <DiagramImage
                        src="/images/page6-image6.jpg"
                        alt="Gap measurement diagram"
                        imgClassName="w-[200px] h-auto"
                        height="h-auto"
                        containerClassName="flex-shrink-0"
                    />

                    {/* Right: Measurements table */}
                    <div className="flex-1">
                        <table className="border-collapse text-xs">
                            <thead>
                                <tr>
                                    <th className="border border-black px-2 py-1"></th>
                                    <th className="border border-black px-2 py-1">Std.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <MeasurementInputRow
                                    label="ระยะห่าง magnet กับ coil แกน X"
                                    id="gap_x"
                                    unit="mm"
                                    standard="0.6 - 0.8"
                                    value={measurements['gap_x'] || ''}
                                    onChange={(e) => handleMeasurementChange('gap_x', e.target.value)}
                                />
                                <MeasurementInputRow
                                    label="ระยะห่าง magnet กับ coil แกน Y"
                                    id="gap_y"
                                    unit="mm"
                                    standard="0.6 - 0.8"
                                    value={measurements['gap_y'] || ''}
                                    onChange={(e) => handleMeasurementChange('gap_y', e.target.value)}
                                />
                                <MeasurementInputRow
                                    label="ระยะห่าง magnet กับ coil แกน U"
                                    id="gap_u"
                                    unit="mm"
                                    standard="0.4 - 0.6"
                                    value={measurements['gap_u'] || ''}
                                    onChange={(e) => handleMeasurementChange('gap_u', e.target.value)}
                                />
                                <MeasurementInputRow
                                    label="ระยะห่าง magnet กับ coil แกน V"
                                    id="gap_v"
                                    unit="mm"
                                    standard="0.6 - 0.8"
                                    value={measurements['gap_v'] || ''}
                                    onChange={(e) => handleMeasurementChange('gap_v', e.target.value)}
                                />
                            </tbody>
                        </table>
                    </div>

                    {/* Checked By / Date */}
                    <div>
                        <CheckedByDate
                            name={measurements['checked_by_name'] || ''}
                            date={measurements['checked_by_date'] || ''}
                            onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                            onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                        />
                    </div>
                </div>

                {/* Bottom notes */}
                <div className="text-[10px] mt-2">
                    <p>การ CHECK ค่า DATA X,Y การ CHECK อย่างน้อย 3 จุด แล้วนำค่าสูด</p>
                    <p>มาบันทึก ค่าแตกต่างระหว่างจุดไม่เกิน 0.15 mm</p>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page6;
