import { Injectable } from '@angular/core';
import { DataAuthEnabledService } from '../data.authenabled.service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MedicalPractitioner } from '../org.medichain.mvp';
import { ConfigService } from '../config/config.service';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MedicalPractitionerService {
private NAMESPACE = 'org.medichain.mvp.MedicalPractitioner';
private Medichain_BASEURL = 'http://localhost:3001/api/';
private MedichainAuth_BASEURL = 'http://localhost:3000/api/';
private Auth_BASEURL = 'http://localhost:3002/api/';


    constructor(private http: Http, private httpClient: HttpClient, private dataService: DataAuthEnabledService<MedicalPractitioner>) {
      let config = new ConfigService();
      this.Medichain_BASEURL = config.getAdminEndpoint();
      this.MedichainAuth_BASEURL = config.getAuthEndpoint();
    };

    public getAll(): Observable<MedicalPractitioner[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<MedicalPractitioner> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<MedicalPractitioner> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }
    public updateAsset(id: any, itemToUpdate: any): Observable<MedicalPractitioner> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<MedicalPractitioner> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

    // public submitUserAccount(body) {
    //   var url = this.Auth_BASEURL + 'register';
    //   return new Promise(resolve => {
    //       let headers: Headers = new Headers();
    //       headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    //       headers.append("Accept", "text/html; charset=UTF-8");
    //       this.http.post(url, body, {
    //         headers: headers
    //       }).map(res => res.json()).subscribe(data => {
    //         console.log(data);
    //         // this.data = data;
    //         resolve(data);
    //       }, error => {
    //         console.log(error.json());
    //       });
    //   });
    // }

    // public issueIdentity(identity) {
    // var url = this.Medichain_BASEURL + 'system/identities/issue';
    // let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    //   return this.httpClient.post(url, identity,
    //     {headers, responseType: 'blob'}).toPromise();
    // }

    // public importWallet(cardData) {
    // console.log('CARD-DATA', cardData);
    // const file = new File([cardData], 'myCard.card', {type: 'application/octet-stream', lastModified: Date.now()});
    // const formData = new FormData();
    // formData.append('card', file);
    // const headers = new HttpHeaders();
    // headers.set('Content-Type', 'multipart/form-data');
    // return this.httpClient.post(this.MedichainAuth_BASEURL + 'wallet/import',
    // formData, {withCredentials: true, headers}).toPromise();

    // }
}
