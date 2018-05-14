import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { MedicalPractitioner } from '../org.medichain.mvp';
import { ConfigService } from '../config/config.service'
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class LoginService {
private NAMESPACE = 'org.medichain.mvp.MedicalPractitioner';
private Medichain_BASEURL = 'http://localhost:3001/api/';
private MedichainAuth_BASEURL = 'http://localhost:3000/api/';
private Auth_BASEURL = 'http://localhost:3002/api/';


    constructor(private http: Http, private httpClient: HttpClient, private dataService: DataService<MedicalPractitioner>) {
      let config = new ConfigService();
      this.Medichain_BASEURL = config.getAdminEndpoint();
      this.MedichainAuth_BASEURL = config.getAuthEndpoint();
      this.Auth_BASEURL = config.getAuthEndpoint();
    };

    public ConfirmAccount(username) {
      var url = this.Auth_BASEURL + 'confirm/' + username;
      return new Promise(resolve => {
          let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/json');
          this.http.get(url, {
            headers: headers
          }).map(res => res.json()).subscribe(data => {
            console.log(data);
            // this.data = data;
            resolve(data);
          }, error => {
            console.log(error.json());
          });
      });
    }

    public importWallet(cardData, networkCard, token) {
    let url1 = this.MedichainAuth_BASEURL + 'wallet/import?name=' + networkCard;
    const file = new File([cardData], 'myCard.card', {type: 'application/octet-stream', lastModified: Date.now()});
    const formData = new FormData();
    formData.append('card', file);
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'multipart/form-data');
    return this.httpClient.post(this.MedichainAuth_BASEURL + 'wallet/import',
    formData, {withCredentials: true, headers}).toPromise();

    }
}
