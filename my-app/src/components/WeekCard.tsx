import React from "react";
import DayCard from "./DayCard.tsx";

interface WeekCardProps {
    children: { year: number; month: number; value: number; daysInMonth: number }[];
    keys: string;
}

const WeekCard: React.FC<WeekCardProps> = ({ children, keys }) => {
    const cn = `week-card ${keys}`;
    return (
        <div className={cn}>
            {children.map((date, index) => (
                <DayCard key={index}>{date}</DayCard>
            ))}
        </div>
    );
}

export default WeekCard;
