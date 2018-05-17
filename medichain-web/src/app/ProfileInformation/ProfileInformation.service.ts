import { Injectable } from '@angular/core';
import { DataAuthEnabledService } from '../data.authenabled.service';
import { Observable } from 'rxjs/Observable';
import { ProfileInformation } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class ProfileInformationService {

	
		private NAMESPACE: string = 'org.medichain.mvp.ProfileInformation';
	



    constructor(private dataService: DataAuthEnabledService<ProfileInformation>) {
    };

    public getAll(): Observable<ProfileInformation[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<ProfileInformation> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<ProfileInformation> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<ProfileInformation> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<ProfileInformation> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
