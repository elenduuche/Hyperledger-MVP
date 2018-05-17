import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MedicalPractitionerService } from './../MedicalPractitioner/MedicalPractitioner.service';
import { GeneralService } from './../general.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [GeneralService, MedicalPractitionerService]
})
export class DashboardComponent implements OnInit {

  private currentUser;
  private authenticated = false;
  private loggedIn = false;
  constructor(private route: ActivatedRoute,
              private router: Router, private generalService: GeneralService,
              private serviceMedicalPractitioner: MedicalPractitionerService) { }

  ngOnInit() {

    this.getCurrentUser().then((resp: any) => {
      this.confirmUserAuth();
   });

  }

    confirmUserAuth() {
      const url = 'http://35.231.73.140:3000/auth/github';
      let record = JSON.parse(localStorage.getItem('UserInfo'));
      this.route
      .queryParams
      .subscribe((queryParams) => {
        const loggedIn = queryParams['loggedIn'];
        if (loggedIn) {
          this.authenticated = true;
          return this.router.navigate(['/'])
            .then(() => {
              record = JSON.parse(localStorage.getItem('UserInfo'));
              if ((record != null) && (record.hasWallet === false)) {
              return this.processIdentity(record);
               }
            });
         } else {
          if ((record != null) && (record.hasWallet === false)) {
            return this.processIdentity(record);
           }
         }
     });

    }
     processIdentity(record) {
       //Issue Identity
      const identity = 'participant=' + record.participant + '#' + record.userID +
      '&userID=' + record.memberId + '&options=' + '{}';
      return this.generalService.issueIdentity(identity).then((identityResp: any) => {
        if (identityResp != null) {
       console.log('@Dashboard.issueIdentity request was succesful:');
       let record = JSON.parse(localStorage.getItem('UserInfo'));
        this.generalService.importWallet(identityResp);
        this.generalService.updateUserWalletStatus(record.username)
        }
    })
    .then(() => {
             this.checkWallet();
      //    //Update hasWallet status of User record in MongoDb
    })
    .catch(() => {
      return this.getCurrentUser()
      .then((resp: any) => {
        if (resp.participant !== 'org.hyperledger.composer.system.NetworkAdmin#admin') {
          return this.router.navigate(['/login'])
        }
      });
//    //Update hasWallet status of User record in MongoDb
     });
  }

     //Import wallet
    //  this.generalService.importWallet(identityResp).then((walletResp: any) => {
    //   if (walletResp != null) {
    //    console.log('@Dashboard.importWallet response:' + walletResp);
    //    //Update hasWallet status of User record in MongoDb
    //     }
    // });

  checkWallet() {
    return this.generalService.checkWallet()
      .then((results) => {
        if (results['length'] > 0) {
          this.loggedIn = true;
          return this.getCurrentUser()
            .then(() => {
             //this.loadAll();
            });
         }
      });
  }

  getCurrentUser() {
    return this.generalService.getCurrentUser()
      .then((currentUser) => {
        this.currentUser = currentUser;
        const isAdmin = this.currentUser.indexOf('org.hyperledger.composer.system.NetworkAdmin#admin') !== -1;
       if (isAdmin) {
        localStorage.setItem('IsAdmin', 'true');
       } else {
        localStorage.setItem('IsAdmin', 'false');
       }
     });
  }

}
