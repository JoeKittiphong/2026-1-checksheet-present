import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page21 Component
 * 24. Final inspection before delivery
 */
function Page21() {
    const [measurements, setMeasurements] = useState({});

    const handleCheckboxChange = (id) => {
        setMeasurements(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    // Helper to render an inspection point
    // pos: absolute position classes (e.g., 'top-2 right-2')
    // text: content text
    // id: unique id for state
    const InspectionPoint = ({ top, left, right, bottom, text, id, width = 'w-48' }) => (
        <div
            className={`absolute p-1 border border-black bg-white flex gap-2 items-start text-[9px] ${width}`}
            style={{ top, left, right, bottom }}
        >
            <div className="flex flex-col gap-1 mt-1">
                {/* Circle Checkbox (Leader) */}
                <div className="relative w-4 h-4 rounded-full border border-black flex items-center justify-center cursor-pointer" onClick={() => handleCheckboxChange(`${id}_leader`)}>
                    {measurements[`${id}_leader`] && <div className="w-2 h-2 rounded-full bg-black"></div>}
                </div>
                {/* Square Checkbox (Ass't chief) */}
                <div className="relative w-4 h-4 border border-black flex items-center justify-center cursor-pointer" onClick={() => handleCheckboxChange(`${id}_chief`)}>
                    {measurements[`${id}_chief`] && <div className="w-2 h-2 bg-black"></div>}
                </div>
            </div>
            <div className="flex-1 leading-tight">{text}</div>
        </div>
    );

    return (
        <A4Paper>
            <PageHeader
                documentNo="FAWB0005"
                releaseNo="7"
                controlBy="Assembly Division"
                title="CHECK SHEET"
                subtitle="ASSEMBLY"
                company="Sodick (Thailand) Co.,Ltd"
                page="21 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs h-[900px] flex flex-col">
                <div className="mb-2">
                    <span className="font-bold">24. ตรวจสอบความเรียบร้อยของเครื่องจักรก่อนส่งมอบให้กลุ่มงานถัดไป เมื่อตรวจสอบถูกต้องสมบูรณ์</span><br />
                    <span>ให้ <span className="font-bold">✓</span> ลงใน ○,□ ( ○ = Check by Leader up , □ = Check by Ass't chief up )</span>
                </div>

                {/* Main Diagram Area */}
                <div className="relative flex-1 border border-gray-300 bg-gray-50 mb-2">
                    <img
                        src="../public/images/page21-image1.jpg" // Placeholder
                        alt="Machine Inspection Diagram"
                        className="w-full h-full object-contain opacity-60"
                    />

                    {/* Inspection Points (Approximated positions based on image) */}

                    {/* 1. Top Left */}
                    <InspectionPoint
                        top="2%" left="2%" width="w-64"
                        id="p21_1"
                        text="สกรูใน Z side box R,L ล็อคและมาร์คสีเหลือง และสีม่วงในสกรูทุกตัว"
                    />

                    {/* 2. Top Right */}
                    <InspectionPoint
                        top="2%" right="20%" width="w-64"
                        id="p21_2"
                        text="สกรูล็อค Linear scale V ล็อคทุกตัว,ไม่มี Jig set gap scale สีแดง และดันlinear scale ไปทิศทางเดียวกันกับ"
                    />

                    {/* 3. Left Upper (Below 1) */}
                    <InspectionPoint
                        top="15%" left="2%" width="w-48"
                        id="p21_3"
                        text="สกรูล็อค Linear scale U ล็อคทุกตัว,ไม่มี Jig set gap scale สีแดงและดัน linear scale ไปทิศทางเดียวกันกับ"
                    />

                    {/* 4. Right Side Top */}
                    <InspectionPoint
                        top="15%" right="2%" width="w-40"
                        id="p21_4"
                        text="สกรูล็อค Magnet (Y),Coil(Y) ล็อคครบทุกตัวและมีการมาร์คสีเหลืองถูกต้องสมบูรณ์, Magnet ไม่เป็นรอยและ Magnet ไม่เป็นรอย"
                    />

                    {/* 12. Left Mid-Upper */}
                    <InspectionPoint
                        top="30%" left="2%" width="w-40"
                        id="p21_12"
                        text="Work Stand ไม่เป็นรอย, Ceramic base ไม่แตกหรือบิ่น และสกรูล็อคครบทุกตัว"
                    />

                    {/* 5. Right Side Mid (Image insert) */}
                    <InspectionPoint
                        top="32%" right="2%" width="w-40"
                        id="p21_5"
                        text={
                            <div className="flex flex-col gap-1">
                                <span>สกรูต้องไม่โผล่ออกจาก Stay Bellow YB</span>
                                <div className="w-16 h-10 bg-gray-200 border border-gray-400"></div>
                            </div>
                        }
                    />

                    {/* 11. Left Mid */}
                    <InspectionPoint
                        top="45%" left="2%" width="w-40"
                        id="p21_11"
                        text="สี Top coat ใน Process tank ไม่มีรอยและไม่มี"
                    />

                    {/* 6. Right Side Lower */}
                    <InspectionPoint
                        top="48%" right="2%" width="w-40"
                        id="p21_6"
                        text="ไม่มีสกรูตกหล่นอยู่ในบริเวณราง Lm guide แกน X,Y,V"
                    />

                    {/* 10. Left Lower */}
                    <InspectionPoint
                        bottom="15%" left="2%" width="w-48"
                        id="p21_10"
                        text="สกรูล็อค Magnet (X),Coil(X) ล็อคครบทุกตัว และมีการมาร์คสีเหลืองถูกต้องสมบูรณ์, Magnet ไม่เป็นรอย , Magnet ดันไปยังตำแหน่งที่มีจุดมาร์ค และ Linear coil ดันไปยังทิศทางเดียวกันกับ"
                    />

                    {/* 7. Right Bottom */}
                    <InspectionPoint
                        bottom="20%" right="2%" width="w-40"
                        id="p21_7"
                        text="สกรูล็อค Linear scale Y ล็อคทุกตัว ,ไม่มี Jig set gap scale สีแดง และดันlinear scale ไปทิศทางเดียวกันกับ"
                    />

                    {/* 8. Bottom Center Left */}
                    <InspectionPoint
                        bottom="10%" left="35%" width="w-32"
                        id="p21_8"
                        text="ไม่มีเศษผ้าอยู่ในเครื่องจักร"
                    />

                    {/* 9. Bottom Center Right */}
                    <InspectionPoint
                        bottom="10%" right="25%" width="w-40"
                        id="p21_9"
                        text="Over run switch แกน X,Y,V ไม่แตก"
                    />

                    {/* 13. Left Bottomest */}
                    <InspectionPoint
                        bottom="2%" left="2%" width="w-48"
                        id="p21_13"
                        text="สกรูล็อค Linear scale X ล็อคทุกตัว ,ไม่มี Jig set gap scale สีแดงและดัน linear scale ไปทิศทางเดียวกันกับสายไฟ linear sclale"
                    />

                </div>

                {/* Footer Signatures */}
                <div className="flex border border-black h-20">
                    <div className="flex-1"></div> {/* Spacer */}

                    <div className="w-48 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-1 font-bold text-xs bg-gray-100">
                            Check by /Date Leader Up
                        </div>
                        <div className="flex-1">
                            <CheckedByDate
                                title=""
                                width="w-full"
                                height="h-full"
                                name={measurements['checked_by_leader_name'] || ''}
                                date={measurements['checked_by_leader_date'] || ''}
                                onNameChange={(value) => handleMeasurementChange('checked_by_leader_name', value)}
                                onDateChange={(value) => handleMeasurementChange('checked_by_leader_date', value)}
                                hideLabel={true}
                            />
                        </div>
                    </div>

                    <div className="w-48 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-1 font-bold text-xs bg-gray-100">
                            Check by /Date Ass't chief Up
                        </div>
                        <div className="flex-1">
                            <CheckedByDate
                                title=""
                                width="w-full"
                                height="h-full"
                                name={measurements['checked_by_chief_name'] || ''}
                                date={measurements['checked_by_chief_date'] || ''}
                                onNameChange={(value) => handleMeasurementChange('checked_by_chief_name', value)}
                                onDateChange={(value) => handleMeasurementChange('checked_by_chief_date', value)}
                                hideLabel={true}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </A4Paper>
    );
}

export default Page21;
