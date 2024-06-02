import ServiceConfig from "./ServiceConfig"

const LoginService = () => {
    const serviceConfig = new ServiceConfig();

    serviceConfig.getserviceconfig().get('').then( r => {
        console.log(r);
    }).catch(e => {
        console.log(e)
    })
}

export default LoginService;