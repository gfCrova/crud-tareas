import { useContext } from "react";
import { TareasContext } from "../context/TareasContext";

const TareasCard = ({ tarea }) => {
  const { borrarTarea } = useContext(TareasContext);

  return (
    <div className="rounded-md border-2 border-slate-100">
      <h1 className="text-2xl font-bold bg-slate-300 p-4">{tarea.title}</h1>
      <p className=" p-4 bg-slate-200 font-thin">{tarea.description}</p>
      <div className="bg-slate-400 mx-auto p-4">
        <button className="bg-orange-600 text-white px-3 py-1 rounded-md hover:bg-orange-300 hover:text-black mx-2">
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
    </div>
  );
};

export default TareasCard;
