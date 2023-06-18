import { useEffect, useState } from "react";
import { ITask } from "../../interfaces";

interface Props {
  tasks: ITask[];
  done: boolean;
}

const useCompletedTasks = (props: Props): { tasks: ITask[] } => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(() => {
    const filteredTasks: ITask[] = props.tasks.filter((task: ITask) => {
      if (props.done) {
        return task.completed;
      } else {
        return !task.completed;
      }
    });
    setTasks(filteredTasks);
  }, [props.tasks, props.done]);

  return { tasks };
};

export default useCompletedTasks;
