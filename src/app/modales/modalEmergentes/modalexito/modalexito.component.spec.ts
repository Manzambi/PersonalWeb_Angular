import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalexitoComponent } from './modalexito.component';

describe('ModalexitoComponent', () => {
  let component: ModalexitoComponent;
  let fixture: ComponentFixture<ModalexitoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalexitoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalexitoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
