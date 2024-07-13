import React, { useContext } from "react"
import classNames from "classnames";
import ModalContext from "../../help/ModalContext.ts";
import CreateTask from "./CreateTask.tsx";

const ModalDate: React.FC = () => {
    const { modalActive, setModalActive } = useContext(ModalContext);

    const cn = classNames('modal', {
        'unActive': !modalActive,
    });

    const closeModal = () => {
        setModalActive(false);
    };

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <div className={cn} onClick={closeModal}>
            <div className="modal_content" onClick={stopPropagation}>
                <CreateTask />
            </div>
        </div>
    );
};

export default ModalDate;

