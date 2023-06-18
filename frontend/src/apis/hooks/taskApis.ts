import axios from "axios";

import { tasksActions } from "../../store/Tasks.store";
import { ITask } from "../../interfaces";



const baseURL = 'http://127.0.0.1:8000/api';
const getTaskURL = '/tasks'



export const getAllTask = (dispatch: any) => {
    try {
        return axios.get(`${baseURL}${getTaskURL}`).then((response) => {
            console.log('service-', response.data.results);
            const results = response.data.results;
            return dispatch(tasksActions.getAllTask(results));
        });
    } catch (error) {
        console.log(error);
    }
}

export const createNewTask = (newTaskPayload: ITask) => {
    console.log('service-newTaskPayload-->', newTaskPayload)
    try {
        axios.post(`${baseURL}${getTaskURL}`, newTaskPayload).then((response) => {
            console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
}

export const updateTask = (taskid: string, UpdateTaskPayload: ITask) => {
    console.log('service-newTaskPayload update-->', UpdateTaskPayload)
    try {
        axios.put(`${baseURL}${getTaskURL}/${taskid}/`, UpdateTaskPayload).then((response) => {
            console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
}


export const removeTaskData = (taskId: string) => {
    try {
        axios.delete(`${baseURL}${getTaskURL}/${taskId}/`, ).then((response) => {
            console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
}
export const markAsImportantAndUnImportant = (taskId: string, taskImportant: boolean) => {
    const payloadData = {
        "important": !taskImportant
    }
    try {
        axios.put(`${baseURL}${getTaskURL}/mark-as-important/${taskId}/`, payloadData).then((response) => {
            console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
}

export const MarkAsCompletedAndUncompleted = (taskId: string, taskCompleted: boolean) => {
    const payloadData = {
        "completed": !taskCompleted
    }
    try {
        axios.put(`${baseURL}${getTaskURL}/mark-as-completed/${taskId}/`, payloadData).then((response) => {
            console.log(response);
        });
    } catch (error) {
        console.log(error);
    }
}
