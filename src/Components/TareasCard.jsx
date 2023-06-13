import { useContext } from "react";
import { TareasContext } from "../context/TareasContext";

const TareasCard = ({ tarea }) => {
  const { borrarTarea } = useContext(TareasContext);

  return (
    <div className="bg-slate-400 p-4 rounded-md border-2 border-slate-100">
      <h1 className="text-2xl font-bold">{tarea.title}</h1>
      <p className="py-3 font-thin">{tarea.description}</p>
      <div className="grid grid-cols-2 gap-1">
        <button className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-300 hover:text-black mx-auto">
          {" "}
          Modificar
        </button>
        <button
          className="bg-red-600 text-white px-3 py-1 rounded-md hover:bg-red-300 hover:text-black mx-auto"
          onClick={() => {
            borrarTarea(tarea.id);
          }}
        >
          {" "}
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TareasCard;
