import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { DataAccessor } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class DataAccessorService {

	
		private NAMESPACE: string = 'org.medichain.mvp.DataAccessor';

    constructor(private dataService: DataService<DataAccessor>) {
    };

    public getAll(): Observable<DataAccessor[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<DataAccessor> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<DataAccessor> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<DataAccessor> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<DataAccessor> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
