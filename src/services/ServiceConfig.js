import axios from "axios";

class ServiceConfig {
    constructor() {
        this.base_url = process.env.REACT_APP_API_BASE_URL;
    }

    getserviceconfig() {
        return axios.create({
            baseURL: this.base_url,
            timeout: 1000,
            headers: {
                'Access-Control-Allow-Headers': 'content-type',
                'Content-Type': 'application/json',
                'REQUEST-FROM': 'WEB',
            }
        })
    }

}

export default ServiceConfig;