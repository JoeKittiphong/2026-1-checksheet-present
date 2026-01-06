import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page18 Component
 * 20. TORQUE CHECK (2/2)
 */
function Page18() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const tableData = [
        {
            no: 8, part: 'LINEAR COIL Y', points: [
                { name: 'SCREW CS M6X30', qty: 10, torque: 150, id: '8_1' }
            ]
        },
        {
            no: 9, part: 'LINEAR COIL V', points: [
                { name: 'SCREW CS M6X30', qty: 10, torque: 150, id: '9_1' }
            ]
        },
        {
            no: 10, part: 'COLUMN TO BED', points: [
                { name: 'SCREW CS M6X30', qty: 16, torque: 150, id: '10_1' }
            ]
        },
        {
            no: 11, part: 'ARM V TO COLUMN', points: [
                { name: 'SCREW CS M8X45', qty: 16, torque: 250, id: '11_1' }
            ]
        },
        {
            no: 12, part: 'SLIDER TO ARM V', points: [
                { name: 'SCREW CS M6X30', qty: 16, torque: 150, id: '12_1' }
            ]
        },
        {
            no: 13, part: 'BAKE PLATE TO SLIDER', points: [
                { name: 'SCREW CS M6X25', qty: 6, torque: 150, id: '13_1' }
            ]
        },
        {
            no: 14, part: 'AWT TO BAKE PLATE', points: [
                { name: 'SCREW CS M6X45(sus)', qty: 4, torque: 150, id: '14_1' }
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
                page="18 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                <h3 className="font-bold mb-4 text-sm">20. TORQUE CHECK (2/2)</h3>

                {/* Diagram Placeholder */}
                <div className="w-full h-80 border border-gray-300 flex items-center justify-center mb-6 bg-gray-50">
                    <img
                        src="../public/images/page18-image1.jpg" // Placeholder
                        alt="Torque Check Diagram 2"
                        className="max-h-full max-w-full"
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

export default Page18;
