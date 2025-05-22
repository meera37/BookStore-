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

//google login api
export const googleLoginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/google-login`,reqBody)
}

//get home book
export const homeBookApi = async()=>{
    return await commonApi('GET',`${serverUrl}/all-home-book`)
}

//get all jobs
export const getAllJobsApi = async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/all-jobs?search=${searchKey}`)
}

// --------------------------------------------
//                  users

//api to upload a book
export const uploadBookApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST', `${serverUrl}/add-book`, reqBody , reqHeader)
}

//get all books
export const getAllBookApi = async(searchkey,reqHeader)=>{
    //query parameter baseurl?key=value
    return await commonApi('GET',`${serverUrl}/all-books?search=${searchkey}`,'',reqHeader)
}

//api to view a book
export const viewABookApi = async(id)=>{
    return await commonApi('GET',`${serverUrl}/view-book/${id}`)//path parameter
}

//-----------------------------------------------------------------------------------------
//-------------------------------ADMIN-----------------------------------------------------

// api to get all books - admin

export const getAllBookAdminApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/admin-all-books`,"",reqHeader)
}

//api to approve  a book

export const approveBookApi = async(reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/approve-book`,reqBody,reqHeader)
}

//api to get all users
export const getAllUsersApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-users`,"",reqHeader)
}
//api to add all jobs
export const addJobApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/add-job`,reqBody)
}

//api to delete a job
export const deleteJobApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/delete-job/${id}`)
}