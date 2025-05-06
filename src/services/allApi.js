import { commonApi } from "./coomonApi"
import { serverUrl } from "./serverUrl"


//register - content-type - application/json
export const registerApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/register`,reqBody)
}

//login
export const LoginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`, reqBody)
}