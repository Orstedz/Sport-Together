import React, { useState } from 'react';

const initialDynamicItems = [
    { id: 1, title: 'Project Alpha', status: 'In Progress', priority: 'High' },
    { id: 2, title: 'System Upgrade', status: 'Pending', priority: 'Medium' },
    { id: 3, title: 'Security Review', status: 'Completed', priority: 'Critical' },
];

interface DynamicItem {
    id: number;
    title: string;
    status: string;
    priority: string;
}

const HistorySeciton: React.FC = () => {
    const [items, setItems] = useState<DynamicItem[]>(initialDynamicItems);

    const addNewItem = () => {
        const newItem: DynamicItem = {
            id: items.length + 1,
            title: `New Item ${items.length + 1}`,
            status: 'Pending',
            priority: 'Low'
        };
        setItems([...items, newItem]);
    };

    return (
        <section className="flex-grow bg-white shadow-md rounded-lg p-6 border border-gray-200">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-gray-800">Dynamic Content</h2>
                <button
                    onClick={addNewItem}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                    Add Item
                </button>
            </div>

            {/* Scrollable Container */}
            <div className="max-h-[500px] overflow-y-auto">
                {items.map((item) => (
                    <div
                        key={item.id}
                        className="bg-gray-100 p-4 rounded-md mb-4 flex justify-between items-center"
                    >
                        <div>
                            <h3 className="font-medium text-gray-800">{item.title}</h3>
                            <p className="text-sm text-gray-600">Status: {item.status}</p>
                        </div>
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold 
                ${item.priority === 'High' ? 'bg-red-200 text-red-800' :
                                    item.priority === 'Medium' ? 'bg-yellow-200 text-yellow-800' :
                                        'bg-green-200 text-green-800'}`}
                        >
                            {item.priority}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default HistorySeciton;