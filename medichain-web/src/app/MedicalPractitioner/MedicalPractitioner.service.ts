import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { MedicalPractitioner } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MedicalPractitionerService {

	
		private NAMESPACE: string = 'org.medichain.mvp.MedicalPractitioner';
	

    constructor(private dataService: DataService<MedicalPractitioner>) {
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

}
