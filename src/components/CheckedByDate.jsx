/**
 * CheckedByDate Component
 * กล่องลงชื่อและวันที่ตรวจสอบ
 * 
 * Props:
 * - name: ค่าชื่อ
 * - date: ค่าวันที่
 * - onNameChange: callback เมื่อชื่อเปลี่ยน
 * - onDateChange: callback เมื่อวันที่เปลี่ยน
 * - title: หัวข้อ (default: "CHECKED BY / DATE")
 * - width: ความกว้าง (default: "w-32")
 * - height: ความสูงพื้นที่สีเหลือง (default: "h-16")
 * - hideLabel: ซ่อน header (default: false)
 * - compact: ขนาดเล็กกว่าปกติ (default: false)
 */
function CheckedByDate({
    name = '',
    date = '',
    onNameChange = () => { },
    onDateChange = () => { },
    title = 'CHECKED BY / DATE',
    width = 'w-32',
    height = 'h-16',
    hideLabel = false,
    compact = false
}) {
    return (
        <div className={`border border-black ${width}`}>
            {/* Header - Show only if hideLabel is false */}
            {!hideLabel && (
                <div className={`bg-gray-300 px-2 py-1 font-bold text-center border-b border-black ${compact ? 'text-[10px]' : 'text-xs'}`}>
                    {title}
                </div>
            )}

            {/* Input Area - 70% Name, 30% Date */}
            <div className={`${height} bg-yellow-300 flex flex-col`}>
                {/* Name/Signature - 70% */}
                <div className="flex-[7] border-b border-black border-dashed">
                    <input
                        type="text"
                        className={`w-full h-full bg-transparent text-center outline-none ${compact ? 'text-xs' : 'text-sm'}`}
                        placeholder=""
                        value={name}
                        onChange={(e) => onNameChange(e.target.value)}
                    />
                </div>

                {/* Date - 30% */}
                <div className="flex-[3]">
                    <input
                        type="text"
                        className={`w-full h-full bg-transparent text-center outline-none ${compact ? 'text-[10px]' : 'text-xs'}`}
                        placeholder="DD/MM/YY"
                        value={date}
                        onChange={(e) => onDateChange(e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}

export default CheckedByDate;
