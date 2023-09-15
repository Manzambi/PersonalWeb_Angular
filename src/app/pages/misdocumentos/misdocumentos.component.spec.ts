import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisdocumentosComponent } from './misdocumentos.component';

describe('MisdocumentosComponent', () => {
  let component: MisdocumentosComponent;
  let fixture: ComponentFixture<MisdocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisdocumentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisdocumentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
