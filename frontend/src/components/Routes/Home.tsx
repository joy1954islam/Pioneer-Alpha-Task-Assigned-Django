import React, { useEffect } from "react";
import LayoutRoutes from "../Utilities/LayoutRoutes";
import { useAppSelector } from "../../store/hooks";
import useDescriptionTitle from "../hooks/useDescriptionTitle";
import { getAllTask,  } from "../../apis/hooks/taskApis";
import { useDispatch } from "react-redux";


const Home: React.FC = () => {

  const dispatch = useDispatch()

  const tasks = useAppSelector((state) => state.tasks.tasks);

  useEffect(() => {
    getAllTask(dispatch);
  }, [])

  console.log('home-tasks-data', tasks)

  useDescriptionTitle("Organize your tasks", "All tasks");
  return <LayoutRoutes title="All tasks" tasks={tasks || []}></LayoutRoutes>;
};

export default Home;

