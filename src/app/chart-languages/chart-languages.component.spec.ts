import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartLanguagesComponent } from './chart-languages.component';

describe('ChartLanguagesComponent', () => {
  let component: ChartLanguagesComponent;
  let fixture: ComponentFixture<ChartLanguagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartLanguagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
