import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page15 Component
 * 16. Ball Screw Setting
 * 17. RDI Check of X,Y,Z,U,V axis
 */
function Page15() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => ({ ...prev, [id]: value }));
    };

    const handleCheckboxChange = (id) => {
        setMeasurements(prev => ({ ...prev, [id]: !prev[id] }));
    };

    const renderRDIRow = (axis, imageSrc) => (
        <tr key={axis} className="h-24">
            <td className="border border-black p-2 font-bold">{axis}</td>
            <td className="border border-black p-2 text-left align-middle">
                <div className="flex flex-col gap-2 ml-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={measurements[`rdi_${axis.toLowerCase()}_normal`] || false}
                            onChange={() => setMeasurements(prev => ({
                                ...prev,
                                [`rdi_${axis.toLowerCase()}_normal`]: !prev[`rdi_${axis.toLowerCase()}_normal`],
                                [`rdi_${axis.toLowerCase()}_abnormal`]: false
                            }))}
                        />
                        <span>Normal ปกติ</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="checkbox"
                            className="w-4 h-4"
                            checked={measurements[`rdi_${axis.toLowerCase()}_abnormal`] || false}
                            onChange={() => setMeasurements(prev => ({
                                ...prev,
                                [`rdi_${axis.toLowerCase()}_abnormal`]: !prev[`rdi_${axis.toLowerCase()}_abnormal`],
                                [`rdi_${axis.toLowerCase()}_normal`]: false
                            }))}
                        />
                        <span>Abnormal ผิดปกติ</span>
                    </label>
                </div>
            </td>
            <td className="border border-black p-1 align-middle text-center">
                <div className="w-40 h-20 mx-auto flex items-center justify-center border border-gray-100 bg-gray-50">
                    <img
                        src={imageSrc}
                        alt={`Example Graph ${axis}`}
                        className="max-w-full max-h-full opacity-70"
                    />
                </div>
            </td>
        </tr>
    );

    const axisImages = {
        'X': '/images/page15-image2.jpg',
        'Y': '/images/page15-image3.jpg',
        'Z': '/images/page15-image4.jpg',
        'U': '/images/page15-image5.jpg',
        'V': '/images/page15-image6.jpg',
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
                page="15 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-4 text-xs">
                {/* 16. Ball Screw Setting */}
                <div className="mb-6">
                    <h3 className="font-bold mb-2 text-sm">16. Ball Screw Setting</h3>
                    <div className="flex items-center gap-8 pl-4">
                        <input
                            type="checkbox"
                            className="w-6 h-6 border-2 border-black"
                            checked={measurements['ball_screw_check'] || false}
                            onChange={() => handleCheckboxChange('ball_screw_check')}
                        />

                        <div className="w-24 h-24 border border-gray-300 flex items-center justify-center">
                            <img
                                src="/images/page15-image1.jpg" // Placeholder for Ball Screw
                                alt="Ball Screw Setting"
                                className="max-w-full max-h-full"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <span>Data = </span>
                                <input
                                    type="text"
                                    className="border-b border-black w-24 outline-none text-center"
                                    value={measurements['ball_screw_data'] || ''}
                                    onChange={(e) => handleMeasurementChange('ball_screw_data', e.target.value)}
                                />
                                <span>A.</span>
                            </div>
                            <p className="text-[10px]">RDI Check ( STD. ≤ 2 A. )</p>
                        </div>
                    </div>
                </div>

                {/* 17. RDI Check of X,Y,Z,U,V axis */}
                <div className="mb-4">
                    <h3 className="font-bold mb-2 text-sm">17. RDI Check of X,Y,Z,U,V axis</h3>

                    <table className="w-full border-collapse border border-black text-center">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border border-black py-1 w-12">Axis</th>
                                <th className="border border-black py-1 w-48">กราฟ (Graph)</th>
                                <th className="border border-black py-1">ตัวอย่างกราฟที่ปกติ ( Example of Normal graph )</th>
                            </tr>
                        </thead>
                        <tbody>
                            {['X', 'Y', 'Z', 'U', 'V'].map(axis => renderRDIRow(axis, axisImages[axis]))}
                        </tbody>
                    </table>
                </div>

                {/* Footer Note & Signature */}
                <div className="flex justify-between items-end mt-4">
                    <div className="text-[10px] space-y-1">
                        <p>* หมายเหตุ</p>
                        <p>- ถ้ากราฟผิดปกติ ให้แจ้งหัวหน้างานเพื่อดำเนินการแก้ไขต่อไป</p>
                    </div>

                    <div className="w-48">
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

export default Page15;
