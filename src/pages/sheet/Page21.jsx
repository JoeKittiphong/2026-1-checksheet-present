import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';
import DiagramImage from '../../components/DiagramImage';
import InspectionPoint from '../../components/InspectionPoint';

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
                        src="/images/page21-image1.jpg"
                        alt="Machine Inspection Diagram"
                        className="w-full h-full object-contain opacity-60"
                    />

                    {/* Inspection Points */}
                    <InspectionPoint
                        top="2%" left="2%" width="w-64"
                        id="p21_1"
                        text="สกรูใน Z side box R,L ล็อคและมาร์คสีเหลือง และสีม่วงในสกรูทุกตัว"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="2%" right="20%" width="w-64"
                        id="p21_2"
                        text="สกรูล็อค Linear scale V ล็อคทุกตัว,ไม่มี Jig set gap scale สีแดง และดันlinear scale ไปทิศทางเดียวกันกับ"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="15%" left="2%" width="w-48"
                        id="p21_3"
                        text="สกรูล็อค Linear scale U ล็อคทุกตัว,ไม่มี Jig set gap scale สีแดงและดัน linear scale ไปทิศทางเดียวกันกับ"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="15%" right="2%" width="w-40"
                        id="p21_4"
                        text="สกรูล็อค Magnet (Y),Coil(Y) ล็อคครบทุกตัวและมีการมาร์คสีเหลืองถูกต้องสมบูรณ์, Magnet ไม่เป็นรอยและ Magnet ไม่เป็นรอย"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="30%" left="2%" width="w-40"
                        id="p21_12"
                        text="Work Stand ไม่เป็นรอย, Ceramic base ไม่แตกหรือบิ่น และสกรูล็อคครบทุกตัว"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="32%" right="2%" width="w-40"
                        id="p21_5"
                        text={
                            <div className="flex flex-col gap-1">
                                <span>สกรูต้องไม่โผล่ออกจาก Stay Bellow YB</span>
                                <div className="w-16 h-10 bg-gray-200 border border-gray-400"></div>
                            </div>
                        }
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="45%" left="2%" width="w-40"
                        id="p21_11"
                        text="สี Top coat ใน Process tank ไม่มีรอยและไม่มี"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        top="48%" right="2%" width="w-40"
                        id="p21_6"
                        text="ไม่มีสกรูตกหล่นอยู่ในบริเวณราง Lm guide แกน X,Y,V"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        bottom="15%" left="2%" width="w-48"
                        id="p21_10"
                        text="สกรูล็อค Magnet (X),Coil(X) ล็อคครบทุกตัว และมีการมาร์คสีเหลืองถูกต้องสมบูรณ์, Magnet ไม่เป็นรอย , Magnet ดันไปยังตำแหน่งที่มีจุดมาร์ค และ Linear coil ดันไปยังทิศทางเดียวกันกับ"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        bottom="20%" right="2%" width="w-40"
                        id="p21_7"
                        text="สกรูล็อค Linear scale Y ล็อคทุกตัว ,ไม่มี Jig set gap scale สีแดง และดันlinear scale ไปทิศทางเดียวกันกับ"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        bottom="10%" left="35%" width="w-32"
                        id="p21_8"
                        text="ไม่มีเศษผ้าอยู่ในเครื่องจักร"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        bottom="10%" right="25%" width="w-40"
                        id="p21_9"
                        text="Over run switch แกน X,Y,V ไม่แตก"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                    <InspectionPoint
                        bottom="2%" left="2%" width="w-48"
                        id="p21_13"
                        text="สกรูล็อค Linear scale X ล็อคทุกตัว ,ไม่มี Jig set gap scale สีแดงและดัน linear scale ไปทิศทางเดียวกันกับสายไฟ linear sclale"
                        measurements={measurements}
                        onCheckboxChange={handleCheckboxChange}
                    />

                </div>

                {/* Footer Signatures */}
                <div className="flex border border-black h-25">
                    <div className="flex-1"></div> {/* Spacer */}

                    <div className="w-40 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-0.5 font-bold text-[10px] bg-gray-100">
                            Check by /Date Leader Up
                        </div>
                        <div className="flex-1 bg-yellow-300 flex flex-col">
                            <div className="flex-[7] border-b border-black border-dashed">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-xs"
                                    value={measurements['checked_by_leader_name'] || ''}
                                    onChange={(e) => handleMeasurementChange('checked_by_leader_name', e.target.value)}
                                />
                            </div>
                            <div className="flex-[3]">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-[10px]"
                                    placeholder="DD/MM/YY"
                                    value={measurements['checked_by_leader_date'] || ''}
                                    onChange={(e) => handleMeasurementChange('checked_by_leader_date', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-40 border-l border-black flex flex-col">
                        <div className="border-b border-black text-center py-0.5 font-bold text-[10px] bg-gray-100">
                            Check by /Date Ass't chief Up
                        </div>
                        <div className="flex-1 bg-yellow-300 flex flex-col">
                            <div className="flex-[7] border-b border-black border-dashed">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-xs"
                                    value={measurements['checked_by_chief_name'] || ''}
                                    onChange={(e) => handleMeasurementChange('checked_by_chief_name', e.target.value)}
                                />
                            </div>
                            <div className="flex-[3]">
                                <input
                                    type="text"
                                    className="w-full h-full bg-transparent text-center outline-none text-[10px]"
                                    placeholder="DD/MM/YY"
                                    value={measurements['checked_by_chief_date'] || ''}
                                    onChange={(e) => handleMeasurementChange('checked_by_chief_date', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </A4Paper>
    );
}

export default Page21;
