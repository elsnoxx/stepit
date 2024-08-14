import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssUkazkovePraceComponent } from './ukazkove-prace.component';

describe('HtmlCssUkazkovePraceComponent', () => {
  let component: HtmlCssUkazkovePraceComponent;
  let fixture: ComponentFixture<HtmlCssUkazkovePraceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssUkazkovePraceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssUkazkovePraceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
