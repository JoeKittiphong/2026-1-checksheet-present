import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';
import SectionTitle from '../../components/SectionTitle';
import LabeledInput from '../../components/LabeledInput';
import DiagramImage from '../../components/DiagramImage';
import MeasurementInputRow from '../../components/MeasurementInputRow';

/**
 * Page6 Component
 * หน้าที่ 6: 6. DISTANCE OF LINEAR MOTOR Y & MAGNET PLATE Y
 *           7. MAGNET CHECK OF X,Y AXIS
 */
function Page6() {
    const [measurements, setMeasurements] = useState({});

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

            <div className="p-1 text-[10px]">
                {/* Section 6 Title */}
                <div className="font-bold text-xs mb-1">6.DISTANCE OF LINEAR MOTOR Y &amp; MAGNET PLATE Y</div>

                {/* Spacer measurements */}
                <div className="flex gap-2 mb-1">
                    <div className="flex-1">
                        <LabeledInput
                            label="ความหนาของ spacer Y ="
                            value={measurements['spacer_y'] || ''}
                            onChange={(e) => handleMeasurementChange('spacer_y', e.target.value)}
                            width="w-12"
                            unit="mm"
                            inputClassName="text-center text-[10px]"
                        />
                        <LabeledInput
                            label="ความหนาของ spacer V ="
                            value={measurements['spacer'] || ''}
                            onChange={(e) => handleMeasurementChange('spacer', e.target.value)}
                            width="w-12"
                            unit="mm"
                            inputClassName="text-center text-[10px]"
                        />
                    </div>
                    <img src="/images/page6-image1.jpg" alt="Linear coil" className="w-[120px] h-auto" />
                </div>

                {/* Section 7 Title */}
                <div className="font-bold text-xs mb-1">7. MAGNET CHECK OF X,Y AXIS.</div>

                {/* 7.1 */}
                <div className="mb-1">
                    <div className="font-bold text-[10px]">7.1 CHECK POSITION OF MAGNET PLATE OF X,Y AXIS.</div>
                    <p className="text-[9px]">* กำหนดให้ทิศทางการประกอบ Magnet plate ต้องดันไปด้านที่มีจุดมาร์ค</p>
                </div>

                {/* Push diagram */}
                <img src="/images/page6-image2.jpg" alt="Push direction" className="w-[350px] h-auto mb-1" />

                <p className="text-[9px] mb-1">เมื่อทำการดัน Magnet plate ไปยังด้านที่มีจุดมาร์ค ทิศทางเดียวกันกับหางไฟของ Linear coil แล้ว ✓ ลงไป ☐</p>

                {/* Magnet check table - Compact */}
                <table className="border-collapse border border-black text-[9px] mb-1 w-full">
                    <thead>
                        <tr>
                            <th className="border border-black px-1 py-0.5 w-8">Axis</th>
                            <th className="border border-black px-1 py-0.5 w-6"></th>
                            <th className="border border-black px-1 py-0.5">Detail</th>
                            <th className="border border-black px-1 py-0.5" colSpan={2}>Pic</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border border-black px-1 py-0.5 text-center">Y</td>
                            <td className="border border-black px-1 py-0.5 text-center">
                                <input type="checkbox" className="w-3 h-3" checked={measurements['magnet_y_check'] || false} onChange={(e) => handleCheckboxChange('magnet_y_check', e.target.checked)} />
                            </td>
                            <td className="border border-black px-1 py-0.5 text-[9px]">ทำการดันMagnet plate ไปยังด้านที่มีจุดมาร์คแล้ว</td>
                            <td className="border border-black p-0.5 text-center">
                                <img src="/images/page6-image3.jpg" alt="Push Y" className="w-10 h-auto mx-auto" />
                            </td>
                            <td className="border border-black p-0.5 text-center">
                                <div className="text-[8px]">Y Axis</div>
                                <img src="/images/page6-image5.jpg" alt="Y Axis" className="w-12 h-auto mx-auto" />
                            </td>
                        </tr>
                        <tr>
                            <td className="border border-black px-1 py-0.5 text-center">X</td>
                            <td className="border border-black px-1 py-0.5 text-center">
                                <input type="checkbox" className="w-3 h-3" checked={measurements['magnet_x_check'] || false} onChange={(e) => handleCheckboxChange('magnet_x_check', e.target.checked)} />
                            </td>
                            <td className="border border-black px-1 py-0.5 text-[9px]">ทำการดันMagnet plate ไปยังด้านที่มีจุดมาร์คแล้ว</td>
                            <td className="border border-black p-0.5 text-center">
                                <img src="/images/page6-image4.jpg" alt="Push X" className="w-10 h-auto mx-auto" />
                            </td>
                            <td className="border border-black p-0.5 text-center">
                                <div className="text-[8px]">X Axis</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                {/* 7.2 */}
                <div className="mb-1">
                    <div className="font-bold text-[10px]">7.2 CHECK THE GAP BETWEEN "COIL OF LINEAR COIL AND MAGNET"</div>
                    <p className="text-[9px]">(เช็คระยะห่างระหว่าง Magnet Plate กับ Linear coil)</p>
                </div>

                {/* Gap measurements */}
                <div className="flex gap-2 mb-1">
                    <img src="/images/page6-image6.jpg" alt="Gap measurement" className="w-[120px] h-auto" />

                    <div className="flex-1">
                        <table className="border-collapse text-[9px] w-full">
                            <thead>
                                <tr>
                                    <th className="border border-black px-1 py-0.5"></th>
                                    <th className="border border-black px-1 py-0.5 w-16">Std.</th>
                                </tr>
                            </thead>
                            <tbody>
                                <MeasurementInputRow label="ระยะห่าง magnet กับ coil แกน X" id="gap_x" unit="mm" standard="0.6 - 0.8" min={0.6} max={0.8} value={measurements['gap_x'] || ''} onChange={(e) => handleMeasurementChange('gap_x', e.target.value)} />
                                <MeasurementInputRow label="ระยะห่าง magnet กับ coil แกน Y" id="gap_y" unit="mm" standard="0.6 - 0.8" min={0.6} max={0.8} value={measurements['gap_y'] || ''} onChange={(e) => handleMeasurementChange('gap_y', e.target.value)} />
                                <MeasurementInputRow label="ระยะห่าง magnet กับ coil แกน U" id="gap_u" unit="mm" standard="0.4 - 0.6" min={0.4} max={0.6} value={measurements['gap_u'] || ''} onChange={(e) => handleMeasurementChange('gap_u', e.target.value)} />
                                <MeasurementInputRow label="ระยะห่าง magnet กับ coil แกน V" id="gap_v" unit="mm" standard="0.6 - 0.8" min={0.6} max={0.8} value={measurements['gap_v'] || ''} onChange={(e) => handleMeasurementChange('gap_v', e.target.value)} />
                            </tbody>
                        </table>
                    </div>

                    <CheckedByDate width="w-[150px] h-[95px]"
                        name={measurements['checked_by_name'] || ''}
                        date={measurements['checked_by_date'] || ''}
                        onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                        onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                    />
                </div>

                {/* Bottom notes */}
                <div className="text-[9px]">
                    <p>การ CHECK ค่า DATA X,Y การ CHECK อย่างน้อย 3 จุด แล้วนำค่าสูดมาบันทึก ค่าแตกต่างระหว่างจุดไม่เกิน 0.15 mm</p>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page6;
