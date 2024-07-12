import React, { useContext } from "react"
import classNames from "classnames";
import ModalContext from "../help/ModalContext.ts";

const ModalDate:React.FC<ModalDateProps> = () => { 

const {modalActive, setModalActive} = useContext(ModalContext)

const cn = classNames('modal', {
    unActive: !modalActive,
})

return (
    <div className={cn} onClick={()=>setModalActive(false)}>
        <div className="modal_content" onClick={e => e.stopPropagation()}>
        </div>
    </div>
)
}

export default ModalDate;