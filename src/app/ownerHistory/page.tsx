import React from "react";
import OwnerHeader from "../../components/header/ownerHeader";
import HistorySeciton from "./historySection/historySection";

const OwnerHistory: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <OwnerHeader />
            <HistorySeciton />
        </div >
    );
}

export default OwnerHistory;