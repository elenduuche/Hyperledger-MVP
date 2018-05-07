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
    { path: 'table-list', title: 'Medical Record',  icon:'content_paste', class: '' },
    { path: 'user-profile', title: 'My Profile',  icon:'person', class: '' },
    { path: 'ProfileInformation', title: "Profile Information", icon:'content_paste', class: ''},
		
    { path: 'PatientMasterData', title: "Patient Master", icon:'content_paste', class: ''},
    
    { path: 'Prescription', title: "Prescription", icon:'content_paste', class: ''},
    
    { path: 'ConsultationInformation', title: "Consultation Information", icon:'content_paste', class: ''},
    
    { path: 'InsuranceData', title: "Insurance Data", icon:'content_paste', class: ''},
    
    { path: 'ImmunizationRecord', title: "Immunization Record", icon:'content_paste', class: ''},
    // { path: 'typography', title: 'Typography',  icon:'library_books', class: '' },
    // { path: 'icons', title: 'Icons',  icon:'bubble_chart', class: '' },
    // { path: 'maps', title: 'Maps',  icon:'location_on', class: '' },
    // { path: 'notifications', title: 'Notifications',  icon:'notifications', class: '' },
    { path: 'upgrade', title: 'Upgrade to PRO',  icon:'unarchive', class: 'active-pro' },
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
