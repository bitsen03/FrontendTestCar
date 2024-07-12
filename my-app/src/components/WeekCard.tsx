import DayCard from "./DayCard.tsx";
import React from "react";

interface WeekCardProps {
    children: number[];
    keys: string,
}

const WeekCard: React.FC<WeekCardProps> = ({children, keys}) => {
    const cn = `week-card ${keys}`
    return (
        <div className={cn}>
            {children.map((date, i) =><DayCard key={i}>{date}</DayCard>)}
        </div>
    );
}
export default WeekCard;