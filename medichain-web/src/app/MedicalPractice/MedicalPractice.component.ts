import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { MedicalPracticeService } from './MedicalPractice.service';
import 'rxjs/add/operator/toPromise';
@Component({
	selector: 'app-MedicalPractice',
	templateUrl: './MedicalPractice.component.html',
	styleUrls: ['./MedicalPractice.component.css'],
  providers: [MedicalPracticeService]
})
export class MedicalPracticeComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
	private errorMessage;

  
      
          practiceId = new FormControl("", Validators.required);
        
  
      
          practiceName = new FormControl("", Validators.required);
        
  
      
          dateOfImmunization = new FormControl("", Validators.required);
        
  


  constructor(private serviceMedicalPractice:MedicalPracticeService, fb: FormBuilder) {
    this.myForm = fb.group({
    
        
          practiceId:this.practiceId,
        
    
        
          subTypeOfImmunization:this.subTypeOfImmunization,
        
    
        
          dateOfImmunization:this.dateOfImmunization
        
    
    });
  };

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceMedicalPractice.getAll()
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
      $class: "org.medichain.mvp.MedicalPractice",
      
        
          "practiceId":this.practiceId.value,
        
      
        
          "subTypeOfImmunization":this.subTypeOfImmunization.value,
        
      
        
          "dateOfImmunization":this.dateOfImmunization.value
        
      
    };

    this.myForm.setValue({
      
        
          "practiceId":null,
        
      
        
          "subTypeOfImmunization":null,
        
      
        
          "dateOfImmunization":null
        
      
    });

    return this.serviceMedicalPractice.addAsset(this.asset)
    .toPromise()
    .then(() => {
			this.errorMessage = null;
      this.myForm.setValue({
      
        
          "practiceId":null,
        
      
        
          "subTypeOfImmunization":null,
        
      
        
          "dateOfImmunization":null 
        
      
      });
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
      $class: "org.medichain.mvp.MedicalPractice",
      
        
          
        
    
        
          
            "subTypeOfImmunization":this.subTypeOfImmunization.value,
          
        
    
        
          
            "dateOfImmunization":this.dateOfImmunization.value
          
        
    
    };

    return this.serviceMedicalPractice.updateAsset(form.get("practiceId").value,this.asset)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
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

    return this.serviceMedicalPractice.deleteAsset(this.currentId)
		.toPromise()
		.then(() => {
			this.errorMessage = null;
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

    return this.serviceMedicalPractice.getAsset(id)
    .toPromise()
    .then((result) => {
			this.errorMessage = null;
      let formObject = {
        
          
            "practiceId":null,
          
        
          
            "subTypeOfImmunization":null,
          
        
          
            "dateOfImmunization":null 
          
        
      };



      
        if(result.practiceId){
          
            formObject.practiceId = result.practiceId;
          
        }else{
          formObject.practiceId = null;
        }
      
        if(result.practiceName){
          
            formObject.practiceName = result.practiceName;
          
        }else{
          formObject.practiceName = null;
        }
      
        if(result.dateOfImmunization){
          
            formObject.dateOfImmunization = result.dateOfImmunization;
          
        }else{
          formObject.dateOfImmunization = null;
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
      
        
          "practiceId":null,
        
      
        
          "subTypeOfImmunization":null,
        
      
        
          "dateOfImmunization":null 
        
      
      });
  }

}
