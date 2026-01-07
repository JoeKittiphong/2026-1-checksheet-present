import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import UniversalTable from '../../components/UniversalTable';
import CheckedByDate from '../../components/CheckedByDate';
import SectionTitle from '../../components/SectionTitle';
import LabeledInput from '../../components/LabeledInput';
import DiagramImage from '../../components/DiagramImage';

/**
 * Page4 Component
 * หน้าที่ 4: 4. CHECK DATA PARALLEL & STRAIGHTNESS X,Y FROM MA DIV.
 */
function Page4() {
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
                page="4 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section Title */}
                <SectionTitle level={1}>4.CHECK DATA PARALLEL &amp; STRAIGHTNESS X,Y FROM MA DIV.</SectionTitle>

                {/* 4.1 PARALLEL Y-AXIS */}
                <div className="mb-4">
                    <SectionTitle level={2}>4.1 PARALLEL Y-AXIS (DATA FROM MA) ( μm )</SectionTitle>

                    <div className="flex gap-4">
                        {/* Left: Table */}
                        <div className="flex-shrink-0">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '30px' },
                                        { label: 'A = KB', width: '50px' },
                                        { label: 'B', width: '50px' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: '1' },
                                            { content: '0', className: 'bg-white' },
                                            { content: '0', className: 'bg-white' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '2' },
                                            { type: 'input', id: 'p4_y_akb_2', standard: '∞' },
                                            { type: 'input', id: 'p4_y_b_2', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '3' },
                                            { type: 'input', id: 'p4_y_akb_3', standard: '∞' },
                                            { type: 'input', id: 'p4_y_b_3', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '4' },
                                            { type: 'input', id: 'p4_y_akb_4', standard: '∞' },
                                            { type: 'input', id: 'p4_y_b_4', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '5' },
                                            { type: 'input', id: 'p4_y_akb_5', standard: '∞' },
                                            { type: 'input', id: 'p4_y_b_5', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '6' },
                                            { type: 'input', id: 'p4_y_akb_6', standard: '∞' },
                                            { type: 'input', id: 'p4_y_b_6', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '7' },
                                            { content: '0', className: 'bg-white' },
                                            { type: 'input', id: 'p4_y_b_7', standard: '∞' }
                                        ]
                                    }
                                ]}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                                approvals={approvals}
                                onApprovalChange={handleApprovalChange}
                            />

                            {/* DIAL GAUGE NO. and STRAIGHT EDGE NO. */}
                            <div className="mt-4 space-y-2">
                                <LabeledInput
                                    label="DIAL GAUGE NO."
                                    value={measurements['dial_gauge_no_1'] || ''}
                                    onChange={(e) => handleMeasurementChange('dial_gauge_no_1', e.target.value)}
                                    width="w-24"
                                />
                                <LabeledInput
                                    label="STRAIGHT EDGE NO."
                                    value={measurements['straight_edge_no_1'] || ''}
                                    onChange={(e) => handleMeasurementChange('straight_edge_no_1', e.target.value)}
                                    width="w-24"
                                />
                            </div>
                        </div>

                        {/* Right: Diagram */}
                        <DiagramImage
                            src="/images/page4-image.jpg"
                            alt="Parallel Y-Axis Diagram"
                            imgClassName="w-[360px] h-auto"
                            height="h-auto"
                            containerClassName="flex-1"
                        />
                    </div>
                </div>

                {/* 4.2 DATA PARALLEL X FROM MA */}
                <div className="mb-4">
                    <SectionTitle level={2}>4.2 DATA PARALLEL X FROM MA</SectionTitle>

                    <UniversalTable
                        headerRows={[
                            [
                                { label: '', width: '50px' },
                                { label: '', width: '40px' },
                                { label: '1', width: '40px' },
                                { label: '2', width: '40px' },
                                { label: '3', width: '40px' },
                                { label: '4', width: '40px' },
                                { label: '5', width: '40px' },
                                { label: '6', width: '40px' },
                                { label: '7', width: '40px' }
                            ]
                        ]}
                        rows={[
                            {
                                cells: [
                                    { content: 'B', className: 'bg-gray-200 font-bold' },
                                    { content: 'Data', className: 'bg-gray-200' },
                                    { content: '0', className: 'bg-white' },
                                    { type: 'input', id: 'p4_x_b_2', standard: '∞' },
                                    { type: 'input', id: 'p4_x_b_3', standard: '∞' },
                                    { type: 'input', id: 'p4_x_b_4', standard: '∞' },
                                    { type: 'input', id: 'p4_x_b_5', standard: '∞' },
                                    { type: 'input', id: 'p4_x_b_6', standard: '∞' },
                                    { type: 'input', id: 'p4_x_b_7', standard: '∞' }
                                ]
                            },
                            {
                                cells: [
                                    { content: 'A = KB', className: 'bg-gray-200 font-bold' },
                                    { content: 'Data', className: 'bg-gray-200' },
                                    { content: '0', className: 'bg-white' },
                                    { type: 'input', id: 'p4_x_akb_2', standard: '∞' },
                                    { type: 'input', id: 'p4_x_akb_3', standard: '∞' },
                                    { type: 'input', id: 'p4_x_akb_4', standard: '∞' },
                                    { type: 'input', id: 'p4_x_akb_5', standard: '∞' },
                                    { type: 'input', id: 'p4_x_akb_6', standard: '∞' },
                                    { content: '0', className: 'bg-white' }
                                ]
                            }
                        ]}
                        measurements={measurements}
                        onMeasurementChange={handleMeasurementChange}
                        approvals={approvals}
                        onApprovalChange={handleApprovalChange}
                    />
                </div>

                {/* Bottom: DIAL GAUGE NO., STRAIGHT EDGE NO. and CHECKED BY */}
                <div className="flex justify-between items-end mt-4">
                    {/* Left: DIAL GAUGE NO. and STRAIGHT EDGE NO. */}
                    <div className="space-y-2">
                        <LabeledInput
                            label="DIAL GAUGE NO."
                            value={measurements['dial_gauge_no_2'] || ''}
                            onChange={(e) => handleMeasurementChange('dial_gauge_no_2', e.target.value)}
                            width="w-24"
                        />
                        <LabeledInput
                            label="STRAIGHT EDGE NO."
                            value={measurements['straight_edge_no_2'] || ''}
                            onChange={(e) => handleMeasurementChange('straight_edge_no_2', e.target.value)}
                            width="w-24"
                        />
                    </div>

                    {/* Right: Checked By / Date */}
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

export default Page4;
