import { useState } from "react";
import ".App.css";
import { Model } from "./Model";

function App() {
    const[modalOpen,setModalOpen] = useState(false);

    const  [rows, setRows]  = useState ([
        {date:"September 25" , description:" Email Corresponding ", status: "Project"},
        {date:"September 26" , description:" Data Entry ", status: "Meeting"},
        {date:"September 27" , description:" Product Launch ", status: "Task"},

    ]);
    const[rowToEdit,setRowToEdit] = useState(null)

    const handleDeleteRow = (targetIndex) =>  {
        setRows(rows.filter ((_,idx) => idx !== targetIndex))
    };

    const handleEditRow = (idx) =>  {

        setRowToEdit(idx);

        setModalOpen(true);
    };

    
    const handleSubmit = (newRow) => {
        rowToEdit ===  null?
        setRows([...rows,newRow]):
        setRows(rows.map((currRow,idx) => {

            if(idx !==rowToEdit) return currRow

            return newRow;
        })
        );

    };

    return (

    <div ClassName="App">
    <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
    <button className="btn"  onClick ={ () =>setModalOpen(true)}>
        Add
    </button>
    {modalOpen &&  (

     <Model 
         closeModal ={() => {
        setModalOpen(false);
        setRowToEdit(null);
    }}
    onSubmit={handleSubmit}
    defaultValue={rowToEdit !== null &&  rows[rowToEdit]}


    />
    )}

    </div>
 );
}

export default App;