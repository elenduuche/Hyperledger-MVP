import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { LoginComponent } from './login/login.component';

import { ProfileInformationComponent } from './ProfileInformation/ProfileInformation.component';
import { PatientMasterDataComponent } from './PatientMasterData/PatientMasterData.component';
import { PrescriptionComponent } from './Prescription/Prescription.component';
import { ConsultationInformationComponent } from './ConsultationInformation/ConsultationInformation.component';
import { InsuranceDataComponent } from './InsuranceData/InsuranceData.component';
import { ImmunizationRecordComponent } from './ImmunizationRecord/ImmunizationRecord.component';
import { MedicalPracticeComponent } from './MedicalPractice/MedicalPractice.component';
import { MedicalPractitionerComponent } from './MedicalPractitioner/MedicalPractitioner.component';


const routes: Routes =[
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'table-list',     component: TableListComponent },
    { path: 'notifications',  component: NotificationsComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    { path: 'login',          component: LoginComponent },
    { path: 'ProfileInformation', component: ProfileInformationComponent},
		{ path: 'PatientMasterData', component: PatientMasterDataComponent},
		{ path: 'Prescription', component: PrescriptionComponent},
		{ path: 'ConsultationInformation', component: ConsultationInformationComponent},
		{ path: 'InsuranceData', component: InsuranceDataComponent},
    { path: 'ImmunizationRecord', component: ImmunizationRecordComponent},
    { path: 'MedicalPractice', component: MedicalPracticeComponent},	
    { path: 'MedicalPractitioner', component: MedicalPractitionerComponent},
    { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
