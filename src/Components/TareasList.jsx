import TareasCard from './TareasCard'
import {useContext} from 'react'
import {TareasContext} from '../context/TareasContext'

const TareasList = () => {

    const {tasks} = useContext(TareasContext)

    if (tasks.length === 0) {
        return <h1 className='text-4xl text-white text-center py-3'
        >No hay tareas aún</h1>
    }
    return (
        <div className='grid grid-cols-3 gap-2 p-3'>
            {tasks.map((tarea) => (
                <TareasCard key={tarea.id} tarea={tarea}/>
            ))}
        </div>
    )
}

export default TareasList