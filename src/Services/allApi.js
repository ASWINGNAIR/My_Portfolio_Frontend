import {commonApi} from './commonApi'
import {serverUrl} from './seviceUrl'

// Add Project
export const addProjectApi = async(reqBody,reqHeader)=>{
    return await commonApi('POST',`${serverUrl}/add-project`,reqBody,reqHeader)
}