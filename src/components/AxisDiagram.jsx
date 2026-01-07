import React from 'react';
import NumericKeypad from './NumericKeypad';

/**
 * AxisDiagram Component
 * A reusable component for drawing X-Y axis graphs with flexible configurations.
 * 
 * Props:
 * - type: 'TR' | 'TL' | 'BR' | 'BL' 
 *   TR: Horizontal(Left->Right) then Vertical(Top->Bottom) meeting at Top-Right
 *   TL: Horizontal(Right->Left) then Vertical(Top->Bottom) meeting at Top-Left
 *   BR: Horizontal(Left->Right) then Vertical(Bottom->Top) meeting at Bottom-Right
 *   BL: Horizontal(Right->Left) then Vertical(Bottom->Top) meeting at Bottom-Left
 * - title: Check title (e.g. "X+ =", "Xc =", "X- =")
 * - value: Input value
 * - onChange: Input change handler
 * - unit: Unit suffix (default "μm")
 * - labels: Array of { x, y, text, className } for custom SVG text positioning (0-100 scale)
 * - tickLabels: Array of { position: 'start'|'end'|'corner'|'x-mid'|'y-mid', text: string }
 */
const AxisDiagram = ({
    type = 'TR',
    title = '',
    value = '',
    onChange,
    unit = 'μm',
    labels = [],
    tickLabels = [],
    className = '',
    redLineOn = 'horizontal'
}) => {
    // SVG ViewBox is 0 0 100 100
    // Margins: 15
    const margin = 15;
    const start = margin;
    const end = 100 - margin;
    const mid = 50;

    // Define line coordinates based on type
    // H: Horizontal Line, V: Vertical Line
    let hLine = { x1: 0, y1: 0, x2: 0, y2: 0 };
    let vLine = { x1: 0, y1: 0, x2: 0, y2: 0 };

    // Ticks/Caps coordinates (End of horizontal, Start of horizontal, End of vertical, etc.)
    let hCap = { x1: 0, y1: 0, x2: 0, y2: 0 };
    let vCap = { x1: 0, y1: 0, x2: 0, y2: 0 };
    let cornerCap = { x1: 0, y1: 0, x2: 0, y2: 0 }; // Only for some diagrams

    // Text anchor positions
    let hTextAnchor = { x: 0, y: 0, anchor: 'middle' };
    let vTextAnchor = { x: 0, y: 0, anchor: 'middle' };

    switch (type) {
        case 'TR': // Top-Horizontal, Right-Vertical (Gamma shape)
            hLine = { x1: start, y1: start + 10, x2: end, y2: start + 10 };
            vLine = { x1: end, y1: start + 10, x2: end, y2: end };
            // Caps
            hCap = { x1: start, y1: start + 5, x2: start, y2: start + 15 }; // Left end of H
            vCap = { x1: end - 5, y1: end, x2: end + 5, y2: end }; // Bottom end of V
            break;

        case 'TL': // Top-Horizontal, Left-Vertical
            hLine = { x1: end, y1: start + 10, x2: start, y2: start + 10 };
            vLine = { x1: start, y1: start + 10, x2: start, y2: end };
            // Caps
            hCap = { x1: end, y1: start + 5, x2: end, y2: start + 15 }; // Right end of H
            vCap = { x1: start - 5, y1: end, x2: start + 5, y2: end }; // Bottom end of V
            break;

        // Add BR/BL if needed, currently based on user images focusing on "Top corner" logic primarily?
        // Let's implement generic logic if inverted
        case 'BR': // Bottom-Horizontal, Right-Vertical
            hLine = { x1: start, y1: end - 10, x2: end, y2: end - 10 };
            vLine = { x1: end, y1: end - 10, x2: end, y2: start };
            hCap = { x1: start, y1: end - 15, x2: start, y2: end - 5 };
            vCap = { x1: end - 5, y1: start, x2: end + 5, y2: start };
            break;

        case 'BL': // Bottom-Horizontal, Left-Vertical
            hLine = { x1: end, y1: end - 10, x2: start, y2: end - 10 };
            vLine = { x1: start, y1: end - 10, x2: start, y2: start };
            hCap = { x1: end, y1: end - 15, x2: end, y2: end - 5 };
            vCap = { x1: start - 5, y1: start, x2: start + 5, y2: start };
            break;

        default:
            break;
    }

    let redLine = null;
    if (value !== '' && !isNaN(parseFloat(value))) {
        const val = parseFloat(value);
        const scale = 3; // Scale factor for visibility

        // Find Intersection
        let intersection = { x: 0, y: 0 };
        // Helper to check point equality
        const isSame = (p1, p2) => Math.abs(p1.x - p2.x) < 0.1 && Math.abs(p1.y - p2.y) < 0.1;

        const hP1 = { x: hLine.x1, y: hLine.y1 };
        const hP2 = { x: hLine.x2, y: hLine.y2 };
        const vP1 = { x: vLine.x1, y: vLine.y1 };
        const vP2 = { x: vLine.x2, y: vLine.y2 };

        if (isSame(hP1, vP1) || isSame(hP1, vP2)) {
            intersection = hP1;
        } else {
            intersection = hP2;
        }

        if (redLineOn === 'horizontal') {
            let hEnd = isSame(intersection, hP1) ? hP2 : hP1;
            // Calculate Target Y for Horizontal Line
            // SVG Y increases downwards.
            // We want +val to go UP (decrease Y), -val to go DOWN (increase Y)
            const targetY = hEnd.y - (val * scale);

            redLine = {
                x1: intersection.x,
                y1: intersection.y,
                x2: hEnd.x,
                y2: targetY
            };
        } else { // redLineOn === 'vertical'
            // Vertical Line
            let vEnd = isSame(intersection, vP1) ? vP2 : vP1;
            // Calculate Target X for Vertical Line
            // We correspond vertical deviation to X.
            // Usually + is Right (Increase X), - is Left (Decrease X).
            const targetX = vEnd.x + (val * scale);

            redLine = {
                x1: intersection.x,
                y1: intersection.y,
                x2: targetX,
                y2: vEnd.y
            };
        }
    }

    return (
        <div className={`flex flex-col items-center border border-black p-2 ${className}`}>
            <div className="relative w-full aspect-square max-w-[150px]">
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                    {/* Main Lines */}
                    <line x1={hLine.x1} y1={hLine.y1} x2={hLine.x2} y2={hLine.y2} stroke="black" strokeWidth="1.5" fill="none" />
                    <line x1={vLine.x1} y1={vLine.y1} x2={vLine.x2} y2={vLine.y2} stroke="black" strokeWidth="1.5" fill="none" />

                    {/* End Caps (Ticks) */}
                    <line x1={hCap.x1} y1={hCap.y1} x2={hCap.x2} y2={hCap.y2} stroke="black" strokeWidth="1.5" />
                    <line x1={vCap.x1} y1={vCap.y1} x2={vCap.x2} y2={vCap.y2} stroke="black" strokeWidth="1.5" />

                    {/* Red Tilt Line */}
                    {redLine && (
                        <line
                            x1={redLine.x1}
                            y1={redLine.y1}
                            x2={redLine.x2}
                            y2={redLine.y2}
                            stroke="red"
                            strokeWidth="2"
                        />
                    )}

                    {/* Custom Labels from props (Percent based) */}
                    {labels.map((lbl, idx) => (
                        <text
                            key={idx}
                            x={lbl.x}
                            y={lbl.y}
                            className={`text-[10px] ${lbl.className || ''}`}
                            textAnchor="middle"
                            dominantBaseline="middle"
                        >
                            {lbl.text}
                        </text>
                    ))}
                </svg>
            </div>

            {/* Input Field with NumericKeypad */}
            <NumericKeypad
                className="flex items-center gap-1 mt-1 w-full justify-center"
                value={value}
                onChange={onChange}
                label={title ? <span className="text-[10px] whitespace-nowrap">{title}</span> : null}
                unit={<span className="text-[10px]">{unit}</span>}
                inputClassName="border-b border-black w-full min-w-[30px] text-center text-[10px] outline-none bg-transparent"
                width="w-full"
            />
        </div>
    );
};

export default AxisDiagram;
