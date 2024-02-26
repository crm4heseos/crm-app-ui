import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPartnerRegisterComponent } from './contact-partner-register.component';

describe('ContactPartnerRegisterComponent', () => {
  let component: ContactPartnerRegisterComponent;
  let fixture: ComponentFixture<ContactPartnerRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactPartnerRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContactPartnerRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
