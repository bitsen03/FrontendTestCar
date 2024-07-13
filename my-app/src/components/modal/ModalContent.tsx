import React from "react";
import { removeTask } from "../../redux/taskSlice";
import { useDispatch, useSelector} from 'react-redux';

interface ModalContentProps {
    children: {
        name: string;
        selectedColor: string;
        time: string;
    };
    id:string;
    index:number;
}

const ModalContent: React.FC<ModalContentProps> = ({ children, id, index}) => {
    const { name, time, selectedColor } = children;
    const dispatch = useDispatch()
    const handleDeleteBtn = () => {
        dispatch(removeTask({id, index}))
    }

    return (
        <div className="task-and-delete">
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
