import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import UniversalTable from '../../components/UniversalTable';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page10 Component
 * หน้าที่ 10: 14. ENTO DATA CHECK
 */
function Page10() {
    const [measurements, setMeasurements] = useState({});
    const [approvals, setApprovals] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleApprovalChange = (id, value) => {
        setApprovals(prev => ({ ...prev, [id]: value }));
    };

    // Generate rows for ENTO table (240 to 20, step 20)
    const entoRows = [];
    for (let i = 240; i >= 20; i -= 20) {
        entoRows.push({
            cells: [
                { content: i.toString(), className: 'p-0 !h-6' }, // Reduced height cells
                { type: 'input', id: `ento_front_${i}`, min: -12, max: 2, className: '!h-6' },
                { type: 'input', id: `ento_side_${i}`, min: -5, max: 5, className: '!h-6' }
            ],
            className: 'h-6'
        });
    }
    // Add row 0 (fixed values)
    entoRows.push({
        cells: [
            { content: '0', className: 'p-0 !h-6' },
            { content: '0', className: 'bg-white p-0 !h-6' },
            { content: '0', className: 'bg-white p-0 !h-6' }
        ],
        className: 'h-6'
    });

    return (
        <A4Paper>
            <PageHeader
                documentNo="FAWB0005"
                releaseNo="7"
                controlBy="Assembly Division"
                title="CHECK SHEET"
                subtitle="ASSEMBLY"
                company="Sodick (Thailand) Co.,Ltd"
                page="10 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section 14 */}
                <h2 className="font-bold text-sm mb-2">14. ENTO DATA CHECK</h2>

                <div className="flex gap-4">
                    {/* Left Column: Diagrams and Info */}
                    <div className="w-1/3 flex flex-col">
                        {/* Diagram 1 */}
                        <div className="mb-4">
                            <img
                                src="/images/page10-image1.jpg"
                                alt="Ento Check Diagram"
                                className="w-50 h-auto"
                            />
                        </div>

                        {/* Bottom Diagram (Ento) */}
                        <div className="mb-4">
                            <img
                                src="/images/page10-image2.jpg"
                                alt="Ento Check Diagram"
                                className="w-50 h-auto"
                            />
                        </div>

                        {/* Info Fields */}
                        <div className="space-y-2 mt-4">
                            <div className="flex items-center gap-2">
                                <span>FRONT = </span>
                                {['A', 'B', 'C', 'D'].map(char => (
                                    <label key={char} className="flex items-center gap-1 cursor-pointer">
                                        <input type="radio" name="front_selection" value={char}
                                            checked={measurements['front_selection'] === char}
                                            onChange={(e) => handleMeasurementChange('front_selection', e.target.value)}
                                            className="hidden" // Hide default radio
                                        />
                                        <span className={measurements['front_selection'] === char ? 'font-bold underline text-blue-600' : ''}>{char}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span>SIDE &nbsp;&nbsp; = </span>
                                {['A', 'B', 'C', 'D'].map(char => (
                                    <label key={char} className="flex items-center gap-1 cursor-pointer">
                                        <input type="radio" name="side_selection" value={char}
                                            checked={measurements['side_selection'] === char}
                                            onChange={(e) => handleMeasurementChange('side_selection', e.target.value)}
                                            className="hidden" // Hide default radio
                                        />
                                        <span className={measurements['side_selection'] === char ? 'font-bold underline text-blue-600' : ''}>{char}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span>ENTO NO.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-24 bg-transparent outline-none"
                                    value={measurements['ento_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('ento_no', e.target.value)}
                                />
                            </div>
                            <div className="flex items-center gap-2">
                                <span>DIAL GAUGE NO.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-24 bg-transparent outline-none"
                                    value={measurements['dial_gauge_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('dial_gauge_no', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Table and Data Spacer */}
                    <div className="w-2/3">
                        {/* Table using UniversalTable */}
                        <div className="mb-4">
                            <UniversalTable
                                headerRows={[
                                    [
                                        { label: '', width: '50px' },
                                        { label: 'FRONT MAX (+2) - (-12)', width: '120px' },
                                        { label: 'SIDE MAX (0) - (± 5)', width: '120px' }
                                    ]
                                ]}
                                rows={entoRows}
                                measurements={measurements}
                                onMeasurementChange={handleMeasurementChange}
                                approvals={approvals}
                                onApprovalChange={handleApprovalChange}
                            />
                        </div>

                        {/* Data Spacer Diagram Section */}
                        <div>
                            <h3 className="font-bold text-sm mb-2">Data Spacer</h3>
                            <div className="relative h-48 w-full">
                                {/* Placeholder for 3D Diagram */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <img
                                        src="/images/page10-image3.jpg"
                                        alt="Data Spacer 3D Diagram"
                                        className="w-50"
                                    />
                                </div>

                                {/* Top Left */}
                                <div className="absolute top-10 left-20 flex items-center">
                                    <input
                                        type="text"
                                        className="border-b border-black w-12 bg-transparent outline-none text-right text-[10px]"
                                        value={measurements['spacer_tl'] || ''}
                                        onChange={(e) => handleMeasurementChange('spacer_tl', e.target.value)}
                                    />
                                    <span className="text-[10px] ml-1">mm.</span>
                                </div>

                                {/* Top Right */}
                                <div className="absolute top-4 right-10 flex items-center">
                                    <input
                                        type="text"
                                        className="border-b border-black w-12 bg-transparent outline-none text-right text-[10px]"
                                        value={measurements['spacer_tr'] || ''}
                                        onChange={(e) => handleMeasurementChange('spacer_tr', e.target.value)}
                                    />
                                    <span className="text-[10px] ml-1">mm.</span>
                                </div>

                                {/* Middle Right */}
                                <div className="absolute top-24 right-4 flex items-center">
                                    <input
                                        type="text"
                                        className="border-b border-black w-12 bg-transparent outline-none text-right text-[10px]"
                                        value={measurements['spacer_mr'] || ''}
                                        onChange={(e) => handleMeasurementChange('spacer_mr', e.target.value)}
                                    />
                                    <span className="text-[10px] ml-1">mm.</span>
                                </div>

                                {/* Bottom Left */}
                                <div className="absolute bottom-10 left-10 flex items-center">
                                    <input
                                        type="text"
                                        className="border-b border-black w-12 bg-transparent outline-none text-right text-[10px]"
                                        value={measurements['spacer_bl'] || ''}
                                        onChange={(e) => handleMeasurementChange('spacer_bl', e.target.value)}
                                    />
                                    <span className="text-[10px] ml-1">mm.</span>
                                </div>
                            </div>
                        </div>

                        {/* Checked By */}
                        <div className="flex justify-end mt-4">
                            <CheckedByDate
                                name={measurements['checked_by_name'] || ''}
                                date={measurements['checked_by_date'] || ''}
                                onNameChange={(value) => handleMeasurementChange('checked_by_name', value)}
                                onDateChange={(value) => handleMeasurementChange('checked_by_date', value)}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </A4Paper>
    );
}

export default Page10;
