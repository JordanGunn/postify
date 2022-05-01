import client from "./client";
import {PATH_API_RELATIVE} from "../../appConfig";


const getUser = ( params ) =>
    client.get(`${PATH_API_RELATIVE}/user`, { params });


const getAllUsers = ( ) =>
  client.get(`${PATH_API_RELATIVE}/users`);


const createUser = ( firstName, lastName, userName, password ) =>
    client.post(`${PATH_API_RELATIVE}/user`, {
        firstName: firstName,
        lastName:  lastName,
        userName:  userName,
        password:  password,
})


const userLogin = ( username, password ) =>
    client.post(`${PATH_API_RELATIVE}/login`,
    {
            userName: username,
            password: password,
        },
 { withCredentials: true }
        )


export {
    getUser,
    getAllUsers,
    createUser,
    userLogin
};