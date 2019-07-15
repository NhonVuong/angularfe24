import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapDatVeComponent } from './bai-tap-dat-ve.component';

describe('BaiTapDatVeComponent', () => {
  let component: BaiTapDatVeComponent;
  let fixture: ComponentFixture<BaiTapDatVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapDatVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapDatVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
