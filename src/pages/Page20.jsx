import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';
import SectionTitle from '../components/SectionTitle';
import DiagramImage from '../components/DiagramImage';
import StdMeasurementBox from '../components/StdMeasurementBox';
import LabeledInput from '../components/LabeledInput';

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

                    <div className="relative w-full h-[320px] border border-gray-300 bg-gray-50 mb-2">
                        <img
                            src="/images/page20-image1.jpg"
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
                    <SectionTitle level={1}>23.ตรวจสอบความขนานของ Seal frame ก่อนทำการ Lock Process tank.</SectionTitle>

                    {/* Measurement Boxes */}
                    <div className="flex gap-12 justify-center mb-4 relative z-10">
                        <StdMeasurementBox
                            standardLabel="Std. Max 20 µm."
                            id="seal_frame_20"
                            unit="µm."
                            value={measurements['seal_frame_20'] || ''}
                            onChange={handleMeasurementChange}
                        />
                        <StdMeasurementBox
                            standardLabel="Std. Max 500 µm."
                            id="seal_frame_500"
                            unit="µm."
                            value={measurements['seal_frame_500'] || ''}
                            onChange={handleMeasurementChange}
                        />
                    </div>

                    {/* Diagram Seal Frame */}
                    <DiagramImage
                        src="/images/page20-image2.jpg"
                        alt="Seal Frame Diagram"
                        height="h-32"
                        hasBorder={true}
                        hasBg={true}
                        containerClassName="mt-[-20px] pt-6"
                    />
                </div>

                {/* 23.1 Check Parallelism Bake plate support */}
                <div className="flex gap-4 items-end">
                    {/* Image Left */}
                    <DiagramImage
                        src="/images/page20-image3.jpg"
                        alt="Bake Plate Support Diagram"
                        width="w-[45%]"
                        height="h-48"
                        hasBorder={true}
                        hasBg={true}
                    />

                    {/* Inputs Right */}
                    <div className="flex-1 flex flex-col justify-between h-48">
                        <div>
                            <SectionTitle level={1}>23.1 ตรวจสอบความขนานของ Bake plate support ( Std. Max ≤ 5 µm. )</SectionTitle>
                            <div className="flex flex-col gap-4 pl-8">
                                <LabeledInput
                                    label="Side ="
                                    value={measurements['bake_plate_side'] || ''}
                                    onChange={(e) => handleMeasurementChange('bake_plate_side', e.target.value)}
                                    width="w-32"
                                    inputClassName="text-center"
                                />
                                <LabeledInput
                                    label="Front ="
                                    value={measurements['bake_plate_front'] || ''}
                                    onChange={(e) => handleMeasurementChange('bake_plate_front', e.target.value)}
                                    width="w-32"
                                    inputClassName="text-center"
                                />
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
                </div>

            </div>
        </A4Paper>
    );
}

export default Page20;
