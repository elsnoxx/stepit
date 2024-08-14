import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HodnoceniComponent } from './hodnoceni.component';

describe('HodnoceniComponent', () => {
  let component: HodnoceniComponent;
  let fixture: ComponentFixture<HodnoceniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HodnoceniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HodnoceniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
