import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PostdetailsComponent } from './postdetails.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

describe('PostdetailsComponent', () => {
  let component: PostdetailsComponent;
  let fixture: ComponentFixture<PostdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      declarations: [ PostdetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getPost() with parameter ID', () => {
    spyOn(component, 'getPost');
    component.getPost(1);
    expect(component.getPost).toHaveBeenCalled();
  })
});
