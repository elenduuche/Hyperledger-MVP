import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatTooltipModule,
} from '@angular/material';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';

import { Configuration }     from './configuration';
import { DataService }     from './data.service';
// import { TransactionComponent } from './Transaction/Transaction.component'

import { ProfileInformationComponent } from './ProfileInformation/ProfileInformation.component';
import { PatientMasterDataComponent } from './PatientMasterData/PatientMasterData.component';
import { PrescriptionComponent } from './Prescription/Prescription.component';
import { ConsultationInformationComponent } from './ConsultationInformation/ConsultationInformation.component';
import { InsuranceDataComponent } from './InsuranceData/InsuranceData.component';
import { ImmunizationRecordComponent } from './ImmunizationRecord/ImmunizationRecord.component';
import { MedicalPracticeComponent } from './MedicalPractice/MedicalPractice.component';



import {
  AgmCoreModule
} from '@agm/core';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule,
    MatInputModule,
    MatTooltipModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    UserProfileComponent,
    TableListComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    UpgradeComponent,
    LoginComponent,
    ProfileInformationComponent,
		PatientMasterDataComponent,
		PrescriptionComponent,
		ConsultationInformationComponent,
		InsuranceDataComponent,
    ImmunizationRecordComponent,
    MedicalPracticeComponent,

  ],
  providers: [
    Configuration,
    DataService
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
