import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudacityLekce1Component } from './lekce1.component';

describe('Lekce1Component', () => {
  let component: AudacityLekce1Component;
  let fixture: ComponentFixture<AudacityLekce1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudacityLekce1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudacityLekce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
