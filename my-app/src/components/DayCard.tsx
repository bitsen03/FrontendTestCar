import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { selectCurrentDate } from '../redux/currentDateSlice';
import { useSelector } from 'react-redux';
import classNames from 'classnames'

interface DayCardProps {
    children: {year:number, month:number, value:number };
}

const DayCard: React.FC<DayCardProps> = ({children}) => {
    const [isDayOff, setIsDayOff] = useState(false);
    let {day} = useSelector(selectCurrentDate)
    let {year, month, value} = children;

    const monthForFetch = month.toString().padStart(2, '0');
    const dayForFetch = value.toString().padStart(2, '0');

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(`https://isdayoff.ru/${year}${monthForFetch}${dayForFetch}`);
            const data = await response.json();
            setIsDayOff(Boolean(+data));
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
    fetchData()
    }, [year, monthForFetch, dayForFetch])

    const cn = classNames('day-card', {
        isDayOff,
        selectedDay: value === day,
    });
    
    return (
        <div className={cn}>
            <p>{value}</p>
        </div>
    );
}
export default DayCard;