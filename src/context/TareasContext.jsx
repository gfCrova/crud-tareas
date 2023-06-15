import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TareasContext = createContext();

export const TareasContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTarea = (tarea) => {
    const getUltimoId = tasks.reduce((maxId, tarea) => Math.max(maxId, tarea.id), 0);
    const newTarea = {
      id: getUltimoId + 1,
      title: tarea.title,
      description: tarea.description,
    };
    setTasks([...tasks, newTarea]);
  };

  const borrarTarea = (tareaId) => {
    setTasks(tasks.filter((tarea) => tarea.id !== tareaId));
  };

  useEffect(() => {
    setTasks(data);
  }, []);

  return (
    <TareasContext.Provider
      value={{
        tasks,
        createTarea,
        borrarTarea,
      }} >
      {props.children}
    </TareasContext.Provider>
  );
};
