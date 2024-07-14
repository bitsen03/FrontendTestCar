import React, {useState} from "react";
import { removeTask, setCompletTask } from "../../redux/taskSlice";
import { useDispatch} from 'react-redux';

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
    const { name, time, selectedColor, completeTask } = children;
    const [completeTask1, setCompleteTask] = useState(completeTask);
    const dispatch = useDispatch()

    const handleCheckTask = () => {
        setCompleteTask(!completeTask1)
        dispatch(setCompletTask({id, index, value:completeTask1}))
    }

    const handleDeleteBtn = () => {
        dispatch(removeTask({id, index}))
    }

   

    return (
        <div className="task-and-delete">
        <button type="button" className="delete-btn"
        onClick={handleCheckTask}
        style={{ "--selectedColor": selectedColor } as React.CSSProperties}
        >{completeTask1 ? "✓" : null}</button>

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
