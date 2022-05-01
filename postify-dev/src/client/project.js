import client from "./client";
import {PATH_API_RELATIVE} from "../../appConfig";


const getProject = params =>
    client.get(`${PATH_API_RELATIVE}/project`, { params });


const getAllProjects = () =>
    client.get(`${PATH_API_RELATIVE}/projects`);


const createProject = ( userId, title, desc, level = 5 ) =>
    client.post(`${PATH_API_RELATIVE}/project`, {
        userID: userId,
        projDesc: desc,
        projName: title,
        projLevel: level,
        // projCreationDate: date,
});


const updateProject = ( projectId, title, desc, level ) =>
    client.put(`${PATH_API_RELATIVE}/project`, {
        projID: projectId,
        projName: title,
        projDesc: desc,
        projLevel: level
    });


const deleteProject = params =>
    client.delete(`${PATH_API_RELATIVE}/project`, { params })


export {
    getProject,
    createProject,
    updateProject,
    deleteProject,
    getAllProjects,
};
