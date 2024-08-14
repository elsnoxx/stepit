import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HtmlCssLekce4Component } from './lekce4.component';

describe('HtmlCssLekce4Component', () => {
  let component: HtmlCssLekce4Component;
  let fixture: ComponentFixture<HtmlCssLekce4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssLekce4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssLekce4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
