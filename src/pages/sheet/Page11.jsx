import { useState } from 'react';
import A4Paper from '../../components/A4Paper';
import PageHeader from '../../components/PageHeader';
import AxisDiagram from '../../components/AxisDiagram';
import CheckedByDate from '../../components/CheckedByDate';

/**
 * Page11 Component
 * หน้าที่ 11: 15. ACCURACY CHECK OF BODY
 *            15.1 Check Yawing X axis
 *            15.2 Check Yawing Y axis and check Square XY
 */
function Page11() {
    const [measurements, setMeasurements] = useState({});

    const handleMeasurementChange = (id, value) => {
        setMeasurements(prev => {
            const next = { ...prev, [id]: value };

            // Calculate Yawing X
            if (['yawing_x_plus', 'yawing_x_center', 'yawing_x_minus'].includes(id)) {
                const vals = [
                    next['yawing_x_plus'],
                    next['yawing_x_center'],
                    next['yawing_x_minus']
                ].map(v => parseFloat(v)).filter(n => !isNaN(n));

                if (vals.length > 0) {
                    next['yawing_x_val'] = Math.max(...vals) - Math.min(...vals);
                } else {
                    next['yawing_x_val'] = '';
                }
            }

            // Calculate Yawing Y
            if (['yawing_y_plus', 'yawing_y_center', 'yawing_y_minus'].includes(id)) {
                const vals = [
                    next['yawing_y_plus'],
                    next['yawing_y_center'],
                    next['yawing_y_minus']
                ].map(v => parseFloat(v)).filter(n => !isNaN(n));

                if (vals.length > 0) {
                    next['yawing_y_val'] = Math.max(...vals) - Math.min(...vals);
                } else {
                    next['yawing_y_val'] = '';
                }
            }

            return next;
        });
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
                page="11 OF 22"
                date="22-Dec-25"
                model="AL400G"
                group="BODY ASS'Y"
            />

            <div className="p-2 text-xs">
                {/* Section 15 */}
                <h2 className="font-bold text-sm mb-1">15. ACCURACY CHECK OF BODY</h2>

                {/* 15.1 Check Yawing X axis */}
                <h3 className="font-bold text-[10px] mb-1">15.1 Check Yawing X axis</h3>
                <div className="border border-black mb-2">
                    <div className="grid grid-cols-3 divide-x divide-black border-b border-black">
                        {/* Graph X+ */}
                        <div className="p-1 flex justify-center">
                            <AxisDiagram
                                type="TR"
                                title="X+ ="
                                value={measurements['yawing_x_plus'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_x_plus', e.target.value)}
                                labels={[
                                    { x: 20, y: 15, text: 'X' },
                                    { x: 95, y: 95, text: '+ Y -', className: 'text-[8px]' }
                                ]}
                                className="w-full max-w-[120px]"
                                redLineOn="vertical"
                            />
                        </div>
                        {/* Graph Xc */}
                        <div className="p-1 flex justify-center">
                            <AxisDiagram
                                type="TR"
                                title="Xc ="
                                value={measurements['yawing_x_center'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_x_center', e.target.value)}
                                labels={[
                                    { x: 50, y: 10, text: '0 -', className: 'text-[8px]' },
                                    { x: 50, y: 30, text: '+' },
                                    { x: 95, y: 10, text: '0', className: 'text-[8px]' },
                                    { x: 20, y: 15, text: 'X' },
                                    { x: 95, y: 95, text: '+ Y -', className: 'text-[8px]' }
                                ]}
                                className="w-full max-w-[120px]"
                                redLineOn="vertical"
                            />
                        </div>
                        {/* Graph X- */}
                        <div className="p-1 flex justify-center">
                            <AxisDiagram
                                type="TL"
                                title="X- ="
                                value={measurements['yawing_x_minus'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_x_minus', e.target.value)}
                                labels={[
                                    { x: 80, y: 15, text: 'X' },
                                    { x: 10, y: 95, text: '- Y +', className: 'text-[8px]' }
                                ]}
                                className="w-full max-w-[120px]"
                                redLineOn="vertical"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 divide-x divide-black">
                        {/* Empty Cell */}
                        <div className="p-1"></div>

                        {/* Info Center */}
                        <div className="p-1 space-y-1">
                            <div className="flex items-center gap-1">
                                <span>Yawing X =</span>
                                <span className="border-b border-black w-10 text-center inline-block">
                                    {measurements['yawing_x_val']}
                                </span>
                                <span>μm</span>
                            </div>
                            <p className='text-[10px]'>STD ≤ 2 μm</p>
                            <p className='text-[10px]'>P type ≤ 1 μm</p>
                            <div className="flex items-center gap-1">
                                <span>DIAL GAUGE NO.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-16 bg-transparent outline-none"
                                    value={measurements['yawing_x_dial'] || ''}
                                    onChange={(e) => handleMeasurementChange('yawing_x_dial', e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Info Right */}
                        <div className="p-1 space-y-1">
                            <p className="mb-1">SQUARE SIDE</p>
                            <div className="flex items-center gap-2">
                                <span>X = </span>
                                <select
                                    className="border-b border-black bg-transparent outline-none text-[10px]"
                                    value={measurements['yawing_x_side_x'] || ''}
                                    onChange={(e) => handleMeasurementChange('yawing_x_side_x', e.target.value)}
                                >
                                    <option value="">-</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>Y = </span>
                                <select
                                    className="border-b border-black bg-transparent outline-none text-[10px]"
                                    value={measurements['yawing_x_side_y'] || ''}
                                    onChange={(e) => handleMeasurementChange('yawing_x_side_y', e.target.value)}
                                >
                                    <option value="">-</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                </select>
                            </div>
                            <div className="flex items-center gap-1 mt-1">
                                <span>SQUARE NO.</span>
                                <input
                                    type="text"
                                    className="border-b border-black w-20 bg-transparent outline-none"
                                    value={measurements['yawing_x_square_no'] || ''}
                                    onChange={(e) => handleMeasurementChange('yawing_x_square_no', e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 15.2 Check Yawing Y axis and check Square XY */}
                <h3 className="font-bold text-[10px] mb-1">15.2 Check Yawing Y axis and check Square XY</h3>
                <div className="border border-black grid grid-cols-[1fr_1fr_1fr] divide-x divide-black relative">

                    {/* ROW 1 */}
                    {/* Cell 1,1 */}
                    <div className="p-1 border-b border-black">
                        <p className="mb-1">SQUARE SIDE</p>
                        <div className="flex items-center gap-2">
                            <span>X = </span>
                            <select
                                className="border-b border-black bg-transparent outline-none text-[10px]"
                                value={measurements['yawing_y_side_x'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_y_side_x', e.target.value)}
                            >
                                <option value="">-</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>Y = </span>
                            <select
                                className="border-b border-black bg-transparent outline-none text-[10px]"
                                value={measurements['yawing_y_side_y'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_y_side_y', e.target.value)}
                            >
                                <option value="">-</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                            <span>SQUARE NO.</span>
                            <input
                                type="text"
                                className="border-b border-black w-16 bg-transparent outline-none"
                                value={measurements['yawing_y_square_no'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_y_square_no', e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Cell 1,2 Graph Y+ */}
                    <div className="p-1 border-b border-black flex justify-center">
                        <AxisDiagram
                            type="TR"
                            title="Y+ ="
                            value={measurements['yawing_y_plus'] || ''}
                            onChange={(e) => handleMeasurementChange('yawing_y_plus', e.target.value)}
                            labels={[
                                { x: 20, y: 15, text: '- X +', className: 'text-[8px] -rotate-90' },
                                { x: 95, y: 95, text: 'Y' }
                            ]}
                            className="w-full max-w-[120px]"
                        />
                    </div>

                    {/* Cell 1,3 Extra Info */}
                    <div className="p-1 border-b-0">
                        <p className="text-right text-[10px]">Square XY data ≤ 2 μm</p>
                    </div>

                    {/* ROW 2 */}
                    {/* Cell 2,1 */}
                    <div className="p-1 border-b border-black">
                        <div className="flex items-center gap-1">
                            <span>Yawing Y =</span>
                            <span className="border-b border-black w-10 text-center inline-block">
                                {measurements['yawing_y_val']}
                            </span>
                            <span>μm</span>
                        </div>
                        <p className="mt-1 text-[10px]">STD ≤ 2 μm</p>
                        <p className="text-[10px]">P type ≤ 1 μm</p>
                        <div className="flex items-center gap-1 mt-1">
                            <span>DIAL GAUGE NO.</span>
                            <input
                                type="text"
                                className="border-b border-black w-16 bg-transparent outline-none"
                                value={measurements['yawing_y_dial'] || ''}
                                onChange={(e) => handleMeasurementChange('yawing_y_dial', e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Cell 2,2 Graph Yc */}
                    <div className="p-1 border-b border-black flex justify-center">
                        <AxisDiagram
                            type="TR"
                            title="Yc ="
                            value={measurements['yawing_y_center'] || ''}
                            onChange={(e) => handleMeasurementChange('yawing_y_center', e.target.value)}
                            labels={[
                                { x: 20, y: 15, text: '- X 0', className: 'text-[8px] -rotate-90' },
                                { x: 95, y: 10, text: '0', className: 'text-[8px]' },
                                { x: 95, y: 95, text: '+ Y -', className: 'text-[8px]' }
                            ]}
                            className="w-full max-w-[120px]"
                        />
                    </div>

                    {/* Cell 2,3 Empty */}
                    <div className="p-1 border-b-0">
                    </div>

                    {/* ROW 3 */}
                    {/* Cell 3,1 Empty */}
                    <div className="p-1"></div>

                    {/* Cell 3,2 Graph Y- */}
                    <div className="p-1 flex justify-center">
                        <AxisDiagram
                            type="BR"
                            title="Y- ="
                            value={measurements['yawing_y_minus'] || ''}
                            onChange={(e) => handleMeasurementChange('yawing_y_minus', e.target.value)}
                            labels={[
                                { x: 95, y: 15, text: 'Y' },
                                { x: 20, y: 95, text: '- X +', className: 'text-[8px]' }
                            ]}
                            className="w-full max-w-[120px]"
                        />
                    </div>

                    {/* Cell 3,3 Checked By */}
                    <div className="p-1 flex items-end justify-end">
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

export default Page11;
