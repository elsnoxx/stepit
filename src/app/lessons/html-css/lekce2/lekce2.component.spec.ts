import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssLekce2Component } from './lekce2.component';

describe('HtmlCssLekce2Component', () => {
  let component: HtmlCssLekce2Component;
  let fixture: ComponentFixture<HtmlCssLekce2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssLekce2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssLekce2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
