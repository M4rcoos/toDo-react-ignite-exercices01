import styles from './CreateNewTask.module.css'
import {PlusCircle} from 'phosphor-react'
import {PostedTasks} from './PostedTasks'
import { useState } from 'react'
import { Task } from './Task'


export function CreateNewTask(){
    const [ tasksName, setTaskName ] = useState('')

    const [newTask, setNewTask]= useState([])

    function handleNewCreateTask (event) {
        event.preventDefault()
        setNewTask([...newTask, tasksName  ])
    }
    function handlechange(event){
        event.target.value

        setTaskName (event.target.value)

    }
    return(

        <>
        <form onSubmit={handleNewCreateTask}className={styles.content}>
            <input 
            className={styles.inputCreatedTask} 
            type="text" 
            placeholder='Adicione uma nova tarefa'
            onChange={handlechange}
            />

        <button className={styles.creteTaskBtn}>Criar
            <PlusCircle size={20} />
        </button>
    </form>
   
      <PostedTasks >
      {newTask.map(tasksCreate =>{
        return <Task content ={tasksCreate}/>
       }  )}
        
      </PostedTasks>
   
        </>
        
    )
  
}