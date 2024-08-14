import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssVscComponent } from './vsc.component';

describe('HtmlCssVscComponent', () => {
  let component: HtmlCssVscComponent;
  let fixture: ComponentFixture<HtmlCssVscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssVscComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssVscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
