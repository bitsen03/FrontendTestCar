import React, {useState} from "react";
import { removeTask, setCompletTask } from "../../redux/taskSlice";
import { useDispatch, useSelector} from 'react-redux';
import { selectCompletTasksId } from "../../redux/taskSlice";


interface ModalContentProps {
    children: {
        name: string;
        selectedColor: string;
        time: string;
        completeTask: boolean;
    };
    id:string;
    index:number;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, id, index}) => {
    const { name, time, selectedColor} = children;
    const completeTask = useSelector(state => selectCompletTasksId(state, id, index))
    const dispatch = useDispatch();

    const handleCheckTask = () => {
        dispatch(setCompletTask({id, index, value:!completeTask}))
    }

    const handleDeleteBtn = () => {
        dispatch(removeTask({id, index}))
    }

   

    return (
        <div className="task-and-delete">
        <button type="button" className="delete-btn"
        onClick={handleCheckTask}
        style={{ "--selectedColor": selectedColor } as React.CSSProperties}
        >{completeTask ? "✓" : null}</button>

        <div className="task"
        style={{ "--selectedColor": selectedColor } as React.CSSProperties}
        >
            <div className="name-task-modal">{name}</div>
            <div>{time}</div>
        </div>
        <button type="button" className="delete-btn"
        onClick={handleDeleteBtn}
        style={{ "--selectedColor": selectedColor } as React.CSSProperties}
        >
        -
        </button>
        </div>
    );
};

export default ModalContent;
