import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MedicalPractitionerService } from './MedicalPractitioner.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-MedicalPractitioner',
	templateUrl: './MedicalPractitioner.component.html',
	styleUrls: ['./MedicalPractitioner.component.css'],
  providers: [MedicalPractitionerService]
})
export class MedicalPractitionerComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          firstName = new FormControl("", Validators.required);
        
          lastName = new FormControl("", Validators.required);
        
          userName = new FormControl("", Validators.required);

  constructor(private serviceMedicalPractitioner:MedicalPractitionerService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          firstName:this.firstName,
      
          lastName:this.lastName,
        
          userName:this.userName
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceMedicalPractitioner.getAll()
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
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
      $class: "org.medichain.mvp.MedicalPractitioner",
      
        
          "firstName": this.firstName.value,
        
      
        
          "lastName":this.lastName.value,
        
      
        
          "userName":this.userName.value
        
      
    };

    this.myForm.setValue({
      
        
          "firstName":null,
        
      
        
          "lastName":null,
        
      
        
          "userName":null
        
      
    });

    return this.serviceMedicalPractitioner.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
          "firstName":null,
        
          "lastName":null,
        
          "userName":null 
        
      
      });
      this.loadAll();
    })
    .catch((error) => {
        if(error == 'Server error'){
            this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else{

            this.errorMessage = error;
        }
    });
  }


   updateAsset(form: any): Promise<any> {
    this.asset = {
      $class: "org.medichain.mvp.MedicalPractitioner",

            "firstName":this.lastName.value,
            "lastName":this.lastName.value,
            "userName":this.userName.value
    };

    return this.serviceMedicalPractitioner.updateAsset(form.get("firstName").value,this.asset)
		.toPromise()
		.then(() => {
      this.errorMessage = null;
      this.loadAll();
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

    return this.serviceMedicalPractitioner.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
      this.errorMessage = null;
      this.loadAll();
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

  setId(id: any): void{
    this.currentId = id;
  }

  getForm(id: any): Promise<any>{

    return this.serviceMedicalPractitioner.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "firstName":null,
          
        
          
            "lastName":null,
          
        
          
            "userName":null 
          
        
      };



      
        if(result.firstName){
          
            formObject.firstName = result.firstName;
          
        }else{
          formObject.firstName = null;
        }
      
        if(result.lastName){
          
            formObject.lastName = result.lastName;
          
        }else{
          formObject.lastName = null;
        }
      
        if(result.userName){
          
            formObject.userName = result.userName;
          
        }else{
          formObject.userName = null;
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

  resetForm(): void{
    this.myForm.setValue({
      
        
          "firstName":null,
        
          "lastName":null,

          "userName":null 
        
      
      });
  }

}
