import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssHodnoceniComponent } from './hodnoceni.component';

describe('HtmlCssHodnoceniComponent', () => {
  let component: HtmlCssHodnoceniComponent;
  let fixture: ComponentFixture<HtmlCssHodnoceniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssHodnoceniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssHodnoceniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
