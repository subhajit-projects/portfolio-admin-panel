import ServiceConfig from "./ServiceConfig"

const LoginService = async(endpoint='', postData={}) => {
    const serviceConfig = new ServiceConfig();
    // const promiseResp = new Promise()

    // const response = await serviceConfig.getserviceconfig().get(endpoint);
    // response.then( res => {
    //     console.log("From service", res)
    //     promiseResp.res
    // }).catch( err => {
    //     console.log("From service Error ", err)
    // });

    // return promiseResp;


    return await new Promise((resolve, reject) => {
        serviceConfig.getserviceconfig().post(endpoint, postData).then( resp => {
            console.log("From service", resp)
            resolve(resp)
        }).catch( err => {
            console.log("From service Error ", err)
            reject(err)
        })
    })
}

export default LoginService;