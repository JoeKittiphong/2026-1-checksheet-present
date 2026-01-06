import { useState } from 'react';
import A4Paper from '../components/A4Paper';
import PageHeader from '../components/PageHeader';
import UniversalTable from '../components/UniversalTable';
import CheckedByDate from '../components/CheckedByDate';

/**
 * Page5 Component
 * หน้าที่ 5: 5. BED ASS'Y
 */
function Page5() {
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
                page="5 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section Title */}
                <h2 className="font-bold text-sm mb-4">5. BED ASS'Y</h2>

                {/* 5.1 PARALLEL OF GROOVE WAY Y-AXIS */}
                <div className="mb-4">
                    <h3 className="font-bold text-xs mb-2">5.1 PARALLEL OF GROOVE WAY Y-AXIS ( μm )</h3>

                    <div className="flex gap-4">
                        {/* Left: Table */}
                        <div className="flex-shrink-0">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '30px' },
                                        { label: 'A=KB', width: '45px' },
                                        { label: 'B', width: '45px' },
                                        { label: 'DIFF', width: '45px' }
                                    ]
                                ]}
                                rows={[
                                    {
                                        cells: [
                                            { content: '1' },
                                            { content: '0', className: 'bg-white' },
                                            { content: '0', className: 'bg-white' },
                                            { type: 'input', id: 'p5_y_diff_1', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '2' },
                                            { type: 'input', id: 'p5_y_akb_2', standard: '∞' },
                                            { type: 'input', id: 'p5_y_b_2', standard: '∞' },
                                            { type: 'input', id: 'p5_y_diff_2', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '3' },
                                            { type: 'input', id: 'p5_y_akb_3', standard: '∞' },
                                            { type: 'input', id: 'p5_y_b_3', standard: '∞' },
                                            { type: 'input', id: 'p5_y_diff_3', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '4' },
                                            { type: 'input', id: 'p5_y_akb_4', standard: '∞' },
                                            { type: 'input', id: 'p5_y_b_4', standard: '∞' },
                                            { type: 'input', id: 'p5_y_diff_4', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '5' },
                                            { type: 'input', id: 'p5_y_akb_5', standard: '∞' },
                                            { type: 'input', id: 'p5_y_b_5', standard: '∞' },
                                            { type: 'input', id: 'p5_y_diff_5', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '6' },
                                            { type: 'input', id: 'p5_y_akb_6', standard: '∞' },
                                            { type: 'input', id: 'p5_y_b_6', standard: '∞' },
                                            { type: 'input', id: 'p5_y_diff_6', standard: '∞' }
                                        ]
                                    },
                                    {
                                        cells: [
                                            { content: '7' },
                                            { content: '0', className: 'bg-white' },
                                            { type: 'input', id: 'p5_y_b_7', standard: '∞' },
                                            { type: 'input', id: 'p5_y_diff_7', standard: '∞' }
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
                                <div className="flex items-center gap-2">
                                    <span>DIAL GAUGE</span>
                                    <span>NO.</span>
                                    <input
                                        type="text"
                                        className="border-b border-black w-24 bg-transparent outline-none"
                                        value={measurements['dial_gauge_no_1'] || ''}
                                        onChange={(e) => handleMeasurementChange('dial_gauge_no_1', e.target.value)}
                                    />
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>STRAIGHT EDGE NO.</span>
                                    <input
                                        type="text"
                                        className="border-b border-black w-24 bg-transparent outline-none"
                                        value={measurements['straight_edge_no_1'] || ''}
                                        onChange={(e) => handleMeasurementChange('straight_edge_no_1', e.target.value)}
                                    />
                                </div>
                            </div>

                            {/* Subtitle */}
                            <div className="mt-4 text-xs">
                                <p>5.2 Straightness and Square of X-Axis</p>
                                <p className="text-[10px]">(ค่าตรวกรรมตรง และค่าตามแกนของแนวแกน X)</p>
                            </div>
                        </div>

                        {/* Right: Diagram */}
                        <div className="flex-1 flex justify-center">
                            <img
                                src="/images/page4-image.jpg"
                                alt="Parallel Groove Way Diagram"
                                className="w-90 h-auto"
                            />
                        </div>
                    </div>
                </div>

                {/* 5.2 STRAIGHTNESS DATA */}
                <div className="mb-4">
                    <h3 className="font-bold text-xs mb-2">5.2 STRAIGHTNESS DATA</h3>

                    <UniversalTable
                        headerRows={[
                            [
                                { label: '', width: '50px' },
                                { label: '', width: '40px' },
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
                                    { content: 'B', className: 'bg-gray-200 font-bold' },
                                    { content: 'Data', className: 'bg-gray-200' },
                                    { content: '0', className: 'bg-white' },
                                    { type: 'input', id: 'p5_x_b_2', standard: '∞' },
                                    { type: 'input', id: 'p5_x_b_3', standard: '∞' },
                                    { type: 'input', id: 'p5_x_b_4', standard: '∞' },
                                    { type: 'input', id: 'p5_x_b_5', standard: '∞' },
                                    { type: 'input', id: 'p5_x_b_6', standard: '∞' },
                                    { type: 'input', id: 'p5_x_b_7', standard: '∞' }
                                ]
                            },
                            {
                                cells: [
                                    { content: 'A = KB', className: 'bg-gray-200 font-bold' },
                                    { content: 'Data', className: 'bg-gray-200' },
                                    { content: '0', className: 'bg-white' },
                                    { type: 'input', id: 'p5_x_akb_2', standard: '∞' },
                                    { type: 'input', id: 'p5_x_akb_3', standard: '∞' },
                                    { type: 'input', id: 'p5_x_akb_4', standard: '∞' },
                                    { type: 'input', id: 'p5_x_akb_5', standard: '∞' },
                                    { type: 'input', id: 'p5_x_akb_6', standard: '∞' },
                                    { type: 'input', id: 'p5_x_akb_7', standard: '∞' }
                                ]
                            },
                            {
                                cells: [
                                    { content: 'DIFF', className: 'bg-gray-200 font-bold' },
                                    { content: 'Data', className: 'bg-gray-200' },
                                    { content: '0', className: 'bg-white' },
                                    { type: 'input', id: 'p5_x_diff_2', standard: '∞' },
                                    { type: 'input', id: 'p5_x_diff_3', standard: '∞' },
                                    { type: 'input', id: 'p5_x_diff_4', standard: '∞' },
                                    { type: 'input', id: 'p5_x_diff_5', standard: '∞' },
                                    { type: 'input', id: 'p5_x_diff_6', standard: '∞' },
                                    { type: 'input', id: 'p5_x_diff_7', standard: '∞' }
                                ]
                            }
                        ]}
                        measurements={measurements}
                        onMeasurementChange={handleMeasurementChange}
                        approvals={approvals}
                        onApprovalChange={handleApprovalChange}
                    />
                </div>

                {/* Bottom Section */}
                <div className="flex justify-between items-end mt-4">
                    {/* Left Side */}
                    <div className="space-y-2">
                        {/* DIAL GAUGE NO. and STRAIGHT EDGE NO. */}
                        <div className="flex items-center gap-2">
                            <span>DIAL GAUGE NO.</span>
                            <input
                                type="text"
                                className="border-b border-black w-24 bg-transparent outline-none"
                                value={measurements['dial_gauge_no_2'] || ''}
                                onChange={(e) => handleMeasurementChange('dial_gauge_no_2', e.target.value)}
                            />
                        </div>
                        <div className="flex items-center gap-2">
                            <span>STRAIGHT EDGE NO.</span>
                            <input
                                type="text"
                                className="border-b border-black w-24 bg-transparent outline-none"
                                value={measurements['straight_edge_no_2'] || ''}
                                onChange={(e) => handleMeasurementChange('straight_edge_no_2', e.target.value)}
                            />
                        </div>

                        {/* DATA STRAIGHT, PARALLEL Standards */}
                        <div className="mt-4">
                            <p className="font-bold">DATA STRAIGHT , PARALLEL</p>
                            <p>STD ≤ 2 μm</p>
                            <p>P-Type ≤ 1 μm</p>
                        </div>
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

export default Page5;
