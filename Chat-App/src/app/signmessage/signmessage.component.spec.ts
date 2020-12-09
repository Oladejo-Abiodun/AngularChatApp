import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignmessageComponent } from './signmessage.component';

describe('SignmessageComponent', () => {
  let component: SignmessageComponent;
  let fixture: ComponentFixture<SignmessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignmessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
