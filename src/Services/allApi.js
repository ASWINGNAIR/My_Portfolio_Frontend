import {commonApi} from './commonApi'
import {serverUrl} from './seviceUrl'

// Add Project
export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-project`,reqBody,reqHeader)
}

// get project
export const getAllProjectApi = async(reqHeader)=>{
    return await commonApi('GET',`${serverUrl}/all-project`,"",reqHeader)
}