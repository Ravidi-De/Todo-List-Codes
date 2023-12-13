import React from "react"; 
import {BsFillTrashFill,BsFillPencilFill} from "react-icons/bs";
import "./Table.css";

export const  Table = ({ rows, deleteRow, editRow}) => {
    return (
    <div className="table-wrapper">
        <table className="table">
            <thead> 
                    <tr>
                    <th>Date</th> 
                    <th className="expand">Description</th>
                    <th>Status</th>
                    <th>Actions</th>
                    </tr>   

            </thead>
            <tbody>
                {rows.map(( row, idx) =>{

                    
                    const statusText =
                     row.status.charAt(0).toUpperCase() +  row.status.slice(1);

                        return (
                            <tr key={idx}>

                        <td>{row.Date}</td>
                        <td className="expand">{row.Description}</td>
                        <td>
                        <span className={"label label-${row.status}" }>
                            
                            {statusText}
                        </span>
                        </td>
                        <td className="fit">
                        <span className="actions">
                            <BsFillTrashFill  
                             className="delete-btn" 
                             onClick={() =>deleteRow(idx)}
                             />
                            <BsFillPencilFill
                            className="edit-btn"
                            onClick={ ()=> editRow(idx)}
                            />
                        </span>
                    </td>
                    </tr>
                        );
                

                    })}
                <tr>
                    <td>September 25</td>
                    <td>Email Corresponding</td>
                    <td>
                        <span className="label label-Project">Project</span>
                    </td>
                    <td>
                        <span className="actions">
                            <BsFillTrashFill className="delete-btn"/>
                            <BsFillPencilFill onclick={() => editRow(idx)}/>
                        </span>
                    </td>   

                </tr>
                <tr>
                    <td>September 26</td>
                    <td>Data Entry</td>
                    <td>
                        <span className="label label-Meeting">Meeting</span>
                        </td>
                    <td>
                        <span className="actions">
                            <BsFillTrashFill  className="delete-btn" />
                            <BsFillPencilFill/>
                        </span>
                    </td>        
                </tr>
                <tr>
                    <td>September 27</td>
                    <td>Product Launch </td>
                    <td>
                        <span className="label label-Task">Task</span>
                        </td>
                    <td>
                        <span className="actions">
                            <BsFillTrashFill className="delete-btn"/>
                            <BsFillPencilFill/>
                        </span>
                        </td>        
                </tr>
                
                
            

            </tbody>
        </table>
    </div>
    );
                
};
