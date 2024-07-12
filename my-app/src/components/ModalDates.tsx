import React from "react"
import classNames from "classnames";

interface ModalDateProps {
    active: boolean,
    setActive: (active: boolean) => void;
}

const ModalDate:React.FC<ModalDateProps> = ({active, setActive}) => { 

const cn = classNames('modal', {
    unActive: !active,
})

return (
    <div className={cn} onClick={()=>setActive(false)}>
        <div className="modal_content" onClick={e => e.stopPropagation()}>
        </div>
    </div>
)
}

export default ModalDate;