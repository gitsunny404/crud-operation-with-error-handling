import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDataShareComponent } from './modal-data-share.component';

describe('ModalDataShareComponent', () => {
  let component: ModalDataShareComponent;
  let fixture: ComponentFixture<ModalDataShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDataShareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDataShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
