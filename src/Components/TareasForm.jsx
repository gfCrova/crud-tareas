import { useState } from "react";

const TareasForm = ({ createTarea }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTarea({
      title,
      description
    });
    setTitle('')
    setDescription('')
  };

  return (
    <form>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        value={title}
        autoFocus
      />
      <textarea 
        placeholder="Escribe la descripción de la tarea.."
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        value={description}
      />
      <button onClick={handleSubmit}>Guardar</button>
    </form>
  );
}

export default TareasForm;
