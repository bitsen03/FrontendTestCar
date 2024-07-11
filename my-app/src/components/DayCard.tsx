import React from 'react';

interface DayCardProps {
    children: number;
}

const DayCard: React.FC<DayCardProps> = ({children}) => {
    const cn = 'day-card'

    return (
        <div className="day-card">{children}</div>
    );
}
export default DayCard;