import React from 'react';
import OwnerHeader from '../../components/header/ownerHeader';
import ChartCard from './chartCard/chartCard';
import CourtDetails from './details/details';

const chartMocks = [
    {
        title: 'Revenue Overview',
        data: [
            { name: 'Jan', value: 4000 },
            { name: 'Feb', value: 3000 },
            { name: 'Mar', value: 5000 }
        ]
    },
    {
        title: 'User Growth',
        data: [
            { name: 'Q1', value: 400 },
            { name: 'Q2', value: 600 },
            { name: 'Q3', value: 800 }
        ]
    },
    {
        title: 'Performance Metrics',
        data: [
            { name: 'Speed', value: 85 },
            { name: 'Quality', value: 92 },
            { name: 'Efficiency', value: 78 }
        ]
    }
];

const Management: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <OwnerHeader />
            <div className="text-center mt-12">
                <h1 className="text-3xl font-bold text-green-600" style={{ fontSize: '38px' }}>COURT MANAGEMENT</h1>
            </div>
            <CourtDetails />
            <main className="flex-grow flex flex-col p-6 mt-2">
                <section className="flex space-x-4 mb-6">
                    {chartMocks.map((chart, index) => (
                        <ChartCard
                            key={index}
                            title={chart.title}
                            data={chart.data}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Management;