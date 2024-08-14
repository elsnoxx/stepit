import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudacityLekce4Component } from './lekce4.component';

describe('AudacityLekce4Component', () => {
  let component: AudacityLekce4Component;
  let fixture: ComponentFixture<AudacityLekce4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudacityLekce4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudacityLekce4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
