import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaiTapNgContentComponentComponent } from './bai-tap-ng-content-component.component';

describe('BaiTapNgContentComponentComponent', () => {
  let component: BaiTapNgContentComponentComponent;
  let fixture: ComponentFixture<BaiTapNgContentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaiTapNgContentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaiTapNgContentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
