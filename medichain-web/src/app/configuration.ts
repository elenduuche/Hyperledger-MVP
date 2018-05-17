import { Injectable } from '@angular/core';

@Injectable()
export class Configuration {
    public ApiIP = 'http://35.231.73.140';
    public ApiPort1 = '3000';
    public ApiPort2 = '3001';
    public Server1: string = this.ApiIP + ':' + this.ApiPort1;
    public Server2: string = this.ApiIP + ':' + this.ApiPort2;
    public ApiUrl = '/api/';
    public MedichainAuth_BASEURL = this.Server1 + this.ApiUrl;
    public Medichain_BASEURL = this.Server2 + this.ApiUrl;
    public Auth_BASEURL = 'http://localhost:3002/api/';
}
