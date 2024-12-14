import React, { useState } from 'react';

interface TimeGridTableProps {
    startTime: string;
    endTime: string;
    onTotalSquaresChange: (squares: number) => void;
}

const TimeGridTable: React.FC<TimeGridTableProps> = ({
    startTime,
    endTime,
    onTotalSquaresChange
}) => {
    const [selectedSquares, setSelectedSquares] = useState<{ time: string, yard: string }[]>([]);

    const yards = ['A', 'B', 'C', 'D', 'E'];

    const generateTimeSlots = (start: string, end: string) => {
        const slots = [];
        let current = new Date(`1970-01-01T${start}:00`);
        const endTime = new Date(`1970-01-01T${end}:00`);

        while (current <= endTime) {
            slots.push(current.toTimeString().slice(0, 5));
            current.setMinutes(current.getMinutes() + 30);
        }

        return slots;
    };

    const timeSlots = generateTimeSlots(startTime, endTime);

    const handleSquareClick = (time: string, yard: string) => {
        const isSelected = selectedSquares.some(square => square.time === time && square.yard === yard);
        let newSelectedSquares;

        if (isSelected) {
            newSelectedSquares = selectedSquares.filter(square => !(square.time === time && square.yard === yard));
        } else {
            newSelectedSquares = [...selectedSquares, { time, yard }];
        }

        setSelectedSquares(newSelectedSquares);

        // Now pass the number of selected squares instead of total price
        onTotalSquaresChange(newSelectedSquares.length);
    };

    return (
        <div className="flex">
            <table className="min-w-full border-collapse">
                <thead>
                    <tr>
                        <th className="border border-black p-2">Yard</th>
                        {timeSlots.map((time) => (
                            <th key={time} className="border border-black p-2">{time}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {yards.map((yard) => (
                        <tr key={yard}>
                            <td className="border border-black p-2">{yard}</td>
                            {timeSlots.map((time) => (
                                <td
                                    key={time}
                                    className={`border border-black w-12 h-12 cursor-pointer ${selectedSquares.some(square => square.time === time && square.yard === yard) ? 'bg-blue-200' : 'bg-white'}`}
                                    onClick={() => handleSquareClick(time, yard)}
                                />
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TimeGridTable;