import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: '' },
    { path: 'MedicalPractitioner', title: "Medical Practitioner", icon:'assessment', class: ''},
    { path: 'MedicalPractice', title: "Medical Practice", icon:'content_paste', class: ''},
    { path: 'DataAccessor', title: "Data Accessor", icon:'how_to_reg', class: ''},
    { path: 'ProfileInformation', title: "Patient Profile", icon:'verified_user', class: ''},
		
    // { path: 'PatientMasterData', title: "Patient Master", icon:'content_paste', class: ''},
    
    // { path: 'Prescription', title: "Prescription", icon:'content_paste', class: ''},
    
    // { path: 'ConsultationInformation', title: "Consultation Information", icon:'content_paste', class: ''},
    
    // { path: 'InsuranceData', title: "Insurance Data", icon:'content_paste', class: ''},
    
    // { path: 'ImmunizationRecord', title: "Immunization Record", icon:'content_paste', class: ''},

    // { path: 'table-list', title: 'Medical Record',  icon:'content_paste', class: '' },
    // { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
