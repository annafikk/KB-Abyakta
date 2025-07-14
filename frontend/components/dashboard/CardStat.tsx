import React from "react";

interface CardStatProps {
    title: string;
    value: number;
    colorClass?: string;
}

export default function CardStat({ title, value, colorClass = "" }: CardStatProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className={`text-3xl font-bold mt-2 ${colorClass}`}>{value}</p>
        </div>
    );
}
