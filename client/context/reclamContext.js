

import React, { createContext,useEffect } from "react";
import { useUserContext } from "./userContext";


const  ReclamsContext = createContext();

const serverUrl = "http://localhost:8000/api/v1";

export const ReclamsProvider = ({ children }) => {

    const userId = useUserContext().user._id;

    const [reclams, setReclams] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [reclam, setReclam] = React.useState({});

    const [priority, setPriority] = React.useState("all");


    //get rclams 

    const getRclams = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`${serverUrl}/api/v1/reclams`);
            setReclams(response.data);
   
        } catch (error) {
            console.log("Error getting reclams", error);
        }
            setLoading(false);
        
    };

    // get reclam by id

    const getRclam = async (reclamId) => {
        setLoading(true);
        try {
            const res = await axios.get(`${serverUrl}/reclam/${reclamId}`);
            setReclam(response.data);
   
        } catch (error) {
            console.log("Error getting reclam", error);
        }
            setLoading(false);
        
    };


       // create reclam 
       const createRclam = async (reclam) => {
        setLoading(true);
        try {
            const res = await axios.post(`${serverUrl}reclam/create`, reclam); 
                setReclams([...reclams, res.data]);
            
          
           
        } catch (error) {
            console.log("Error creating reclam", error);
        }
            setLoading(false);
        
       };



       // update reclam
       const updateRclam = async (reclam) => {
        setLoading(true);
        try {
            const res = await axios.put(`${serverUrl}reclam/${reclam._Id}`, reclam); 

            const newReclams = reclams.map((reclam) =>{
                return reclam._id === res.data._id ? res.data : reclam;
        });
          
           setReclams(newReclams);
        } catch (error) {
            console.log("Error updating reclam", error);
        }
        
       };

       // delete task 

       const deleteRclam = async (reclamId) => {
        setLoading(true);
        try {
            await axios.delete(`${serverUrl}reclam/${reclamId}`);
            

            const newReclams = reclams.filter((reclam) => reclam._id !== reclamId);


        } catch (error) {
            console.log("Error deleting reclam", error);
        }        
       };
    

    useEffect(() => {
        getRclams();
    }, [userId]);


    return (
        <ReclamsContext.Provider
         value={{
            reclams, 
            reclam,
            reclams,
            loading,
            createRclam,
            getRclams,
            getRclam,
            updateRclam,
            deleteRclam,
            priority,
            setPriority


        }}>
            {children}
            </ReclamsContext.Provider>
    
)};

export const useReclams = () => {
    return React.useContext(ReclamsContext);
};
