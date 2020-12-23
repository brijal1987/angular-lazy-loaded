import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientTestingModule ],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test input validity', () => {
    const idInput = component.postForm.controls.id;
    expect(idInput.valid).toBeFalsy();

    idInput.setValue(1);
    expect(idInput.valid).toBeTruthy();
  })

  it('should test input errors', () => {
    const idInput = component.postForm.controls.id;
    expect(idInput && idInput.errors && idInput.errors.required).toBeTruthy();

    idInput.setValue(1);
    expect(idInput.errors).toBeNull();
  });

  it('should call onSend() method on form submit', () => {
    /*Get button from html*/
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // Supply id of your form below formID
    const getForm = fixture.debugElement.query(By.css('#formID'));
    expect(getForm.triggerEventHandler('submit', compiled)).toBeUndefined();
  });
});
