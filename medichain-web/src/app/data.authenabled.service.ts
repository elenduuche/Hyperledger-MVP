import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Configuration } from './configuration';

@Injectable()
export class DataAuthEnabledService<Type> {
    private resolveSuffix = '?resolve=true';
    private actionUrl: string;
    private headers: Headers;

    constructor(private http: Http, private httpClient: HttpClient, private _configuration: Configuration) {
        this.actionUrl = _configuration.PrivateServerWithApiUrl;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Accept', 'application/json');
    }

    public getAll(ns: string): Observable<Type[]> {
        console.log('GetAll ' + ns + ' to ' + this.actionUrl + ns);
        return this.httpClient.get(`${this.actionUrl}${ns}`, {withCredentials: true})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public getSingle(ns: string, id: string): Observable<Type> {
        console.log('GetSingle ' + ns);

        return this.httpClient.get(this.actionUrl + ns + '/' + id + this.resolveSuffix, {withCredentials: true})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public add(ns: string, asset: Type): Observable<Type> {
        console.log('Entered DataService add');
        console.log('Add ' + ns);
        console.log('asset', asset);

        return this.httpClient.post(this.actionUrl + ns, asset, {withCredentials: true})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public update(ns: string, id: string, itemToUpdate: Type): Observable<Type> {
        console.log('Update ' + ns);
        console.log('what is the id?', id);
        console.log('what is the updated item?', itemToUpdate);
        console.log('what is the updated item?', JSON.stringify(itemToUpdate));
        return this.httpClient.put(`${this.actionUrl}${ns}/${id}`, itemToUpdate, {withCredentials: true})
          .map(this.extractData)
          .catch(this.handleError);
    }

    public delete(ns: string, id: string): Observable<Type> {
        console.log('Delete ' + ns);

        return this.httpClient.delete(this.actionUrl + ns + '/' + id, {withCredentials: true})
          .map(this.extractData)
          .catch(this.handleError);
    }

    private handleError(error: any): Observable<string> {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
          error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    private extractData(res: Response): any {
        return res.json();
    }

}
