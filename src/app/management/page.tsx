import React from 'react';
import Header from '../../components/header/header';
import ChartCard from './chartCard/chartCard';
import DynamicContentSection from './dynamicContentSection/dynamicContentSection';

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
            <Header />
            <main className="flex-grow flex flex-col p-6">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Management Dashboard</h1>

                {/* Top Charts Section */}
                <section className="flex space-x-4 mb-6">
                    {chartMocks.map((chart, index) => (
                        <ChartCard
                            key={index}
                            title={chart.title}
                            data={chart.data}
                        />
                    ))}
                </section>

                {/* Dynamic Content Section */}
                <DynamicContentSection />
            </main>
        </div>
    );
};

export default Management;