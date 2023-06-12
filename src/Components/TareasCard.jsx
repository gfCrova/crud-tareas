
const TareasCard = ({tarea, borrarTarea}) => {

  return (
    <div key={tarea.id}>
        <h1>{tarea.title}</h1>
        <p>{tarea.description}</p>
        <button onClick={() => {borrarTarea(tarea.id)}}
        >Eliminar</button>
    </div>
  )
}

export default TareasCard