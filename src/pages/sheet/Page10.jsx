import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page10 Component
 * หน้าที่ 10: 14. ENTO DATA CHECK
 */
function Page10() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const rows = [
        240, 220, 200, 180, 160, 140, 120, 100, 80, 60, 40, 20, 0
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
                                        <span className={measurements['front_selection'] === char ? 'font-bold underline' : ''}>{char}</span>
                                    </label>
                                ))}
                            </div>
                            <div className="flex items-center gap-2">
                                <span>SIDE &nbsp;&nbsp; = </span>
                                {['A', 'B', 'C', 'D'].map(char => (
                                    <label key={char} className="flex items-center gap-1 cursor-pointer">
                                        <span className={measurements['side_selection'] === char ? 'font-bold underline' : ''}>{char}</span>
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
                        {/* Table */}
                        <table className="border-collapse border border-black text-[10px] w-full mb-8">
                            <thead>
                                <tr>
                                    <th className="border border-black px-2 py-1 w-16 bg-gray-100 diagonal-bg h-8"></th>
                                    <th className="border border-black px-2 py-1">FRONT MAX (+2) - (-12)</th>
                                    <th className="border border-black px-2 py-1">SIDE MAX (0) - (± 5)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((val) => (
                                    <tr key={val}>
                                        <td className="border border-black px-2 py-1 text-center h-6">{val}</td>
                                        <td className="border border-black px-2 py-1 text-center">
                                            {val === 0 ? '0' : (
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-center"
                                                    value={measurements[`ento_front_${val}`] || ''}
                                                    onChange={(e) => handleMeasurementChange(`ento_front_${val}`, e.target.value)}
                                                />
                                            )}
                                        </td>
                                        <td className="border border-black px-2 py-1 text-center h-6">
                                            {val === 0 ? '0' : (
                                                <input
                                                    type="text"
                                                    className="w-full bg-transparent outline-none text-center"
                                                    value={measurements[`ento_side_${val}`] || ''}
                                                    onChange={(e) => handleMeasurementChange(`ento_side_${val}`, e.target.value)}
                                                />
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

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

                                {/* Inputs overlay - positioned approximately */}
                                {/* Note: In a real app with a fixed image, we would adjust top/left/right percentages */}

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
