/**
 * NumericKeypad Component
 * A custom numeric keypad for mobile input with numbers 0-9, delete, and +/- toggle
 * Shows when input is focused, hides on mobile to use this instead of system keyboard
 * Supports drag & drop to reposition
 */
import { useState, useRef, useEffect } from 'react';

function NumericKeypad({
    value = '',
    onChange,
    placeholder = '',
    className = '',
    inputClassName = '',
    label = '',
    unit = '',
    width = 'w-24',
    id = '',
    disabled = false,
    allowNegative = true,
    allowDecimal = false,
}) {
    const [showKeypad, setShowKeypad] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

    const containerRef = useRef(null);
    const inputRef = useRef(null);
    const keypadRef = useRef(null);

    // Handle click outside to close keypad
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setShowKeypad(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, []);

    // Handle drag events
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!isDragging) return;
            e.preventDefault();
            setPosition({
                x: e.clientX - dragOffset.x,
                y: e.clientY - dragOffset.y
            });
        };

        const handleTouchMove = (e) => {
            if (!isDragging) return;
            const touch = e.touches[0];
            setPosition({
                x: touch.clientX - dragOffset.x,
                y: touch.clientY - dragOffset.y
            });
        };

        const handleEnd = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleEnd);
            document.addEventListener('touchmove', handleTouchMove, { passive: false });
            document.addEventListener('touchend', handleEnd);
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleEnd);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleEnd);
        };
    }, [isDragging, dragOffset]);

    // Start dragging
    const handleDragStart = (e) => {
        if (keypadRef.current) {
            const rect = keypadRef.current.getBoundingClientRect();
            if (e.type === 'mousedown') {
                setDragOffset({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
                setPosition({
                    x: e.clientX - (e.clientX - rect.left),
                    y: e.clientY - (e.clientY - rect.top)
                });
            } else if (e.type === 'touchstart') {
                const touch = e.touches[0];
                setDragOffset({
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top
                });
                setPosition({
                    x: touch.clientX - (touch.clientX - rect.left),
                    y: touch.clientY - (touch.clientY - rect.top)
                });
            }
            setIsDragging(true);
        }
    };

    // Handle number button press
    const handleNumberPress = (num) => {
        const newValue = value + num.toString();
        onChange && onChange({ target: { value: newValue } });
    };

    // Handle delete button press
    const handleDelete = () => {
        if (value.length > 0) {
            const newValue = value.slice(0, -1);
            onChange && onChange({ target: { value: newValue } });
        }
    };

    // Handle +/- toggle
    const handleToggleSign = () => {
        if (!allowNegative) return;

        if (value.startsWith('-')) {
            onChange && onChange({ target: { value: value.slice(1) } });
        } else if (value.length > 0 && value !== '0') {
            onChange && onChange({ target: { value: '-' + value } });
        }
    };

    // Handle decimal point
    const handleDecimal = () => {
        if (!allowDecimal) return;
        if (!value.includes('.')) {
            const newValue = value.length === 0 ? '0.' : value + '.';
            onChange && onChange({ target: { value: newValue } });
        }
    };

    // Handle input focus
    const handleFocus = () => {
        // Reset position when opening
        setPosition({ x: 0, y: 0 });
        setShowKeypad(true);
    };

    // Keypad button component
    const KeypadButton = ({ onClick, children, className: btnClass = '', variant = 'default' }) => {
        const baseClass = "flex items-center justify-center h-12 text-lg font-medium rounded-lg transition-all duration-150 active:scale-95 select-none";
        const variantClasses = {
            default: "bg-white hover:bg-gray-100 active:bg-gray-200 text-gray-800 border border-gray-200 shadow-sm",
            action: "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white shadow-sm",
            danger: "bg-red-500 hover:bg-red-600 active:bg-red-700 text-white shadow-sm",
        };

        return (
            <button
                type="button"
                onClick={onClick}
                className={`${baseClass} ${variantClasses[variant]} ${btnClass}`}
            >
                {children}
            </button>
        );
    };

    // Calculate keypad style based on position
    const getKeypadStyle = () => {
        if (position.x === 0 && position.y === 0) {
            // Default position (relative to input)
            return {};
        }
        // Fixed position when dragged
        return {
            position: 'fixed',
            left: `${position.x}px`,
            top: `${position.y}px`,
            margin: 0
        };
    };

    return (
        <div ref={containerRef} className={`relative ${className}`}>
            {/* Label and Input */}
            {label && <span>{label}</span>}
            <input
                ref={inputRef}
                type="text"
                id={id}
                inputMode="none" /* ป้องกันแป้นพิมพ์มือถือแสดงขึ้นมา */
                readOnly
                className={`bg-transparent outline-none cursor-pointer ${width} ${inputClassName}`}
                value={value}
                placeholder={placeholder}
                onFocus={handleFocus}
                disabled={disabled}
            />
            {unit && <span>{unit}</span>}

            {/* Keypad Popup */}
            {showKeypad && !disabled && (
                <div
                    ref={keypadRef}
                    className={`${position.x === 0 && position.y === 0 ? 'absolute mt-2' : ''} z-50 p-3 bg-gray-50 border border-gray-300 rounded-xl shadow-2xl print:hidden`}
                    style={getKeypadStyle()}
                >
                    {/* Drag Handle & Close button */}
                    <div
                        className="flex justify-between items-center mb-2 cursor-move select-none"
                        onMouseDown={handleDragStart}
                        onTouchStart={handleDragStart}
                    >
                        <div className="flex items-center gap-2">
                            {/* Drag indicator */}
                            <span className="text-gray-400 text-sm">⋮⋮</span>
                            <span className="text-sm font-medium text-gray-600">ป้อนตัวเลข</span>
                        </div>
                        <button
                            type="button"
                            onClick={() => setShowKeypad(false)}
                            onMouseDown={(e) => e.stopPropagation()}
                            onTouchStart={(e) => e.stopPropagation()}
                            className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 hover:bg-gray-200 rounded-full transition-colors"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Keypad Grid */}
                    <div className="grid grid-cols-3 gap-2 w-48">
                        {/* Row 1: 1, 2, 3 */}
                        <KeypadButton onClick={() => handleNumberPress(1)}>1</KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(2)}>2</KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(3)}>3</KeypadButton>

                        {/* Row 2: 4, 5, 6 */}
                        <KeypadButton onClick={() => handleNumberPress(4)}>4</KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(5)}>5</KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(6)}>6</KeypadButton>

                        {/* Row 3: 7, 8, 9 */}
                        <KeypadButton onClick={() => handleNumberPress(7)}>7</KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(8)}>8</KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(9)}>9</KeypadButton>

                        {/* Row 4: +/-, 0, Delete */}
                        <KeypadButton
                            onClick={handleToggleSign}
                            variant="action"
                            className={!allowNegative ? 'opacity-50 cursor-not-allowed' : ''}
                        >
                            +/−
                        </KeypadButton>
                        <KeypadButton onClick={() => handleNumberPress(0)}>0</KeypadButton>
                        <KeypadButton onClick={handleDelete} variant="danger">
                            ⌫
                        </KeypadButton>

                        {/* Decimal point (if allowed) */}
                        {allowDecimal && (
                            <KeypadButton
                                onClick={handleDecimal}
                                className="col-span-3"
                            >
                                .
                            </KeypadButton>
                        )}
                    </div>

                    {/* Done button */}
                    <button
                        type="button"
                        onClick={() => setShowKeypad(false)}
                        className="w-full mt-2 py-2 bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-medium rounded-lg transition-colors"
                    >
                        ตกลง
                    </button>
                </div>
            )}
        </div>
    );
}

export default NumericKeypad;
