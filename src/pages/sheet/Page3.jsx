import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import UniversalTable from '../../components/UniversalTable';
import CheckedByDate from '../../components/CheckedByDate';
import SectionTitle from '../../components/SectionTitle';
import LabeledInput from '../../components/LabeledInput';
import DiagramImage from '../../components/DiagramImage';

/**
 * Page3 Component
 * หน้าที่ 3: 3. ROLLING, PITCHING X,Y CHECK (P-Type Only)
 */
function Page3() {
    const [measurements, setMeasurements] = useState({});
    const [approvals, setApprovals] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleApprovalChange = (id, value) => {
        setApprovals(prev => ({ ...prev, [id]: value }));
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
                page="3 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section Title */}
                <SectionTitle level={1}>3.ROLLING , PITCHING X,Y CHECK (P-Type Only)</SectionTitle>

                <DiagramImage
                    src="/images/page3-image.jpg"
                    alt="Leveling Check Diagram Y"
                    imgClassName="w-[400px] h-auto"
                    height="h-auto"
                    containerClassName="mb-4"
                />

                {/* Level No. and Y Table */}
                <div className="flex gap-4 mb-4">
                    {/* Level No. */}
                    <div className="flex flex-col">
                        <LabeledInput
                            label="LEVEL NO."
                            value={measurements['level_no'] || ''}
                            onChange={(e) => handleMeasurementChange('level_no', e.target.value)}
                            width="w-32"
                            className="mb-4 font-medium"
                        />
                    </div>

                    {/* Y Table */}
                    <div className="flex-1">
                        <UniversalTable
                            headerRows={[
                                [
                                    { label: 'Y', colSpan: 5 }
                                ],
                                [
                                    { label: 'P', rowSpan: 2, width: '35px' },
                                    { label: 'R', rowSpan: 2, width: '35px' },
                                    { label: 'STD', colSpan: 2 },
                                    { label: 'No.', rowSpan: 2, width: '35px', className: 'bg-gray-400' }
                                ],
                                [
                                    { label: 'P', width: '35px' },
                                    { label: 'R', width: '35px' }
                                ]
                            ]}
                            rows={[
                                {
                                    cells: [
                                        { type: 'input', id: 'y_p_1', min: 0, max: 5 },
                                        { type: 'input', id: 'y_r_1', min: 0, max: 5 },
                                        { content: '5 ↑' },
                                        { content: '5' },
                                        { content: '3', className: 'bg-gray-400 font-bold' }
                                    ]
                                },
                                {
                                    cells: [
                                        { type: 'input', id: 'y_p_2', min: 0, max: 0 },
                                        { type: 'input', id: 'y_r_2', min: 0, max: 0 },
                                        { content: '0' },
                                        { content: '0' },
                                        { content: '2', className: 'bg-gray-400 font-bold' }
                                    ]
                                },
                                {
                                    cells: [
                                        { type: 'input', id: 'y_p_3', min: -5, max: 0 },
                                        { type: 'input', id: 'y_r_3', min: 0, max: 5 },
                                        { content: '5 ↓' },
                                        { content: '5' },
                                        { content: '1', className: 'bg-gray-400 font-bold' }
                                    ]
                                }
                            ]}
                            measurements={measurements}
                            onMeasurementChange={handleMeasurementChange}
                            approvals={approvals}
                            onApprovalChange={handleApprovalChange}
                        />

                        {/* Legend */}
                        <div className="mt-2 text-xs">
                            <div>P = Pitching</div>
                            <div>R = Rolling</div>
                        </div>
                    </div>
                </div>

                {/* X Table and Checked By */}
                <div className="flex gap-4 items-start">
                    {/* X Table */}
                    <div>
                        <UniversalTable
                            headerRows={[
                                [
                                    { label: '', rowSpan: 2, width: '30px' },
                                    { label: '', rowSpan: 2, width: '30px' },
                                    { label: 'No.', width: '35px' },
                                    { label: '1', width: '45px' },
                                    { label: '2', width: '45px' },
                                    { label: '3', width: '45px' }
                                ]
                            ]}
                            rows={[
                                {
                                    cells: [
                                        { content: 'X', rowSpan: 4, className: 'font-bold' },
                                        { content: 'STD', rowSpan: 2, className: 'bg-gray-200' },
                                        { content: 'P', className: 'bg-gray-200' },
                                        { content: '5 ↑' },
                                        { content: '0' },
                                        { content: '5 ↓' }
                                    ]
                                },
                                {
                                    cells: [
                                        { content: 'R', className: 'bg-gray-200' },
                                        { content: '5 ↑' },
                                        { content: '0' },
                                        { content: '5 ↓' }
                                    ]
                                },
                                {
                                    cells: [
                                        { content: 'Act.', rowSpan: 2, className: 'bg-gray-200' },
                                        { content: 'P', className: 'bg-gray-200' },
                                        { type: 'input', id: 'x_act_p_1', min: 0, max: 5 },
                                        { content: '0' },
                                        { type: 'input', id: 'x_act_p_3', min: -5, max: 0 }
                                    ]
                                },
                                {
                                    cells: [
                                        { content: 'R', className: 'bg-gray-200' },
                                        { type: 'input', id: 'x_act_r_1', min: 0, max: 5 },
                                        { content: '0 ↕' },
                                        { type: 'input', id: 'x_act_r_3', min: -5, max: 0 }
                                    ]
                                }
                            ]}
                            measurements={measurements}
                            onMeasurementChange={handleMeasurementChange}
                            approvals={approvals}
                            onApprovalChange={handleApprovalChange}
                        />
                    </div>

                    {/* Checked By / Date */}
                    <div className="ml-auto">
                        <CheckedByDate
                            name={measurements['checked_by_name'] || ''}
                            date={measurements['checked_by_date'] || ''}
                            onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                            onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                        />
                    </div>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page3;
