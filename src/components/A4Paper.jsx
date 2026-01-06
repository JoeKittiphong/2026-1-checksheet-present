/**
 * A4Paper Component
 * แสดงหน้ากระดาษ A4 ขนาดคงที่
 * A4 Size: 210mm x 297mm
 */
function A4Paper({ children, className = '', innerPadding = '' }) {
    return (
        <div className="min-h-screen bg-gray-400 py-8 px-4 flex justify-center overflow-auto">
            <div
                className={`
          bg-white 
          shadow-2xl 
          border border-gray-300
          p-[10mm]
          box-border
          relative
          shrink-0
          ${className}
        `}
                style={{
                    width: '210mm',
                    height: '297mm',
                }}
            >
                {/* Inner content border */}
                <div className={`w-full h-full border-2 border-black relative overflow-hidden ${innerPadding}`}>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default A4Paper;
