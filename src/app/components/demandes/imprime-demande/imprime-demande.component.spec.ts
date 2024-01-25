import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeDemandeComponent } from './imprime-demande.component';

describe('ImprimeDemandeComponent', () => {
  let component: ImprimeDemandeComponent;
  let fixture: ComponentFixture<ImprimeDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprimeDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
