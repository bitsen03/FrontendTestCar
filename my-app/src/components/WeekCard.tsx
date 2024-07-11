import daysOfWeek from "../help/daysOfWeek.ts";
import DayCard from "./DayCard.tsx";
import React from "react";

interface WeekCardProps {
    children: number[];
    keys: string,
}

const WeekCard: React.FC<WeekCardProps> = ({children, keys}) => {
    const className = `week-card ${keys}`
    return (
        <div className={className}>
            {children.map((child, i) =><DayCard key={i} >{child}</DayCard>)}
        </div>
    );
}
export default WeekCard;