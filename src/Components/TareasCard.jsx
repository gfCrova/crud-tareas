import { useContext, useState } from "react";
import { TareasContext } from "../context/TareasContext";
import TareasUpdate from "./TareasUpdate";

const TareasCard = ({ tarea }) => {
  const { borrarTarea, actualizarTarea } = useContext(TareasContext);
  const [editing, setEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(tarea.title);
  const [newDescription, setNewDescription] = useState(tarea.description);

  const handleModificar = () => {
    setEditing(true);
  };

  const handleCancelar = () => {
    setEditing(false);
  };

  const handleGuardar = () => {
    const nuevosAtributos = {
      title: newTitle,
      description: newDescription,
    };
    actualizarTarea(tarea.id, nuevosAtributos);
    setEditing(false);
  };


  return (
    <div className="rounded-md border-2 border-slate-100">
      {editing ? (
        <TareasUpdate
          newTitle={newTitle}
          setNewTitle={setNewTitle}
          newDescription={newDescription}
          setNewDescription={setNewDescription}
          handleGuardar={handleGuardar}
          handleCancelar={handleCancelar}
        />
      ) : (
      <>
      <h1 className="text-2xl font-bold bg-blue-100 p-4">{tarea.title}</h1>
      <div className="bg-blue-200 p-4">
        <p className="overflow-auto font-thin">{tarea.description}</p>
      </div>
      <div className="bg-slate-400 mx-auto p-4">
        <button className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-orange-300 hover:text-black mx-2"
          onClick={handleModificar}
        >
          {" "}
          Modificar
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-300 hover:text-black"
          onClick={() => {
            borrarTarea(tarea.id);
          }}
        >
          {" "}
          Eliminar
        </button>
      </div>
      </>
      )}
    </div>
  );
};

export default TareasCard;
