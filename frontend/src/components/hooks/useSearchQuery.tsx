import { useEffect, useState } from "react";
import { ITask } from "../../interfaces";
import { useAppSelector } from "../../store/hooks";

const useSearchQuery = (searchQuery: string) => {
  const tasks = useAppSelector((state) => state.tasks.tasks);

  const [matchedTasks, setMatchedTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const filteredTasks = tasks.filter((task: ITask) => {
      return task.title.toLowerCase().includes(searchQuery.toLowerCase());
    });
    if (searchQuery.trim().length) {
      setMatchedTasks(filteredTasks);
    } else {
      setMatchedTasks([]);
    }
  }, [searchQuery, tasks]);

  return matchedTasks;
};

export default useSearchQuery;
