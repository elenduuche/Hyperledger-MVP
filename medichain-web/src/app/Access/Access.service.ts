import { Injectable } from '@angular/core';
import { DataAuthEnabledService } from '../data.authenabled.service';
import { Observable } from 'rxjs/Observable';
import { GrantAccess } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class GrantAccessService {

	
		private NAMESPACE: string = 'org.medichain.mvp.GrantAccess';

    constructor(private dataService: DataAuthEnabledService<GrantAccess>) {
    };

    public getAll(): Observable<GrantAccess[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<GrantAccess> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public grantAcess(itemToAdd: any): Observable<GrantAccess> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<GrantAccess> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public revokeAccess(id: any): Observable<GrantAccess> {
      return this.dataService.add(this.NAMESPACE, id);
    }

}
