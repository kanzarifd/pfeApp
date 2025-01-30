import asyncHandler from "express-async-handler";
import ReclamModel from "../../models/reclams/ReclamModel.js";
export const createReclam = asyncHandler(async (req, res) => {

try { 
 const { title, description, dueDate, priority, status } = req.body;

if(!title || title.trim() === "") {
   res.status(400).json({ message: "Title is required!" });
}

if(!description || description.trim() === ""){
     res.status(400).json({ message: "Description is required!" });
}

const newReclam = new ReclamModel({
    title,
    description,
    dueDate,
    priority,
    status,
    user: req.user._id,

});
    
  

await newReclam.save();

res.status(201).json(newReclam);


} catch (error) {

    console.log("Error creating reclam: ", error.message);

res.status(500).json({ message: error.message });


} 


});

export const getReclams = asyncHandler(async (req, res) => {

    try {
        const userId = req.user._id;

        if(!userId) {
            res.status(400).json({ message: "User not found" });
        }



        const reclams = await ReclamModel.find({ user: userId });

        res.status(200).json(
            {
                length: reclams.length,
                reclams,
            }
        );

        
    } catch (error) {

        console.log("Error creating reclam: ", error.message);

        res.status(500).json({ message: error.message });
        
    }




});

export const getReclam = asyncHandler(async (req, res) => {

try  {

    const userId = req.user._id;
    
    const { id } = req.params;

        if(!id) {
            res.status(400).json({ message: "Id is required" });
}

const reclam = await ReclamModel.findById(id);

if(!reclam) {
    res.status(404).json({ message: "Reclam not found" });
}

if(!reclam.user.equals(userId)) {   
    res.status(401).json({ message: "not authorized" });

}


res.status(200).json(reclam);
}catch (error) { 
    console.log("Error getting reclam: ", error.message);

res.status(500).json({ message: error.message });
}





});





export const updateReclam = asyncHandler(async (req, res) => {

    try {

        const  userId  = req.user._id;
        const { id } = req.params;
        const { title, description, dueDate, priority, status,completed } = 
        req.body;

        if(!id) {
            res.status(400).json({ message: "Id is required" });
        }

        const reclam = await ReclamModel.findById(id);

        if(!reclam) {
            res.status(404).json({ message: "Reclam not found" });
        }

        // chekc if the user is the owner of the reclam 
        if (!reclam.user.equals(userId)) {
            res.status(401).json({ message: "not authorized" });
               }


            //update the task with the new data provided or keep the old data
             
            reclam.title = title || reclam.title;
            reclam.description = description || reclam.description;
            reclam.dueDate = dueDate || reclam.dueDate;
            reclam.priority = priority || reclam.priority;
            reclam.status = status || reclam.status;
            reclam.completed = completed || reclam.completed;

            await reclam.save();

            return res.status(200).json(reclam);

    }catch(error) {
        console.log("Error updating reclam: ", error.message);

        res.status(500).json({ message: error.message });
    }


});



export const deleteReclam = asyncHandler(async (req, res) => {


try {
    const userId = req.user._id;
    const { id } = req.params;


        const reclam = await ReclamModel.findById(id);

        if(!reclam) {
            res.status(404).json({ message: "Reclam not found" });
        }

        //chck if the user is the owner of the reclam

        if (!reclam.user.equals(userId)) {
            res.status(401).json({ message: "not authorized" });
        }

        await ReclamModel.findByIdAndDelete(id);

        return res.status(200).json({ message: "Reclam deleted successfully" });




}catch(error) {
    console.log("Error deleting reclam: ", error.message);

    res.status(500).json({ message: error.message });

}


});

