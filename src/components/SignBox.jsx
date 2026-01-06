/**
 * SignBox Component
 * กล่องลงนาม Checked By และ Approved By
 */
function SignBox({
    formData = {},
    onChange = () => { }
}) {
    const handleChange = (e) => {
        const { name, value } = e.target;
        onChange({ ...formData, [name]: value });
    };

    const bgHeader = 'bg-gray-300';

    return (
        <div className="mt-12 flex justify-end">
            <div className="w-[45%] border border-black text-sm">
                {/* Checked By */}
                <div className={`${bgHeader} text-center border-b border-black font-medium py-1`}>
                    CHECKED BY
                </div>
                <div className="grid grid-cols-2 border-b border-black">
                    <div className="border-r border-black text-center py-1 bg-white">Code.</div>
                    <div className="text-center py-1 bg-white">Name</div>
                </div>
                <div className="grid grid-cols-2 border-b border-black h-16 bg-yellow-300">
                    <div className="border-r border-black h-full">
                        <input
                            name="checkCode"
                            value={formData.checkCode || ''}
                            onChange={handleChange}
                            className="w-full h-full bg-transparent text-center outline-none"
                        />
                    </div>
                    <div className="h-full">
                        <input
                            name="checkName"
                            value={formData.checkName || ''}
                            onChange={handleChange}
                            className="w-full h-full bg-transparent text-center outline-none"
                        />
                    </div>
                </div>

                {/* Approved By */}
                <div className={`${bgHeader} text-center border-b border-black font-medium py-1`}>
                    APPROVED BY
                </div>
                <div className="grid grid-cols-2 border-b border-black">
                    <div className="border-r border-black text-center py-1 bg-white">Code.</div>
                    <div className="text-center py-1 bg-white">Name</div>
                </div>
                <div className="grid grid-cols-2 h-16 bg-yellow-300">
                    <div className="border-r border-black h-full">
                        <input
                            name="approveCode"
                            value={formData.approveCode || ''}
                            onChange={handleChange}
                            className="w-full h-full bg-transparent text-center outline-none"
                        />
                    </div>
                    <div className="h-full">
                        <input
                            name="approveName"
                            value={formData.approveName || ''}
                            onChange={handleChange}
                            className="w-full h-full bg-transparent text-center outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignBox;
