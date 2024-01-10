import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDemandeComponent } from './create-demande.component';

describe('CreateDemandeComponent', () => {
  let component: CreateDemandeComponent;
  let fixture: ComponentFixture<CreateDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
