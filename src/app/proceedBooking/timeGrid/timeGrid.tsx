import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';

interface TimeGridTableProps {
    startTime: string;
    endTime: string;
    onTotalSquaresChange?: (squares: number) => void;
}

const TimeGridTable: React.FC<TimeGridTableProps> = ({
    startTime,
    endTime,
    onTotalSquaresChange = () => { }
}) => {
    const [selectedDate, setSelectedDate] = useState<Date>(new Date());
    const [selectedSquares, setSelectedSquares] = useState<{ time: string, yard: string, date: Date }[]>([]);

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
        const isSelected = selectedSquares.some(
            square => square.time === time &&
                square.yard === yard &&
                square.date.toDateString() === selectedDate.toDateString()
        );

        let newSelectedSquares;

        if (isSelected) {
            newSelectedSquares = selectedSquares.filter(
                square => !(
                    square.time === time &&
                    square.yard === yard &&
                    square.date.toDateString() === selectedDate.toDateString()
                )
            );
        } else {
            newSelectedSquares = [
                ...selectedSquares,
                { time, yard, date: new Date(selectedDate) }
            ];
        }

        setSelectedSquares(newSelectedSquares);
        onTotalSquaresChange(newSelectedSquares.length);
    };

    const changeDate = (days: number) => {
        const currentDate = new Date();
        const newDate = new Date(selectedDate);
        newDate.setDate(newDate.getDate() + days);

        if (newDate >= currentDate) {
            setSelectedDate(newDate);
        }
    };

    const isSquareSelected = (time: string, yard: string) => {
        return selectedSquares.some(
            square => square.time === time &&
                square.yard === yard &&
                square.date.toDateString() === selectedDate.toDateString()
        );
    };

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="flex flex-col items-center space-y-4 w-full max-w-full">
            {/* Date Navigation */}
            <div className="flex items-center space-x-4">
                <button
                    onClick={() => changeDate(-1)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <ChevronLeft />
                </button>
                <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span className="text-lg font-semibold">
                        {formatDate(selectedDate)}
                    </span>
                </div>
                <button
                    onClick={() => changeDate(1)}
                    className="p-2 hover:bg-gray-100 rounded-full"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Time Grid Table */}
            <div className="w-full overflow-x-auto">
                <table className="w-full table-fixed border-collapse">
                    <thead>
                        <tr>
                            <th className="border border-black p-2 text-center w-16">Yard</th>
                            {timeSlots.map((time) => (
                                <th key={time} className="border border-black p-2 w-16">{time}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {yards.map((yard) => (
                            <tr key={yard}>
                                <td className="border border-black p-2 text-center w-16">
                                    {yard}
                                </td>
                                {timeSlots.map((time) => (
                                    <td
                                        key={time}
                                        className={`border border-black w-16 h-12 cursor-pointer ${isSquareSelected(time, yard)
                                            ? 'bg-green-200'
                                            : 'bg-white'
                                            }`}
                                        onClick={() => handleSquareClick(time, yard)}
                                    />
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TimeGridTable;