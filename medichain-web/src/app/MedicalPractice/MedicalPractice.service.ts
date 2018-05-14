import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { MedicalPractice } from '../org.medichain.mvp';
import 'rxjs/Rx';

// Can be injected into a constructor
@Injectable()
export class MedicalPracticeService {

	
		private NAMESPACE: string = 'org.medichain.mvp.MedicalPractice';
	

    constructor(private dataService: DataService<MedicalPractice>) {
    };

    public getAll(): Observable<MedicalPractice[]> {
        return this.dataService.getAll(this.NAMESPACE);
    }

    public getAsset(id: any): Observable<MedicalPractice> {
      return this.dataService.getSingle(this.NAMESPACE, id);
    }

    public addAsset(itemToAdd: any): Observable<MedicalPractice> {
      return this.dataService.add(this.NAMESPACE, itemToAdd);
    }

    public updateAsset(id: any, itemToUpdate: any): Observable<MedicalPractice> {
      return this.dataService.update(this.NAMESPACE, id, itemToUpdate);
    }

    public deleteAsset(id: any): Observable<MedicalPractice> {
      return this.dataService.delete(this.NAMESPACE, id);
    }

}
