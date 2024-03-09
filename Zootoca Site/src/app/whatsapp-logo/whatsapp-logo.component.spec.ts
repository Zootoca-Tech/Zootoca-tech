import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatsappLogoComponent } from './whatsapp-logo.component';

describe('WhatsappLogoComponent', () => {
  let component: WhatsappLogoComponent;
  let fixture: ComponentFixture<WhatsappLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatsappLogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhatsappLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
