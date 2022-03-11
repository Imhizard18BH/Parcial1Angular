import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionTemperaturaComponent } from './conversion-temperatura.component';

describe('ConversionTemperaturaComponent', () => {
  let component: ConversionTemperaturaComponent;
  let fixture: ComponentFixture<ConversionTemperaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionTemperaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionTemperaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
