import { createContext, useEffect, useState } from "react";
import { tasks as data } from "../data/tasks";

export const TareasContext = createContext();

export const TareasContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);

  const createTarea = (tarea) => {
    setTasks([
      ...tasks,
      {
        id: tarea.length,
        title: tarea.title,
        description: tarea.description,
      },
    ]);
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
      }}
    >
      {props.children}
    </TareasContext.Provider>
  );
};
