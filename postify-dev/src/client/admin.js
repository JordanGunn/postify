import client from "./client";
import {PATH_API_RELATIVE} from "../../appConfig";


const getAdminStats = () =>
    client.get(`${PATH_API_RELATIVE}/admin`);


export {
    getAdminStats,
}