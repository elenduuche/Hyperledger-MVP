import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from './../login/login.service';
import { MedicalPractitionerService } from './../MedicalPractitioner/MedicalPractitioner.service';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MedicalPractitionerService, LoginService]
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  private asset;
  username = new FormControl('', Validators.required);
  constructor(private http: Http, fb: FormBuilder, private loginService: LoginService,
    private serviceMedicalPractitioner: MedicalPractitionerService) {
    this.myForm = fb.group({
      username: this.username,
    });
  }

  ngOnInit() {
    console.log(' access_token: ' + this.getCookie('access_token'));
  }

  submitCred(form: any): Promise<any> {
    const url = 'http://35.231.73.140:3000/auth/github';
    this.asset = {
      'username': this.username.value,
    };
    // Create login account and Insert card into mongodb
    return this.loginService.ConfirmAccount(this.asset.username).then((data: any) => {
      if (data != null) {
        var record = JSON.stringify(data);
        localStorage.setItem('UserInfo', record);
        console.log('opening', url);
        window.open(url, '_self');
      } else {
        console.log("@Login.SubmitCred: Username was not found!");
      }
    });
  }

  getCookie(name) {
    let pattern = RegExp(name + '=.[^;]*')
    let matched = document.cookie.match(pattern)
    if (matched) {
      let cookie = matched[0].split('=')
      return cookie[1]
    }
    return false
  }

}
