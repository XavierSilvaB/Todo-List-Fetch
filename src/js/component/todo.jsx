import React,{useState} from 'react';
import "../../styles/todo.css"

export const Todo = () => {
    
    const [tasklist , setTasklist] = useState([]);
    const [task , setTask] = useState("");

    const BURL = "https://assets.breatheco.de/apis/fake/todos/user/j3suschf";
    const ACTZ = {
        method: "PUT",
        body: JSON.stringify(tasklist),
        headers: {
          "Content-Type": "application/json"
        }
      }

    const INIT = {
        method: "POST",
        body: [],
        headers: {
          "Content-Type": "application/json"
        }
      }
    
    const DEL = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }

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
                
                fetch(BURL, ACTZ )
                  .then(resp => {
                      
                    console.log(resp.ok);  
                      
                    if(resp.status == 200){
                        console.log(resp.status);
                        console.log("Se actualizo con exito")
                        return resp.json();
                        }
                    else{
                        console.log(`Hubo un error ${resp.status} durante el request`)
                        }    
                  })
                  .then(data => {
                        console.log(data)                                   
                    })
                  .catch(error => {
                      console.error(error);
                  });
            
        }
    }

    const handlerButtomDelete = async (indexid) => {


        let filtertasklist = tasklist.filter((tarea , index)=> (index != indexid));
        
        if(filtertasklist.length > 0){
			let response = await fetch(BURL, ACTZ);
			if (response.ok) {
				setTasklist(filtertasklist);
			} else {
				alert("ERROR");			
                }
		} else {
			let response = await fetch(BURL, DEL);
			if (response.ok) {
				setTasklist([]);
			} else {
				alert("ERROR");
			}
		}
    };
    
    const handlerDelete = () =>
        {
            setTasklist(tasklist.length = [])

            fetch(BURL, DEL )
            .then(resp => {
                
              console.log(resp.ok);  
                
              if(resp.status == 200){
                  console.log(resp.status);
                  console.log("Se elimino con exito");
                  return resp.json();
                  }
              else{
                  console.log(`Error ${resp.status}, no se pudo borrar`);
                  }    
            })
            .then(data => {})
            .catch(error => {
                console.error(error);
            });
        }     
        
        

        return (

    <div className='row mt-5'>
        <h1 id="ti">To do list</h1>
        <div className='col-4'>
        <div className='card-text border-dark mt-3'>
                    <div className="form-floating mb-3">
                        <input onChange={handlerTask} value={task} onKeyDown={handlerKeyPress} type="text" className="form-control" id="floatingInput" placeholder="Tarea por hacer"/>
                        <label id="f1" htmlFor="floatingInput"> Agrega una Tarea</label>
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
                            <h4>{i+1}. {tarea.label}</h4>
                            <button type="button" className="btn-close " onClick={(event) => handlerButtomDelete(i)}></button>
                        </div>
                    </div>                    
                           );
                           })}
            </div>
        <div className='col-3'>
            <button type="button" className="btn btn-danger btn-lg" onClick={(event) => handlerDelete()}>{mensaje()}</button>
        </div>
    </div>
  )
}
