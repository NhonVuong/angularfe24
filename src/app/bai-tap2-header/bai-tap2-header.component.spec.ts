import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTap2HeaderComponent } from './bai-tap2-header.component';

describe('BaiTap2HeaderComponent', () => {
  let component: BaiTap2HeaderComponent;
  let fixture: ComponentFixture<BaiTap2HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTap2HeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTap2HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
