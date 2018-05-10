import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Http, Headers } from '@angular/http';
import { MedicalPractitioner } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MedicalPractitionerService {

	
private NAMESPACE = 'org.medichain.mvp.MedicalPractitioner';
private Medichain_BASEURL = 'http://localhost:3001/api/';
private Auth_BASEURL = 'http://localhost:3002/api/';


    constructor(private http: Http, private dataService: DataService<MedicalPractitioner>) {
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

    public submitUserAccount(body) {
      var url = this.Auth_BASEURL + 'register';
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

    public issueIdentity(body) {
      var url = this.Medichain_BASEURL + 'system/identities/issue';
      return new Promise(resolve => {
          let headers: Headers = new Headers();
          headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
          headers.append('Accept', 'application/octet-stream; charset=UTF-8');
          this.http.post(url, body, {
            headers: headers
          }).subscribe(data => {
            let blob = new Blob([data.blob()], { type: 'application/octet-stream' });
            let url = window.URL.createObjectURL(blob);
            window.open(url);
            // this.data = data;
            resolve(data);
          }, error => {
            console.log(error.json());
          });
  
      });
  
    }
}
