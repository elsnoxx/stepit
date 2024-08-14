import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudacityComponent } from './audacity.component';

describe('AudacityComponent', () => {
  let component: AudacityComponent;
  let fixture: ComponentFixture<AudacityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AudacityComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AudacityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
