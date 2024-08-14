import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssLekce5Component } from './lekce5.component';

describe('HtmlCssLekce5Component', () => {
  let component: HtmlCssLekce5Component;
  let fixture: ComponentFixture<HtmlCssLekce5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssLekce5Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssLekce5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
