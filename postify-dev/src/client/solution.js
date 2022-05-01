import client from "./client";
import {PATH_API_RELATIVE} from "../../appConfig";


const getSolution = ( params = {} ) =>
    client.get(`${PATH_API_RELATIVE}/project/solution`, { params });


const getAllSolutions = ( params = {} ) =>
    client.get(`${PATH_API_RELATIVE}/project/solutions`, { params });


const createSolution = ( userID, projID, desc, vcsLink, fileUrl ) =>
client.post(`${PATH_API_RELATIVE}/project/solution`, {
    userID: userID,
    projID: projID,
    solDesc: desc,
    solGitLink: vcsLink,
    solFileURL: fileUrl,
});


const updateSolution = ( userId, solutionId, desc, vcs_link, file, upvote, downvote ) =>
    client.put(`${PATH_API_RELATIVE}/project/solution`, {
        solutionID: solutionId,
        userID:      userId,
        solDesc:     desc,
        solGitLink:  vcs_link,
        solFileURL:  file,
        solUpVote:   upvote,
        solDownVote: downvote,
})


const deleteSolution = params =>
    client.delete(`${PATH_API_RELATIVE}/project/solution`, { params });


export {
    getSolution,
    getAllSolutions,
    createSolution,
    updateSolution,
    deleteSolution
};