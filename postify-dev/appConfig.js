export const PORT_DEFAULT_API   = 8888;
export const HTTPS = `https`
export const HTTP = `http`
export const URL_BASE_LOCAL =`http://localhost:${PORT_DEFAULT_API}`
export const URL_BASE_SERV =`${HTTPS}://postify.charliewei.com`
export const PATH_API_RELATIVE  = `/4537/termproject/api/v1`
export const PATH_API_LOCAL  = `${URL_BASE_LOCAL}${PATH_API_RELATIVE}`
export const PATH_API_SERV  = `${URL_BASE_SERV}${PATH_API_RELATIVE}`
export const URL_BASE = URL_BASE_SERV

const appConfig = {
    PATH_API_RELATIVE,
    PORT_DEFAULT_API,
    PATH_API_LOCAL,
    PATH_API_SERV,
    URL_BASE,
};

export default appConfig