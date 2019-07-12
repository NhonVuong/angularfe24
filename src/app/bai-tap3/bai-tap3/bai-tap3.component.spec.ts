import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap3Component } from './bai-tap3.component';

describe('BaiTap3Component', () => {
  let component: BaiTap3Component;
  let fixture: ComponentFixture<BaiTap3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
