import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssLekce1Component } from './lekce1.component';

describe('HtmlCssLekce1Component', () => {
  let component: HtmlCssLekce1Component;
  let fixture: ComponentFixture<HtmlCssLekce1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssLekce1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssLekce1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
