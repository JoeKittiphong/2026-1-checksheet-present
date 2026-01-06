/**
 * TorqueCheckTable Component
 * Table for torque check data with ACTION BY and DOUBLE CHECK inputs
 */
function TorqueCheckTable({ data, measurements, onMeasurementChange }) {
    return (
        <div className="border border-black">
            <table className="w-full border-collapse text-center">
                <thead>
                    <tr className="bg-gray-100 font-bold border-b border-black">
                        <th className="border-r border-black py-2 w-[40px]">NO.</th>
                        <th className="border-r border-black py-2">PART NAME</th>
                        <th className="border-r border-black py-2">POINT CHECK</th>
                        <th className="border-r border-black py-2 w-[50px]">QTY.</th>
                        <th className="border-r border-black py-2 w-[100px] text-[10px]">TORQUE(Kgf.cm)</th>
                        <th className="border-r border-black py-2">ACTION BY</th>
                        <th className="py-2">DOUBLE CHECK</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row) => (
                        row.points.map((point, pIndex) => (
                            <tr key={point.id} className="border-b border-black hover:bg-gray-50 h-8">
                                {pIndex === 0 && (
                                    <>
                                        <td rowSpan={row.points.length} className="border-r border-black align-middle">{row.no}</td>
                                        <td rowSpan={row.points.length} className="border-r border-black align-middle">{row.part}</td>
                                    </>
                                )}
                                <td className="border-r border-black align-middle px-2 text-left">{point.name}</td>
                                <td className="border-r border-black align-middle">{point.qty}</td>
                                <td className="border-r border-black align-middle">{point.torque}</td>
                                <td className="border-r border-black p-0">
                                    <input
                                        type="text"
                                        className="w-full h-full text-center bg-transparent outline-none"
                                        value={measurements[`action_by_${point.id}`] || ''}
                                        onChange={(e) => onMeasurementChange(`action_by_${point.id}`, e.target.value)}
                                    />
                                </td>
                                <td className="p-0">
                                    <input
                                        type="text"
                                        className="w-full h-full text-center bg-transparent outline-none"
                                        value={measurements[`double_check_${point.id}`] || ''}
                                        onChange={(e) => onMeasurementChange(`double_check_${point.id}`, e.target.value)}
                                    />
                                </td>
                            </tr>
                        ))
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TorqueCheckTable;
