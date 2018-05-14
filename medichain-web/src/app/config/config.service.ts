export class ConfigService {
    private ADMIN_ENDPOINT_URL: string;
    private AUTH_ENDPOINT_URL: string;
    constructor(){
        this.ADMIN_ENDPOINT_URL = "http://35.231.73.140:3001/api/";
        this.AUTH_ENDPOINT_URL = "http://35.231.73.140:3000/api/";
    }
    getAdminEndpoint():string{
        return this.ADMIN_ENDPOINT_URL;
    }
    getAuthEndpoint():string{
        return this.AUTH_ENDPOINT_URL;
    }
}