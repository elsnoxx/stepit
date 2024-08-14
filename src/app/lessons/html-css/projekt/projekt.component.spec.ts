import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlCssProjektComponent } from './projekt.component';

describe('HtmlCssProjektComponent', () => {
  let component: HtmlCssProjektComponent;
  let fixture: ComponentFixture<HtmlCssProjektComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlCssProjektComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HtmlCssProjektComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
