import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page17 Component
 * 20. TORQUE CHECK (1/2)
 */
function Page17() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const tableData = [
        {
            no: 1, part: 'LM-GUIDE X', points: [
                { name: 'SCREW CS M6X25', qty: 32, torque: 150, id: '1_1' },
                { name: 'SCREW HEX M6X18', qty: 32, torque: 50, id: '1_2' }
            ]
        },
        {
            no: 2, part: 'LM-GUIDE Y', points: [
                { name: 'SCREW CS M6X25', qty: 28, torque: 150, id: '2_1' },
                { name: 'SCREW HEX M6X18', qty: 28, torque: 50, id: '2_2' }
            ]
        },
        {
            no: 3, part: 'MAGNET X', points: [
                { name: 'SCREW CS M6X25', qty: 16, torque: 150, id: '3_1' }
            ]
        },
        {
            no: 4, part: 'MAGNET Y', points: [
                { name: 'SCREW CS M6X25', qty: 16, torque: 150, id: '4_1' }
            ]
        },
        {
            no: 5, part: 'TABLE TO BED', points: [
                { name: 'M6X20 (BLACK)', qty: 16, torque: 150, id: '5_1' }
            ]
        },
        {
            no: 6, part: 'CERAMIC BASE', points: [
                { name: 'SCREW CS M10X40', qty: 4, torque: 250, id: '6_1' }
            ]
        },
        {
            no: 7, part: 'WORK STAND TO TABLE', points: [
                { name: 'SCREW BUTTON M8X35', qty: 8, torque: 150, id: '7_1' },
                { name: 'SCERW CS M8X35(sus)', qty: 8, torque: 200, id: '7_2' }
            ]
        },
    ];

    return (
        <A4Paper>
            <PageHeader
                documentNo="FAWB0005"
                releaseNo="7"
                controlBy="Assembly Division"
                title="CHECK SHEET"
                subtitle="ASSEMBLY"
                company="Sodick (Thailand) Co.,Ltd"
                page="17 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                <h3 className="font-bold mb-4 text-sm">20. TORQUE CHECK (1/2)</h3>

                {/* Diagram Placeholder */}
                <div className="w-full h-60 flex items-center justify-center mb-6">
                    <img
                        src="../public/images/page18-image1.jpg" // Placeholder
                        alt="Torque Check Diagram"
                        className="max-w-100"
                    />
                </div>

                {/* Table */}
                <div className="border border-black">

                    <table className="w-full border-collapse text-center">
                        <thead>
                            <tr className="bg-gray-100 font-bold border-b border-black">
                                <th className="border-r border-black py-2 w-[40px]">NO.</th>
                                <th className="border-r border-black py-2">PART NAME</th>
                                <th className="border-r border-black py-2">POINT CHECK</th>
                                <th className="border-r border-black py-2 w-[50px]">QTY.</th>
                                <th className="border-r border-black py-2 w-[100px] text-[10px]">TORQUE(Kgf.cm)</th>
                                <th className="border-r border-black py-2">ACTION BY</th>
                                <th className="py-2">DOUBLE CHECK</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                row.points.map((point, pIndex) => (
                                    <tr key={point.id} className="border-b border-black hover:bg-gray-50 h-8">
                                        {pIndex === 0 && (
                                            <>
                                                <td rowSpan={row.points.length} className="border-r border-black align-middle">{row.no}</td>
                                                <td rowSpan={row.points.length} className="border-r border-black align-middle">{row.part}</td>
                                            </>
                                        )}
                                        <td className="border-r border-black align-middle px-2 text-left">{point.name}</td>
                                        <td className="border-r border-black align-middle">{point.qty}</td>
                                        <td className="border-r border-black align-middle">{point.torque}</td>
                                        <td className="border-r border-black p-0">
                                            <input
                                                type="text"
                                                className="w-full h-full text-center bg-transparent outline-none"
                                                value={measurements[`action_by_${point.id}`] || ''}
                                                onChange={(e) => handleMeasurementChange(`action_by_${point.id}`, e.target.value)}
                                            />
                                        </td>
                                        <td className="p-0">
                                            <input
                                                type="text"
                                                className="w-full h-full text-center bg-transparent outline-none"
                                                value={measurements[`double_check_${point.id}`] || ''}
                                                onChange={(e) => handleMeasurementChange(`double_check_${point.id}`, e.target.value)}
                                            />
                                        </td>
                                    </tr>
                                ))
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Footer */}
                <div className="flex justify-end mt-8">
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
        </A4Paper>
    );
}

export default Page17;
