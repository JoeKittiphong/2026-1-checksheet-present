import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import CheckedByDate from '../components/CheckedByDate';
import SectionTitle from '../components/SectionTitle';
import DiagramImage from '../components/DiagramImage';
import TorqueCheckTable from '../components/TorqueCheckTable';

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
                <SectionTitle level={2}>20. TORQUE CHECK (1/2)</SectionTitle>

                {/* Diagram */}
                <DiagramImage
                    src="/images/page18-image1.jpg"
                    alt="Torque Check Diagram"
                    height="h-60"
                    containerClassName="mb-6"
                    imgClassName="max-w-[400px]"
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

export default Page17;
