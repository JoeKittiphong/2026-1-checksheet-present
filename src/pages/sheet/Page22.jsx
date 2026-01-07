import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page22 Component
 * 5. Check Option and Special Spec
 */
function Page22() {
    const [measurements, setMeasurements] = useState({});

    const handleCheckboxChange = (id) => {
        setMeasurements(prev => ({ ...prev, [id]: !prev[id] }));
    };

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
                page="22 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs h-[900px] flex flex-col justify-between">
                <div>
                    <div className="font-bold mb-4 text-sm">
                        5. ตรวจสอบ Option และ Special Spec ของเครื่องจักร ให้ <span className="inline-block border border-black w-4 h-4 text-center leading-3">✓</span> ลงใน <span className="inline-block border border-black w-4 h-4"></span> ในกรณีที่เครื่องจักรเป็น
                        เครื่องที่มี Option หรือ Special spec ในกรณีที่เป็นเครื่อง Standard ให้เขียน N/A
                    </div>

                    <div className="pl-8 flex flex-col gap-2">
                        {/* 1. P-Type */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                className="w-5 h-5 mt-0.5"
                                checked={measurements['p_type'] || false}
                                onChange={() => handleCheckboxChange('p_type')}
                            />
                            <span className="font-bold text-sm mt-0.5">1. P-Type</span>
                        </div>
                        <div className="pl-8 flex flex-col gap-1">
                            {['1.1 Special LM-Guide X,Y', '1.2 Manifold + Grease hose.', '1.3 Arm V special color. (สีกันความร้อน)', '1.4 Special work stand. (ชุบแข็ง)'].map((label, idx) => (
                                <div key={idx} className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4"
                                        checked={measurements[`p_type_sub_${idx + 1}`] || false}
                                        onChange={() => handleCheckboxChange(`p_type_sub_${idx + 1}`)}
                                    />
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>

                        {/* 2. Special color */}
                        <div className="mt-2 text-sm">
                            <div className="flex items-start gap-2 mb-2">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 mt-0.5"
                                    checked={measurements['special_color'] || false}
                                    onChange={() => handleCheckboxChange('special_color')}
                                />
                                <span className="font-bold mt-0.5">2. Special color</span>
                            </div>
                            <div className="pl-10 grid grid-cols-2 gap-x-8 gap-y-2 w-3/4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span>TS</span>
                                        <input
                                            className="border-b border-black w-full outline-none"
                                            value={measurements[`special_color_ts_${i}`] || ''}
                                            onChange={(e) => handleMeasurementChange(`special_color_ts_${i}`, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 3. Special Customer */}
                        <div className="mt-2 text-sm">
                            <div className="flex items-start gap-2 mb-2">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 mt-0.5"
                                    checked={measurements['special_customer'] || false}
                                    onChange={() => handleCheckboxChange('special_customer')}
                                />
                                <span className="font-bold mt-0.5">3. Special Customer</span>
                            </div>
                            <div className="pl-10 grid grid-cols-2 gap-x-8 gap-y-2 w-3/4">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span>TS</span>
                                        <input
                                            className="border-b border-black w-full outline-none"
                                            value={measurements[`special_customer_ts_${i}`] || ''}
                                            onChange={(e) => handleMeasurementChange(`special_customer_ts_${i}`, e.target.value)}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* 4. Option Hard W- Stand */}
                        <div className="mt-4 text-sm">
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    className="w-5 h-5 mt-0.5"
                                    checked={measurements['hard_w_stand'] || false}
                                    onChange={() => handleCheckboxChange('hard_w_stand')}
                                />
                                <span className="font-bold mt-0.5">4. Option Hard W- Stand ( Work stand ชุบแข็ง ) ให้สังเกตุบริเวณภายในรูของ Work stand ถ้าชุบแข็ง ภายในรูจะมีสีคล้ายสนิม</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 pl-4 text-sm">
                        * ให้ดูช่อง Option ในใบปะหน้าเครื่องไหนที่มี Option : Hard W - Stand ให้ประกอบ Work Stand ชุบแข็ง แต่ไม่มีรูระบายน้ำ
                    </div>

                    {/* Image/Diagram */}
                    <div className="mt-4 border border-gray-300 p-2 flex justify-center bg-gray-50 h-56">
                        <img
                            src="/images/page22-image1.png" // Placeholder
                            alt="Body Group Option Tag Diagram"
                            className="max-h-full max-w-full"
                        />
                    </div>
                </div>

                {/* Footer Signatures */}
                <div className="flex justify-end border border-black mt-4 h-30">
                    <div className="w-[40%]"></div> {/* Spacer */}

                    {/* Check by /Date Operator */}
                    <div className="w-30 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-0.5 font-bold text-[9px] bg-gray-100 leading-tight">
                            Check by /Date<br />Operator
                        </div>
                        <div className="flex-1 bg-yellow-300 flex flex-col">
                            <div className="flex-[7] border-b border-black border-dashed">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-xs"
                                    value={measurements['check_operator_name'] || ''}
                                    onChange={(e) => handleMeasurementChange('check_operator_name', e.target.value)}
                                />
                            </div>
                            <div className="flex-[3]">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-[9px]"
                                    placeholder="DD/MM/YY"
                                    value={measurements['check_operator_date'] || ''}
                                    onChange={(e) => handleMeasurementChange('check_operator_date', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Approved by /Date Leader */}
                    <div className="w-30 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-0.5 font-bold text-[9px] bg-gray-100 leading-tight">
                            Approved by /Date<br />Leader
                        </div>
                        <div className="flex-1 bg-yellow-300 flex flex-col">
                            <div className="flex-[7] border-b border-black border-dashed">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-xs"
                                    value={measurements['approved_leader_name'] || ''}
                                    onChange={(e) => handleMeasurementChange('approved_leader_name', e.target.value)}
                                />
                            </div>
                            <div className="flex-[3]">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-[9px]"
                                    placeholder="DD/MM/YY"
                                    value={measurements['approved_leader_date'] || ''}
                                    onChange={(e) => handleMeasurementChange('approved_leader_date', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Approved by /Date Ass't chief Up */}
                    <div className="w-30 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-0.5 font-bold text-[9px] bg-gray-100 leading-tight">
                            Approved by /Date<br />Ass't chief Up
                        </div>
                        <div className="flex-1 bg-yellow-300 flex flex-col">
                            <div className="flex-[7] border-b border-black border-dashed">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-xs"
                                    value={measurements['approved_chief_name'] || ''}
                                    onChange={(e) => handleMeasurementChange('approved_chief_name', e.target.value)}
                                />
                            </div>
                            <div className="flex-[3]">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-[9px]"
                                    placeholder="DD/MM/YY"
                                    value={measurements['approved_chief_date'] || ''}
                                    onChange={(e) => handleMeasurementChange('approved_chief_date', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page22;
