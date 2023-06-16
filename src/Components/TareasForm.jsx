import { useState, useContext } from "react";
import { TareasContext } from "../context/TareasContext";
import { mostrarMensaje } from '../events/mensajeAlert'

const TareasForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const { createTarea } = useContext(TareasContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTarea({
      title,
      description,
    });
    setTitle("");
    setDescription("");
    mostrarMensaje('.containerDiv', '.form', 'bg-green-200')
  };

  return (
    <div className="containerDiv max-w-xl mx-auto">
      <form onSubmit={handleSubmit} className="form bg-blue-300 grid grid-cols-1 gap-2 p-5 m-3 rounded-md border-2 border-slate-100">
        <label className="font-bold text-2xl">
          Ingrese una nueva tarea:{" "}
        </label>
        <input
          className="p-2 my-2 rounded-md"
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
        />
        <textarea
          className="rounded-md p-2"
          placeholder="Escribe la descripción de la tarea.."
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          rows={5}
        />
        <button
          className="bg-green-700 rounded-md hover:bg-green-300 hover:text-black text-white font-bold px-5 py-2 mx-auto"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default TareasForm;
