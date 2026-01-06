import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import UniversalTable from '../components/UniversalTable';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page1 Component
 * หน้าที่ 1: 1. CHECK DATA LEVEL X,Y AXIS FORM MA DIV.
 */
function Page1() {
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
                page="1 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section Title */}
                <h2 className="font-bold text-sm mb-4">1. CHECK DATA LEVEL X,Y AXIS FORM MA DIV.</h2>

                {/* 1.1 LEVELING CHECK (Y) */}
                <div className="mb-6">
                    <h3 className="font-bold text-xs mb-2">1.1 LEVELING CHECK ( Y )</h3>

                    <div className="flex gap-4">
                        {/* Left: Measurement Table */}
                        <div className="flex-shrink-0">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: 'No.', rowSpan: 2, width: '30px' },
                                        { label: 'A', width: '50px' },
                                        { label: 'B', width: '50px' }
                                    ],
                                    [
                                        { label: 'DATA' },
                                        { label: 'DATA' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: '1' },
                                            { type: 'input', id: 'p1_y_a_1', standard: '∞' },
                                            { type: 'input', id: 'p1_y_b_1', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '2' },
                                            { type: 'input', id: 'p1_y_a_2', standard: '∞' },
                                            { type: 'input', id: 'p1_y_b_2', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '3' },
                                            { type: 'input', id: 'p1_y_a_3', standard: '∞' },
                                            { type: 'input', id: 'p1_y_b_3', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '4' },
                                            { content: '0', className: 'bg-white' },
                                            { type: 'input', id: 'p1_y_b_4', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '5' },
                                            { type: 'input', id: 'p1_y_a_5', standard: '∞' },
                                            { type: 'input', id: 'p1_y_b_5', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '6' },
                                            { type: 'input', id: 'p1_y_a_6', standard: '∞' },
                                            { type: 'input', id: 'p1_y_b_6', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '7' },
                                            { type: 'input', id: 'p1_y_a_7', standard: '∞' },
                                            { type: 'input', id: 'p1_y_b_7', standard: '∞' }
                                        ]
                                    }
                                ]}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                                approvals={approvals}
                                onApprovalChange={handleApprovalChange}
                            />
                        </div>

                        {/* Right: Diagram */}
                        <div className="flex-1 flex flex-col items-center">
                            <div className="relative">
                                {/* Diagram Image */}
                                <img
                                    src="../public/images/page1-image.jpg"
                                    alt="Leveling Check Diagram Y"
                                    className="w-64 h-auto"
                                />
                            </div>

                            {/* Bottom: BED No. */}
                            <div className="mt-4 flex items-center gap-2 text-xs">
                                <span>BED No.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-24 bg-transparent outline-none"
                                    value={measurements['bed_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('bed_no', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 1.2 LEVELING CHECK (X) */}
                <div className="mb-6">
                    <h3 className="font-bold text-xs mb-2">1.2 LEVELING CHECK ( X )</h3>

                    <UniversalTable
                        headerRows={[
                            [
                                { label: '', width: '50px' },
                                { label: '1', width: '35px' },
                                { label: '2', width: '35px' },
                                { label: '3', width: '35px' },
                                { label: '4', width: '35px' },
                                { label: '5', width: '35px' },
                                { label: '6', width: '35px' },
                                { label: '7', width: '35px' }
                            ]
                        ]}
                        rows={[
                            {
                                cells: [
                                    { content: 'B', className: 'bg-gray-200 font-bold text-left pl-1' },
                                    { type: 'input', id: 'p1_x_b_1', standard: '∞' },
                                    { type: 'input', id: 'p1_x_b_2', standard: '∞' },
                                    { type: 'input', id: 'p1_x_b_3', standard: '∞' },
                                    { type: 'input', id: 'p1_x_b_4', standard: '∞' },
                                    { type: 'input', id: 'p1_x_b_5', standard: '∞' },
                                    { type: 'input', id: 'p1_x_b_6', standard: '∞' },
                                    { type: 'input', id: 'p1_x_b_7', standard: '∞' }
                                ]
                            },
                            {
                                cells: [
                                    { content: 'A = Kb', className: 'bg-gray-200 font-bold text-left pl-1' },
                                    { content: '' },
                                    { content: '' },
                                    { content: '0' },
                                    { content: '' },
                                    { content: '' },
                                    { content: '' },
                                    { content: '' }
                                ]
                            }
                        ]}
                        measurements={measurements}
                        onMeasurementChange={handleMeasurementChange}
                        approvals={approvals}
                        onApprovalChange={handleApprovalChange}
                        className="w-80"
                    />
                </div>

                {/* Bottom Section: Level No. and Checked By */}
                <div className="flex justify-between items-end mt-8">
                    {/* Level No. */}
                    <div className="flex items-center gap-2">
                        <span className="font-medium">LEVEL NO.</span>
                        <input
                            type="text"
                            className="border-b border-black w-40 bg-transparent outline-none"
                            value={measurements['level_no'] || ''}
                            onChange={(e) => handleMeasurementChange('level_no', e.target.value)}
                        />
                    </div>

                    {/* Checked By / Date */}
                    <CheckedByDate
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

export default Page1;
