import ServiceConfig from "./ServiceConfig"
import { ErrorToast } from "../shared/ToastMessage";

const getAllExperienceService = async(endpoint='') => {
    const serviceConfig = new ServiceConfig();
    return await new Promise((resolve, reject) => {
        serviceConfig.getserviceconfig().get(endpoint).then( resp => {
            // console.log("From service", resp)
            resolve(resp)
        }).catch( err => {
            console.log("From service Error ", err, err.response);
            if(err.response === undefined) {
                ErrorToast("Network Error!!!")
            }
            reject(err)
        })
    })
}

export {getAllExperienceService}