import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Configuration } from './configuration';

@Injectable()
export class GeneralService {

  private medichainAuthActionUrl: string;
  private medichainBaseActionUrl: string;
  private nodeAuthActionUrl: string;
  constructor(private http: Http, private httpClient: HttpClient, private _configuration: Configuration) {
    this.medichainAuthActionUrl = _configuration.MedichainAuth_BASEURL;
    this.medichainBaseActionUrl = _configuration.Medichain_BASEURL;
    this.nodeAuthActionUrl = _configuration.Auth_BASEURL
  }

  // submitUserAccount(userinfo) {
  //   return this.httpClient.post(this.nodeAuthActionUrl + 'register', userinfo).toPromise();
  // }

  updateUserWalletStatus(username) {
    return this.httpClient.get(this.nodeAuthActionUrl + 'updatewalletstatus/' + username, {withCredentials: true}).toPromise();
  }

   issueIdentity(identity) {
    var url = this.medichainBaseActionUrl + 'system/identities/issue';
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
      return this.httpClient.post(url, identity,
        {headers, responseType: 'blob'}).toPromise();
    }
  checkWallet() {
    return this.httpClient.get(this.medichainAuthActionUrl + 'wallet', {withCredentials: true}).toPromise();
  }

  importWallet(cardData) {
      console.log('CARD-DATA', cardData);
        const file = new File([cardData], 'myCard.card', {type: 'application/octet-stream', lastModified: Date.now()});

        const formData = new FormData();
        formData.append('card', file);

        const headers = new HttpHeaders();
        headers.set('Content-Type', 'multipart/form-data');
        return this.httpClient.post(this.medichainAuthActionUrl + 'wallet/import', formData, {
          withCredentials: true,
          headers
        }).toPromise();
  }
   submitUserAccount(body) {
    var url = this.nodeAuthActionUrl + 'register';
    return new Promise(resolve => {
        let headers: Headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        headers.append("Accept", "text/html; charset=UTF-8");
        this.http.post(url, body, {
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
  getCurrentUser() {
    return this.httpClient.get(this.medichainBaseActionUrl + 'system/ping', {withCredentials: true}).toPromise()
      .then((data) => {
        return data['participant'];
      });
  }


  initiateSampleTransaction(assetId, newValue) {
    const transactionDetails = {
      $class: 'org.medichain.mvp.SampleTransaction',
      asset: 'resource:org.medichain.mvp.asset#' + assetId,
      newValue: newValue,
      timestamp: new Date()
    };
    return this.httpClient.post(this.medichainAuthActionUrl + 'org.medichain.mvp.SampleTransaction',
    transactionDetails, {withCredentials: true}).toPromise();
  }
}
