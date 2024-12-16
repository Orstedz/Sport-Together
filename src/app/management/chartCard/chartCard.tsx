import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ChartCardProps {
    title: string;
    data: Array<{ name: string; value: number }>;
}

const ChartCard: React.FC<ChartCardProps> = ({ title, data }) => {
    return (
        <div className="flex-1 bg-white shadow-md rounded-lg p-4 border border-gray-200">
            <h2 className="text-lg font-semibold mb-4 text-gray-700">{title}</h2>
            <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="value" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default ChartCard;