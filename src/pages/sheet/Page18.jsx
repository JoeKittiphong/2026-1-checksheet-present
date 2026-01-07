import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';
import SectionTitle from '../../components/SectionTitle';
import DiagramImage from '../../components/DiagramImage';
import TorqueCheckTable from '../../components/TorqueCheckTable';

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
                <SectionTitle level={2}>20. TORQUE CHECK (2/2)</SectionTitle>

                {/* Diagram */}
                <DiagramImage
                    src="/images/page18-image1.jpg"
                    alt="Torque Check Diagram 2"
                    height="h-80"
                    hasBorder={true}
                    hasBg={true}
                    containerClassName="mb-6"
                />

                {/* Table */}
                <TorqueCheckTable
                    data={tableData}
                    measurements={measurements}
                    onMeasurementChange={handleMeasurementChange}
                />

                {/* Footer */}
                <div className="flex justify-end mt-4">
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
        </A4Paper>
    );
}

export default Page18;
