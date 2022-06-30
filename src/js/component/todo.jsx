import React,{useState} from 'react';
import "../../styles/todo.css"

export const Todo = () => {
    
    const [tasklist , setTasklist] = useState([]);
    const [task , setTask] = useState("");

    const handlerTask = (event) => { setTask(event.target.value)}
   
    const handlerKeyPress = (event) => {
        // event.preventDefault();
        if (event.key == 'Enter' && task != "") {
                setTasklist([...tasklist, task]);
                setTask("");
        }
    }
    const handlerButtomDelete = (indexid) => setTasklist(tasklist.filter((tarea , index)=> (index != indexid)))
            
    return (
   
    <div className='row mt-5'>
        <div className='col-3'></div>
            <div className='col-6'>
                <div className='Card border-dark'>
                    <div className="form-floating mb-3">
                        <input onChange={handlerTask} value={task} onKeyDown={handlerKeyPress} type="text" className="form-control" id="floatingInput" placeholder="Tarea por hacer"/>
                        <label for="floatingInput">Tarea por hacer</label>
                    </div>
                </div>
                    {tasklist.map((tarea , i)=>{
                    return ( 

                        <div className='Card card m-1' key={i}>
                            <div className="modal-header">                             
                                <h4 className="modal-title" >{tarea}
                                    <button type="button" className="btn-close btn-danger" onClick={(event) => handlerButtomDelete(i)}></button>
                                </h4>
                                
                            </div>
                        </div>
                           );
                           })}
                
            </div>
        <div className='col-3'></div>
    </div>
  )
}
