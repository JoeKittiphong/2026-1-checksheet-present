import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import AxisDiagram from '../components/AxisDiagram';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page12 Component
 * Section 15.3: CHECK ความขนาน U, V กับ CERAMIC
 * Section 15.4: CHECK SQUARE แกน U, V
 */
function Page12() {
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
                page="12 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                {/* 15.3 CHECK U, V Parallelism */}
                <div className="mb-6">
                    <h3 className="font-bold mb-2 text-[10px]">
                        15.3 CHECK ความขนาน U, V กับ CERAMIC แกน X, Y อยู่ CENTER เลื่อน V ลบสุด แกน U อยู่ CENTER CHECK
                        ค่าไม่เกิน 20 µm ทำการ CHECK U คล้ายกับ V
                    </h3>

                    <div className="flex gap-4 items-start">
                        <div className="w-40 h-32  flex items-center justify-center bg-gray-50">
                            <img
                                src="/images/page12-image1.jpg"
                                alt="Diagram 15.3 Placeholder"
                                className="max-w-full "
                            />
                        </div>

                        <div className="flex-1 grid grid-cols-2 gap-y-4 gap-x-8 max-w-md">
                            <div className="flex items-center gap-2">
                                <span>V+ =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 outline-none text-center"
                                    value={measurements['v_plus_1'] || ''}
                                    onChange={(e) => handleMeasurementChange('v_plus_1', e.target.value)}
                                />
                                <span>µm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>V+ =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 outline-none text-center"
                                    value={measurements['v_plus_2'] || ''}
                                    onChange={(e) => handleMeasurementChange('v_plus_2', e.target.value)}
                                />
                                <span>µm</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span>U- = ⌀</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 outline-none text-center"
                                    value={measurements['u_minus'] || ''}
                                    onChange={(e) => handleMeasurementChange('u_minus', e.target.value)}
                                />
                                <span>µm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>U+ =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 outline-none text-center"
                                    value={measurements['u_plus'] || ''}
                                    onChange={(e) => handleMeasurementChange('u_plus', e.target.value)}
                                />
                                <span>µm</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span>V- =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 outline-none text-center"
                                    value={measurements['v_minus_1'] || ''}
                                    onChange={(e) => handleMeasurementChange('v_minus_1', e.target.value)}
                                />
                                <span>µm</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>V- =</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 outline-none text-center"
                                    value={measurements['v_minus_2'] || ''}
                                    onChange={(e) => handleMeasurementChange('v_minus_2', e.target.value)}
                                />
                                <span>µm</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 15.4 CHECK SQUARE U, V */}
                <div className="mb-4">
                    <h3 className="font-bold mb-2">15.4 CHECK SQUARE แกน U, V</h3>

                    <div className="flex gap-4 mb-4">
                        <div className="w-40 h-40 flex items-center justify-center bg-gray-50 shrink-0">
                            <img
                                src="/images/page12-image2.jpg"
                                alt="Diagram 15.4 Placeholder"
                                className="max-w-full"
                            />
                        </div>

                        <div className="text-[10px] space-y-1">
                            <p>- แกน X, Y, U อยู่ CENTER จับ DIAL ที่ชุดกลาง ของ UPPER GUIDE</p>
                            <p className="pl-2">เคาะ แกน X เท่ากับ ศูนย์</p>
                            <p>- CHECK แกน U อ้างอิงแกน X แตกต่างไม่เกิน 5 µm</p>
                            <p>- CHECK แกน V อ้างอิงแกน Y แตกต่างไม่เกิน 5 µm</p>
                            <p>- UV ระยะ STROKE 150 mm</p>
                            <p>- แกน Z อยู่ตำแหน่ง 60 mm</p>
                            <p className="mt-2 font-bold">SQUARE U V</p>
                        </div>
                    </div>

                    <div className="flex justify-around items-start mb-8">
                        {/* Graph 1: Ref X - Y Square */}
                        <div className="flex flex-col items-center">
                            <AxisDiagram
                                type="TR"
                                labels={[
                                    { x: 10, y: 10, text: 'U' },
                                    { x: 10, y: 16, text: '-' },
                                    { x: 10, y: 22, text: '+' },

                                    { x: 95, y: 10, text: '0', className: "text-[10px]" },

                                    { x: 95, y: 95, text: 'V' },
                                    { x: 88, y: 95, text: '+' },
                                    { x: 102, y: 95, text: '-' }
                                ]}
                            />
                            <p className="mt-2 font-bold">Ref X - Y Square</p>
                        </div>

                        {/* Graph 2: SETTING U -> 0 - 0 */}
                        <div className="flex flex-col items-center">
                            <AxisDiagram
                                type="TR"
                                labels={[
                                    { x: 10, y: 10, text: 'U' },
                                    { x: 10, y: 16, text: '-' },
                                    { x: 10, y: 22, text: '+' },

                                    { x: 95, y: 10, text: '0', className: "text-[10px]" },

                                    { x: 95, y: 95, text: 'V' },
                                    { x: 88, y: 95, text: '+' },
                                    { x: 102, y: 95, text: '-' }
                                ]}
                            />
                            <p className="mt-2 font-bold">SETTING U -&gt; 0 - 0</p>
                        </div>
                    </div>

                    <p className="mb-4 text-[10px]">- ค่าความตรง แกน U ไม่เกิน 3 µm ( STRAIGHT )</p>

                    <div className="flex justify-between items-end mt-8">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span>DIAL GAUGE NO.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-40 outline-none"
                                    value={measurements['dial_gauge_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('dial_gauge_no', e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>SQUARE NO.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-40 outline-none"
                                    value={measurements['square_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('square_no', e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="w-48">
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

export default Page12;
