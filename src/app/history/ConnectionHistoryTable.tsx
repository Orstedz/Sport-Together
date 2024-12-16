// ./history/ConnectionHistoryTable.tsx
import React, { useState } from 'react';
import { Connection } from './types';

interface ConnectionTableProps {
    connections: Connection[];
    onDelete: (id: string) => void;
}

const ConnectionHistoryTable: React.FC<ConnectionTableProps> = ({ connections, onDelete }) => {
    const [showDialog, setShowDialog] = useState(false);
    const [selectedConnection, setSelectedConnection] = useState<Connection | null>(null);

    const handleDeleteClick = (connection: Connection) => {
        setSelectedConnection(connection);
        setShowDialog(true);
    };

    const handleConfirmCancel = () => {
        if (selectedConnection) {
            onDelete(selectedConnection.id);
            setShowDialog(false);
            setSelectedConnection(null);
        }
    };

    const handleCancel = () => {
        setShowDialog(false);
        setSelectedConnection(null);
    };

    return (
        <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
                <thead>
                    <tr className="bg-green-500 text-white">
                        <th className="py-3 px-4 text-left">Field Name</th>
                        <th className="py-3 px-4 text-left">Time</th>
                        <th className="py-3 px-4 text-left">Host</th>
                        <th className="py-3 px-4 text-left">Status</th>
                        <th className="py-3 px-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {connections.map((connection) => (
                        <tr key={connection.id} className="border-b border-gray-200">
                            <td className="py-3 px-4 text-purple-700 font-medium">
                                {connection.fieldName}
                            </td>
                            <td className="py-3 px-4">{connection.time}</td>
                            <td className="py-3 px-4">{connection.host}</td>
                            <td className="py-3 px-4">
                                <span className={`font-medium ${
                                    connection.status === 'COMPLETED' 
                                        ? 'text-blue-600' 
                                        : connection.status === 'WAITING'
                                        ? 'text-yellow-600'
                                        : 'text-red-600'
                                }`}>
                                    {connection.status}
                                </span>
                            </td>
                            <td className="py-3 px-4 text-center">
                                {connection.status !== 'COMPLETED' && (
                                    <button 
                                        className="bg-red-500 text-white px-4 py-1 rounded"
                                        onClick={() => handleDeleteClick(connection)}
                                    >
                                        Cancel
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Confirmation Dialog */}
            {showDialog && selectedConnection && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg">
                        <h3 className="text-lg font-bold">Confirm Cancellation</h3>
                        <p>Do you want to cancel the connection at {selectedConnection.fieldName} with {selectedConnection.host}?</p>
                        <div className="mt-4 flex justify-end">
                            <button 
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2" 
                                onClick={handleConfirmCancel}
                            >
                                Confirm
                            </button>
                            <button 
                                className="bg-gray-300 text-black px-4 py-2 rounded" 
                                onClick={handleCancel}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ConnectionHistoryTable;