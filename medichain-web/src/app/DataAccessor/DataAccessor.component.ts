import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DataAccessorService } from './DataAccessor.service';
import 'rxjs/add/operator/toPromise';
import { GeneralService } from './../general.service';
@Component({
  selector: 'app-DataAccessor',
	templateUrl: './DataAccessor.component.html',
	styleUrls: ['./DataAccessor.component.css'],
  providers: [DataAccessorService, GeneralService]
})
export class DataAccessorComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;
  private successMessage;

  userName = new FormControl('', Validators.required);
  memberId = new FormControl('', Validators.required);
  typeOfDataAccessor = new FormControl('', Validators.required);
  constructor(private serviceDataAccessor: DataAccessorService,
    private generalService: GeneralService, fb: FormBuilder) {
    this.myForm = fb.group({
          userName: this.userName,
          memberId: this.memberId,
          typeOfDataAccessor: this.typeOfDataAccessor
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceDataAccessor.getAll()
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

  addAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.medichain.mvp.DataAccessor',
          'userName': this.userName.value,
          'memberId': Math.floor((Math.random() * 100000) + 1),
          'typeOfDataAccessor': this.typeOfDataAccessor.value,
    };

    this.myForm.setValue({
          'userName': null,
          'memberId': null,
          'typeOfDataAccessor': null,
    });

    return this.serviceDataAccessor.addAsset(this.asset)
    .toPromise()
    .then(() => {
      this.errorMessage = null;
      this.loadAll();
      this.successMessage = 'Record created successfully';
       // Create login account and Insert card into mongodb
       var record = 'name=' + this.asset.userName + '&username='
       + this.asset.userName + '&password=' + 'password'
       + '&participant=' + 'org.medichain.mvp.DataAccessor'
       + '&userID=' + this.asset.memberId + '&hasWallet=' + false;
       this.myForm.setValue({
        'userName': null,
        'memberId': null,
        'typeOfDataAccessor': null,
    });
     return this.generalService.submitUserAccount(record);

    })
    .catch((error) => {
        if (error === 'Server error') {
            this.errorMessage = 'Could not connect to REST server. Please check your configuration details';
        } else {
            this.errorMessage = error;
        }
    });
  }

   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: 'org.medichain.mvp.DataAccessor',
            'typeOfDataAccessor': this.typeOfDataAccessor.value,
            'userName': this.userName.value,
    };

    return this.serviceDataAccessor.updateAsset(form.get('memberId').value, this.asset)
		.toPromise()
		.then(() => {
      this.errorMessage = null;
      this.loadAll();
      this.successMessage = 'Record updated successfully';
		})
		.catch((error) => {
            if(error === 'Server error') {
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

    return this.serviceDataAccessor.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
      this.errorMessage = null;
      this.loadAll();
      this.successMessage = 'Record deleted successfully';
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

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceDataAccessor.getAsset(id)
    .toPromise()
    .then((result) => {
    this.errorMessage = null;
      let formObject = {

            'userName': null,
            'memberId': null,
            'typeOfDataAccessor': null,
      };
        if (result.userName) {
            formObject.userName = result.userName;
        } else {
          formObject.userName = null;
        }
        if (result.memberId ) {
            formObject.memberId = result.memberId;
        } else {
          formObject.memberId = null;
        }
        if (result.typeOfDataAccessor) {
            formObject.typeOfDataAccessor = result.typeOfDataAccessor;
        } else {
          formObject.typeOfDataAccessor = null;
        }
      this.myForm.setValue(formObject);

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

  resetForm(): void {
    this.myForm.setValue({

          'userName': null,
          'memberId': null,
          'typeOfDataAccessor': null,
      });
  }

}
