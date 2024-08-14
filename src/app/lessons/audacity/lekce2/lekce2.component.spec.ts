import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudacityLekce2Component } from './lekce2.component';

describe('AudacityLekce2Component', () => {
  let component: AudacityLekce2Component;
  let fixture: ComponentFixture<AudacityLekce2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudacityLekce2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudacityLekce2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
