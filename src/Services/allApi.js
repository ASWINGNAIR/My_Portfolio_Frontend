import {commonApi} from './commonApi'
import {serverUrl} from './seviceUrl'

// Add Project
export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-project`,reqBody,reqHeader)
}

// get project
export const getAllProjectApi = async(searchKey,reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-project?search=${searchKey}`,"",reqHeader)
}


// get admin projects
export const adminProjectApi = async()=>{
    return await commonApi('GET',`${serverUrl}/admin-project`)
}

// delete admin projects
export const deleteAdminProjectApi = async(id,reqHeader)=>{
    return await commonApi('DELETE',`${serverUrl}/remove-adminproject/${id}`,{},reqHeader)
}

// update admin project
export const updateAdminProjectApi = async(id,reqBody,reqHeader)=>{
    return await commonApi('PUT',`${serverUrl}/update-adminProject/${id}`,reqBody,reqHeader)
}