import React, {useState} from "react";

import "/.Model.css";

export const Model = ( { closeModal,onSubmit , defaultValue }) => {
    const [formState, setFormState] = useState(
     defaultValue || {
        page:"",
        description:"",
        status:"Project"
    });

    const [errors, setErrors] = useState("")

    const validateForm = () => {
        if(formState.page  && formState.description && formState.status){
            setErrors("");
            return true;
        }   else{
            let erroField =[];
            for(const [key,value] of object.entries (formState)) {
                if(!value) {
                    errorFields.push(key);
                }
            }
            setError(errorFields.join(","))
            return false;
        }
    };

    const handleChange =(e) => {
        setFormState({
            ...formState,
            [e.target.name]:e.target.value,
        });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if(!validateForm()) return;

        onSubmit(formState);

        closeModal();
    };


    return (
        <div className="modal-container" 
        onClick={(e) =>{

            if(e.target.className ==="modal-container")closeModal ();

        }}
        >

            <div className="modal"> 
            <form>
                <div className="form-group">
                    <label htmlFor="Date">Date</label>
                    <input name="Date" value ={formeState.page} onChange={handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="Description">Description</label>
                    <textarea 
                    name="Description" 
                    value={formState.description} 
                    onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select 
                        name="status" 
                        value={formState.status} 
                        onChange={handleChange}
                        >
                        <option value="project">Project</option>
                        <option value="meeting">Meeting</option>
                        <option value="task">Task</option>

                    </select>
                </div>

                {errors && <div className="error">{'Please include: ${errors}'} </div>}


                <button type="submit" className="btn" onClick={handleSubmit}>
               </button>   
               </form>         
               </div>
        </div>
    );
};
