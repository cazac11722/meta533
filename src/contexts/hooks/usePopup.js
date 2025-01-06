import React, { createContext, useContext, useState } from "react";
import PopupContent from "../PopupContent";

const PopupContext = createContext();

export const PopupProvider = ({ children }) => {
    const [popupState, setPopupState] = useState({
        isOpen: false,
        type: null,
        setData: null,
    });

    const openPopup = ({type, setData}) => setPopupState({ isOpen: true, type : type, setData :  setData});
    const closePopup = () => setPopupState({ isOpen: false, type: null });
    
    return (
        <PopupContext.Provider value={{ popupState, openPopup, closePopup }}>
            {children}
            {popupState.isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <PopupContent type={popupState.type} onClose={closePopup} setData={popupState.setData} />
                </div>
            )}
        </PopupContext.Provider>
    );
};

export const usePopup = () => useContext(PopupContext);
