import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssTestZnalostiComponent } from './test-znalosti.component';

describe('HtmlCssTestZnalostiComponent', () => {
  let component: HtmlCssTestZnalostiComponent;
  let fixture: ComponentFixture<HtmlCssTestZnalostiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssTestZnalostiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssTestZnalostiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
