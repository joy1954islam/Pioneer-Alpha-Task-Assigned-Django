import { useState, useEffect } from "react";
import { ITask } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";

const useTodayTasks = (): ITask[] => {
  const tasks = useAppSelector((state) => state.tasks.tasks);
  const [todaysTasks, setTodaysTasks] = useState<ITask[]>([]);

  const date: Date = new Date();
  const year: number = date.getFullYear();
  const month: number = date.getMonth() + 1;
  const day: number = date.getDate();

  const dateTimeFormat = `${year}-${month.toString().padStart(2, "0")}-${day
    .toString()
    .padStart(2, "0")}`;

  useEffect(() => {
    let filteredTasks: ITask[] = tasks.filter(
      (task: ITask) => task.date === dateTimeFormat
    );
    setTodaysTasks(filteredTasks);
  }, [dateTimeFormat, tasks]);
  return todaysTasks;
};

export default useTodayTasks;
