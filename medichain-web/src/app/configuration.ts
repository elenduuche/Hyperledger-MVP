import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiIP: string = "http://35.231.73.140";
    public ApiPort: string = "3001";
    public Server: string = this.ApiIP+":"+this.ApiPort;
    public ApiUrl: string = "/api/";
    public ServerWithApiUrl = this.Server + this.ApiUrl;
}
