import React,{useState} from 'react';
import "../../styles/todo.css"

export const Todo = () => {
    
    const [tasklist , setTasklist] = useState([]);
    const [task , setTask] = useState("");


    const mensaje2 = () =>{
        if(tasklist.length == 0){
            return "No hay tareas pendientes"
        }
        else{
            return `${tasklist.length} tareas pendientes`
        }
    }

    const mensaje = () =>{
        if(tasklist.length == 0){
            return "No hay tareas para mostrar"
        }
        else{
            return "Eliminar todas las Tareas"
        }
    }
    const handlerTask = (event) => { setTask(event.target.value)}
   
    const handlerKeyPress = (event) => {
        if (event.key == 'Enter' && task != "") {
                setTasklist([...tasklist, task]);
                setTask("");
        }
    }
    const handlerButtomDelete = (indexid) => setTasklist(tasklist.filter((tarea , index)=> (index != indexid)))
    
    const handlerDelete = () =>
        {
            setTasklist(tasklist.length = [])
        }     
        return (
   
    <div className='row mt-5'>
        <h1 id="ti">To do list</h1>
        <div className='col-4'>
        <div className='card-text border-dark mt-3'>
                    <div className="form-floating mb-3">
                        <input onChange={handlerTask} value={task} onKeyDown={handlerKeyPress} type="text" className="form-control" id="floatingInput" placeholder="Tarea por hacer"/>
                        <label id="f1" for="floatingInput"> Agrega una Tarea</label>
                    </div>
                    <div className="row text-muted">
				        <h5>{mensaje2()}</h5>
			        </div>
                </div>
                </div>
            <div className='col-5'>
                    {tasklist.map((tarea , i)=>{
                    return ( 
                        <div className='Card card m-1' key={i}>
                        <div className="modal-header justify-content-between">                             
                            <h4>{i+1}. {tarea}</h4>
                            <button type="button" className="btn-close " onClick={(event) => handlerButtomDelete(i)}></button>
                        </div>
                    </div>                    
                           );
                           })}
            </div>
        <div className='col-3'>
            <button type="button" class="btn btn-danger btn-lg" onClick={(event) => handlerDelete()}>{mensaje()}</button>
        </div>
    </div>
  )
}
