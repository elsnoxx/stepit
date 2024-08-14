import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssPublikovaniComponent } from './publikovani.component';

describe('HtmlCssPublikovaniComponent', () => {
  let component: HtmlCssPublikovaniComponent;
  let fixture: ComponentFixture<HtmlCssPublikovaniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssPublikovaniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssPublikovaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
