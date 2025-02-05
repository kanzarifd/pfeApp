

import React, { createContext } from "react";


const  ReclamsContext = createContext();


export const ReclamsProvider = ({ children }) => {
    const [reclams, setReclams] = React.useState([  
        { id: 1, title: "Reclam 1", description: "Description 1",status: "pending" },
        { id: 2, title: "Reclam 2", description: "Description 2",status: "pending" },
        { id: 3, title: "Reclam 3", description: "Description 3",status: "pending" },
    ]);


    return (
        <ReclamsContext.Provider
         value={{
            reclams, 


        }}>
            {children}
            </ReclamsContext.Provider>
    
)};

export const useReclams = () => {
    return React.useContext(ReclamsContext);
};
