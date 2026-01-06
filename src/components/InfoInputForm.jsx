/**
 * InfoInputForm Component
 * ฟอร์มกรอกข้อมูลเครื่องจักร: Model, Spec, Machine No., Controller No., Start/Finish Date, Option
 */
function InfoInputForm({
    formData = {},
    onChange = () => { }
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...formData, [name]: value });
    };

    const bgGreenLight = 'bg-green-200';

    return (
        <div className="mt-12 flex justify-center">
            <table className="w-[65%] border-collapse table-fixed">
                <colgroup>
                    <col style={{ width: '40%' }} />
                    <col style={{ width: '60%' }} />
                </colgroup>
                <tbody>
                    {/* Model Row */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">MODEL:</td>
                        <td className={`border-b border-black ${bgGreenLight} p-0 h-9 relative`}>
                            <select
                                name="model"
                                value={formData.model || ''}
                                onChange={handleChange}
                                className="w-full h-full bg-transparent text-center outline-none font-medium text-sm appearance-none cursor-pointer"
                            >
                                <option value="">Select Model</option>
                                <option value="AG80L (LST)">AG80L (LST)</option>
                                <option value="AG100L">AG100L</option>
                            </select>
                        </td>
                    </tr>

                    {/* Spec Row */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">SPEC:</td>
                        <td className={`border-b border-black ${bgGreenLight} p-0 h-9 relative`}>
                            <select
                                name="spec"
                                value={formData.spec || ''}
                                onChange={handleChange}
                                className="w-full h-full bg-transparent text-center outline-none font-medium text-sm appearance-none cursor-pointer"
                            >
                                <option value="">Select Spec</option>
                                <option value="SD">SD</option>
                                <option value="CE">CE</option>
                            </select>
                        </td>
                    </tr>

                    {/* Machine No Row */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">MACHINE NO:</td>
                        <td className={`border-b border-black ${bgGreenLight} text-center py-2 font-medium text-sm`}>
                            T-MASTER
                        </td>
                    </tr>

                    {/* Controller No Row */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">CONTROLLER NO.</td>
                        <td className={`border-b border-black ${bgGreenLight} text-center py-2 font-medium text-sm`}>
                            T-MASTER
                        </td>
                    </tr>

                    {/* Inspection Count Row */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">INSPECTION COUNT</td>
                        <td className={`border-b border-black ${bgGreenLight} text-center py-2 font-medium text-sm`}>
                            1
                        </td>
                    </tr>

                    {/* Start Date */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">START DATE :</td>
                        <td className="border-b border-black bg-yellow-300 p-0 h-9">
                            <input
                                type="date"
                                name="startDate"
                                className="w-full h-full bg-transparent text-center outline-none font-medium text-sm"
                                value={formData.startDate || ''}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    {/* Finish Date */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm">FINISH DATE:</td>
                        <td className="border-b border-black bg-yellow-300 p-0 h-9">
                            <input
                                type="date"
                                name="finishDate"
                                className="w-full h-full bg-transparent text-center outline-none font-medium text-sm"
                                value={formData.finishDate || ''}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>

                    {/* Options (Multiple Rows) */}
                    <tr>
                        <td className="text-right pr-4 py-2 font-medium text-sm align-top pt-2">OPTION:</td>
                        <td className="border-b border-black p-0">
                            <div className="flex flex-col">
                                <input name="option1" value={formData.option1 || ''} onChange={handleChange} className="w-full bg-yellow-300 border-b border-black border-dotted h-8 px-2 outline-none" />
                                <input name="option2" value={formData.option2 || ''} onChange={handleChange} className="w-full bg-yellow-300 border-b border-black border-dotted h-8 px-2 outline-none" />
                                <input name="option3" value={formData.option3 || ''} onChange={handleChange} className="w-full bg-yellow-300 border-b border-black border-dotted h-8 px-2 outline-none" />
                                <input name="option4" value={formData.option4 || ''} onChange={handleChange} className="w-full bg-yellow-300 border-b border-black border-dotted h-8 px-2 outline-none" />
                                <input name="option5" value={formData.option5 || ''} onChange={handleChange} className="w-full bg-yellow-300 h-8 px-2 outline-none" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default InfoInputForm;
