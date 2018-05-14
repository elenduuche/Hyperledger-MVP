import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { GrantAccessService } from './Access.service';
import { DataAccessorService } from './../DataAccessor/DataAccessor.service';
import { ProfileInformationService } from './../ProfileInformation/ProfileInformation.service';

import 'rxjs/add/operator/toPromise';
@Component({
  selector: 'app-Access',
	templateUrl: './Access.component.html',
	styleUrls: ['./Access.component.css'],
  providers: [GrantAccessService, DataAccessorService, ProfileInformationService]
})
export class GrantAccessComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private setAsset;
  private errorMessage;
  private successMessage;
  private dataAccessors;
  private patients;

  accessorId = new FormControl('', Validators.required);
  patientId = new FormControl('', Validators.required);
  timestamp = new FormControl('', Validators.required);
  constructor(private serviceGrantAccess: GrantAccessService, private dataAccessorService: DataAccessorService,
    private profileInformationService: ProfileInformationService, fb: FormBuilder) {
    this.myForm = fb.group({
          accessorId: this.accessorId,
          patientId: this.patientId,
          timestamp: this.timestamp
    });
  };

  ngOnInit(): void {
    this.loadAll();
    this.loadAllDataAccessor();
    this.loadAllPatient();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceGrantAccess.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
    //  this.successMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.allAssets = tempList;
    })
    .catch((error) => {
        if (error === 'Server error') {
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });
  }

  loadAllDataAccessor(): Promise<any> {
    const tempList = [];
    return this.dataAccessorService.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.dataAccessors = tempList;
    })
    .catch((error) => {
        if (error === 'Server error') {
            this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.'
        } else {
            this.errorMessage = error;
        }
    });
  }

  loadAllPatient(): Promise<any> {
    const tempList = [];
    return this.profileInformationService.getAll()
    .toPromise()
    .then((result) => {
      this.errorMessage = null;
      result.forEach(asset => {
        tempList.push(asset);
      });
      this.patients = tempList;
    })
    .catch((error) => {
        if (error === 'Server error') {
            this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else if (error === '404 - Not Found') {
        this.errorMessage = '404 - Could not find API route. Please check your available APIs.'
        } else {
            this.errorMessage = error;
        }
    });
  }
	/**
   * Event handler for changing the checked state of a checkbox (handles array enumeration values)
   * @param {String} name - the name of the asset field to update
   * @param {any} value - the enumeration value for which to toggle the checked state
   */
  changeArrayValue(name: string, value: any): void {
    const index = this[name].value.indexOf(value);
    if (index === -1) {
      this[name].value.push(value);
    } else {
      this[name].value.splice(index, 1);
    }
  }

	/**
	 * Checkbox helper, determining whether an enumeration value should be selected or not (for array enumeration values
   * only). This is used for checkboxes in the asset updateDialog.
   * @param {String} name - the name of the asset field to check
   * @param {any} value - the enumeration value to check for
   * @return {Boolean} whether the specified asset field contains the provided value
   */
  hasArrayValue(name: string, value: any): boolean {
    return this[name].value.indexOf(value) !== -1;
  }

  onAccessorOptionSelected(event) {
    console.log(event.memberId);
    localStorage.setItem('accessorId', event.memberId);
   }
   onPatientOptionSelected(event) {
    console.log(event.patientId);
    localStorage.setItem('patientId', event.patientId);
   }

  addAsset(form: any): Promise<any> {
    let accessorId = localStorage.getItem('accessorId');
    let patientId = localStorage.getItem('patientId')
    this.asset = {
      $class: 'org.medichain.mvp.GrantAccess',
          'accessorId': 'org.medichain.mvp.DataAccessor#' + accessorId,
          'patientId': 'org.medichain.mvp.Patient#' + patientId,
          'timestamp': new Date(),
    };
    this.myForm.setValue({
          'accessorId': null,
          'patientId': null,
          'timestamp': null,
    });

    return this.serviceGrantAccess.grantAcess(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
      this.successMessage = 'Access granted successfully';
      this.myForm.setValue({
          'accessorId': null,
          'patientId': null,
          'timestamp': null,
      });
    })
    .catch((error) => {
        if (error === 'Server error') {
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        } else {
            this.errorMessage = error;
        }
    });
  }

   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.medichain.mvp.GrantAccess',
            'timestamp': this.timestamp.value,
            'accessorId': this.accessorId.value,
    };

    return this.serviceGrantAccess.updateAsset(form.get('patientId').value, this.asset)
		.toPromise()
		.then(() => {
      this.errorMessage = null;
      this.loadAll();
      this.successMessage = 'Record updated successfully';
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
            else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }


  deleteAsset(): Promise<any> {
    return this.serviceGrantAccess.revokeAccess(this.setAsset)
		.toPromise()
		.then(() => {
      this.errorMessage = null;
      this.loadAll();
      this.successMessage = 'Access revoked successfully';
		})
		.catch((error) => {
            if(error == 'Server error'){
				this.errorMessage = "Could not connect to REST server. Please check your configuration details";
			}
			else if(error == '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
			}
			else{
				this.errorMessage = error;
			}
    });
  }

  setId(accessorId: any, patientId: any): void {
    this.setAsset = {
           $class: 'org.medichain.mvp.RevokeAccess',
          'accessorId': 'org.medichain.mvp.DataAccessor#' + accessorId,
          'patientId': 'org.medichain.mvp.Patient#' + patientId,
          'timestamp': new Date(),
    };
  }

  getForm(id: any): Promise<any> {

    return this.serviceGrantAccess.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {

            'accessorId': null,
            'patientId': null,
            'timestamp': null,
      };
        if (result.accessorId) {
            formObject.accessorId = result.accessorId;
        } else {
          formObject.accessorId = null;
        }
        if (result.patientId ) {
            formObject.patientId = result.patientId;
        } else {
          formObject.patientId = null;
        }
        if (result.timestamp) {
            formObject.timestamp = result.timestamp;
        } else {
          formObject.timestamp = null;
        }
      this.myForm.setValue(formObject);

    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if(error === '404 - Not Found'){
				this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else{
            this.errorMessage = error;
        }
    });

  }

  resetForm(): void {
    this.myForm.setValue({

          'accessorId': null,
          'patientId': null,
          'timestamp': null,
      });
  }

}
