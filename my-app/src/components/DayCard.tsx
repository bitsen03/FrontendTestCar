import React from 'react';
import { useEffect, useState, useContext } from 'react';
import { selectCurrentDate } from '../redux/currentDateSlice';
import { useDispatch} from 'react-redux';
import classNames from 'classnames'
import ModalContext from '../help/ModalContext.ts';
import { addDay } from '../redux/currentDateSlice';
import {monthString, dayString} from "../help/getDates.ts";
import { selectTasksId } from '../redux/taskSlice.js'; 
import { useSelector } from 'react-redux';

interface DayCardProps {
    children: {year:number, month:number, value:number, daysInMonth:number};
}

const DayCard: React.FC<DayCardProps> = ({children}) => {
    const [isDayOff, setIsDayOff] = useState(false);
    const dispatch = useDispatch();

    let {year, month, value} = children;
    const {setModalActive} = useContext(ModalContext);
    const id = `${year}/${monthString(month)}/${dayString(value)}`
    const tasks = useSelector(state => selectTasksId(state, id))
    const monthForFetch = month.toString().padStart(2, '0');
    const dayForFetch = value.toString().padStart(2, '0');

    const handleDayCard = () => {
        dispatch(addDay(value))
        setModalActive(true)
    } 

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
        haVeTask: tasks !== undefined && tasks.length !== 0
    });
    
    return (
        <div className={cn} onClick={handleDayCard}>
            <p>{value}</p>
        </div>
    );
}
export default DayCard;