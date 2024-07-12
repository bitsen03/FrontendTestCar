import ModalContext from "../help/ModalContext.ts";
import React, {useState} from "react";

const ModalProvider = ({ children }) => {  
    const [modalActive, setModalActive] = useState(false);
    // Передаем данные и функции в контекст провайдера
    return (
      <ModalContext.Provider value={{modalActive, setModalActive}}>
        {children}
      </ModalContext.Provider>
    );
  };
  
export default ModalProvider;