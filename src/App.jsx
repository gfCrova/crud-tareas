import TareasList from './Components/TareasList'
import TareasForm from './Components/TareasForm'
import {tasks as data} from './data/tasks'
import {useState, useEffect} from 'react'

const App = () => {

  const [tareas, setTareas] = useState([])

    useEffect(() => {
        setTareas(data)
    }, [])

  const createTarea = (tarea) => {
    setTareas([...tareas, {
      id : tarea.length,
      title : tarea.title,
      description : tarea.description
    }])
  }

  const borrarTarea = (tareaId) => {
    setTareas(tareas.filter(tarea => tarea.id !== tareaId))
  }

  return (
    <div>
        <TareasForm createTarea={createTarea}/>
        <TareasList tareas={tareas} borrarTarea={borrarTarea}/>
    </div>
  )
}

export default App