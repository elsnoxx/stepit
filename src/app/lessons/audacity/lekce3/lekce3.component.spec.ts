import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudacityLekce3Component } from './lekce3.component';

describe('AudacityLekce3Component', () => {
  let component: AudacityLekce3Component;
  let fixture: ComponentFixture<AudacityLekce3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudacityLekce3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudacityLekce3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
