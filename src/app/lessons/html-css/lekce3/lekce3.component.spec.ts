import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssLekce3Component } from './lekce3.component';

describe('HtmlCssLekce3Component', () => {
  let component: HtmlCssLekce3Component;
  let fixture: ComponentFixture<HtmlCssLekce3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssLekce3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssLekce3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
