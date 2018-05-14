import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Configuration } from '../configuration';
import { DataService } from '../data.service';
import { GrantAccessComponent } from './Access.component';
import {GrantAccessService} from './Access.service';
describe('GrantAccessComponent', () => {
  let component: GrantAccessComponent;
  let fixture: ComponentFixture<GrantAccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrantAccessComponent ],
imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
providers: [GrantAccessService, DataService, Configuration]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrantAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
