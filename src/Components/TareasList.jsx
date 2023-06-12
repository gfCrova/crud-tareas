import TareasCard from './TareasCard'

const TareasList = ({tareas, borrarTarea}) => {

    if (tareas.length === 0) {
        return <h1>No hay tareas aún</h1>
    }
    return (
        <div>
            {tareas.map((tarea) => (
                <TareasCard key={tarea.id} tarea={tarea} borrarTarea={borrarTarea}/>
            ))}
        </div>
    )
}

export default TareasList