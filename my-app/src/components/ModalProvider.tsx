import ModalContext from "../help/ModalContext.ts";
import React, {useState} from "react";

const ModalProvider = ({ children }) => {  
    const [modalActive, setModalActive] = useState(false);

    return (
      <ModalContext.Provider value={{modalActive, setModalActive}}>
        {children}
      </ModalContext.Provider>
    );
  };
  
export default ModalProvider;