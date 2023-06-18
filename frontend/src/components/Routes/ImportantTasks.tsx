import React, { useState, useEffect } from "react";
import { ITask } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import LayoutRoutes from "../Utilities/LayoutRoutes";

const ImportantTasks: React.FC = () => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [importantTasks, setImportantTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const filteredTasks: ITask[] = tasks.filter((task: ITask) => task.important);
    setImportantTasks(filteredTasks);
  }, [tasks]);

  useDescriptionTitle("Tasks marked as important", "Important tasks");

  return (
    <LayoutRoutes title="Important tasks" tasks={importantTasks}></LayoutRoutes>
  );
};

export default ImportantTasks;
