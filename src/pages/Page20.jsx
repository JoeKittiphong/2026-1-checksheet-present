import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page20 Component
 * 22. Checking air hose position at BRAKE
 * 23. Checking parallelism of Seal frame
 * 23.1 Checking parallelism of Bake plate support
 */
function Page20() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (id) => {
        setMeasurements(prev => ({ ...prev, [id]: !prev[id] }));
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
                page="20 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                {/* 22. Check Air Hose Position */}
                <div className="mb-6">
                    <div className="font-bold mb-2 text-sm">
                        22.ตรวจสอบตำแหน่งของสายลมบริเวณ BRAKE ของแกน X,Y,U,V ให้ทำเครื่องหมาย <span className="inline-block border border-black w-4 h-4 text-center leading-3">✓</span> เมื่อตรวจสอบแล้วพบว่าถูกต้องสมบูรณ์
                    </div>

                    <div className="relative w-full h-[350px] border border-gray-300 bg-gray-50 mb-2">
                        <img
                            src="../public/images/page20-image1.jpg"
                            alt="Brake Air Hose Check Diagram"
                            className="w-full h-full object-contain opacity-70"
                        />

                        {/* Checkboxes Overlay */}

                        {/* V Axis (Top Left) */}
                        <div className="absolute top-[25%] left-[10%] flex flex-col items-center">
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6"
                                    checked={measurements['brake_check_v'] || false}
                                    onChange={() => handleCheckboxChange('brake_check_v')}
                                />
                            </label>
                            <span className="font-bold bg-white px-1">V Axis</span>
                        </div>

                        {/* U Axis (Top Right) */}
                        <div className="absolute top-[25%] right-[10%] flex flex-col items-center">
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6"
                                    checked={measurements['brake_check_u'] || false}
                                    onChange={() => handleCheckboxChange('brake_check_u')}
                                />
                            </label>
                            <span className="font-bold bg-white px-1">U Axis</span>
                        </div>

                        {/* Y Axis (Bottom Left) */}
                        <div className="absolute bottom-[20%] left-[15%] flex flex-col items-center">
                            <span className="font-bold bg-white px-1 mb-1">Y Axis</span>
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6"
                                    checked={measurements['brake_check_y'] || false}
                                    onChange={() => handleCheckboxChange('brake_check_y')}
                                />
                            </label>
                        </div>

                        {/* X Axis (Bottom Right) */}
                        <div className="absolute bottom-[20%] right-[15%] flex flex-col items-center">
                            <span className="font-bold bg-white px-1 mb-1">X Axis</span>
                            <label className="cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-6 h-6"
                                    checked={measurements['brake_check_x'] || false}
                                    onChange={() => handleCheckboxChange('brake_check_x')}
                                />
                            </label>
                        </div>
                    </div>
                </div>

                {/* 23. Check Parallelism Seal frame */}
                <div className="mb-8">
                    <div className="font-bold mb-4 text-sm">23.ตรวจสอบความขนานของ Seal frame ก่อนทำการ Lock Process tank.</div>

                    {/* Measurement Boxes */}
                    <div className="flex gap-12 justify-center mb-4 relative z-10">
                        {/* Box 1 */}
                        <div className="border border-black p-2 text-center w-40 bg-white">
                            <div className="mb-2">Std. Max 20 µm.</div>
                            <div className="flex items-center justify-center gap-1">
                                <span>=</span>
                                <input
                                    className="border-b border-black w-16 text-center outline-none"
                                    value={measurements['seal_frame_20'] || ''}
                                    onChange={(e) => handleMeasurementChange('seal_frame_20', e.target.value)}
                                />
                                <span>µm.</span>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="border border-black p-2 text-center w-40 bg-white">
                            <div className="mb-2">Std. Max 500 µm.</div>
                            <div className="flex items-center justify-center gap-1">
                                <span>=</span>
                                <input
                                    className="border-b border-black w-16 text-center outline-none"
                                    value={measurements['seal_frame_500'] || ''}
                                    onChange={(e) => handleMeasurementChange('seal_frame_500', e.target.value)}
                                />
                                <span>µm.</span>
                            </div>
                        </div>
                    </div>

                    {/* Diagram Seal Frame */}
                    <div className="w-full h-32 border border-gray-300 bg-gray-50 flex items-center justify-center mt-[-20px] pt-6">
                        <img
                            src="../public/images/page20-image2.jpg"
                            alt="Seal Frame Diagram"
                            className="max-h-full max-w-full"
                        />
                    </div>
                </div>

                {/* 23.1 Check Parallelism Bake plate support */}
                <div className="flex gap-4 items-end">
                    {/* Image Left */}
                    <div className="w-[45%] h-48 border border-gray-300 bg-gray-50 flex items-center justify-center">
                        <img
                            src="../public/images/page20-image3.jpg"
                            alt="Bake Plate Support Diagram"
                            className="max-h-full max-w-full"
                        />
                    </div>

                    {/* Inputs Right */}
                    <div className="flex-1 flex flex-col justify-between h-48">
                        <div>
                            <div className="font-bold mb-6 text-sm">23.1 ตรวจสอบความขนานของ Bake plate support ( Std. Max ≤ 5 µm. )</div>
                            <div className="flex flex-col gap-4 pl-8">
                                <div className="flex items-center gap-2">
                                    <span className="w-12">Side =</span>
                                    <input
                                        className="border-b border-black w-32 outline-none text-center"
                                        value={measurements['bake_plate_side'] || ''}
                                        onChange={(e) => handleMeasurementChange('bake_plate_side', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="w-12">Front =</span>
                                    <input
                                        className="border-b border-black w-32 outline-none text-center"
                                        value={measurements['bake_plate_front'] || ''}
                                        onChange={(e) => handleMeasurementChange('bake_plate_front', e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex justify-end mt-4">
                            <CheckedByDate
                                title="CHECK BY / DATE"
                                width="w-48"
                                height="h-16"
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

export default Page20;
